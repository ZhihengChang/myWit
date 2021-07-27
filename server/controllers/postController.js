/**
 * Post Controller
 * 
 * used by: postRoutes.js
 * descriptions: provides post management functions
 */

//util
const path = require('path');
const util = require("../../util/server_util");

const DBAPI = require("../../util/DBAPI");

//Models
const Student = require('../models/studentModel');
const User = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
const catchAsync = require('../../util/catchAsync');
const AppError = require('../../util/appError');


//Middlewares




//Controller Functions

/**
 * Get all posts in posts collections
 */
exports.getAllPosts = catchAsync(async function (req, res, next) {
    console.log("get all posts");
    //modify query with DBAPI
    const result = new DBAPI(Post.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

    const posts = await result.query;
    util.sendResponse(res, 200, {
        status: 'success',
        result: result.length,
        data: { posts }
    });
});

exports.getPost = catchAsync(async function (req, res, next) {
    console.log("get post " + req.params.post_id);
    const post_id = req.params.post_id;
    const post = await Post.findById(post_id);

    util.sendResponse(res, 200, {
        status: 'success',
        data: { post }
    });
});

exports.getAllPostComments = catchAsync(async function (req, res, next) {
    console.log("get all comments of post " + req.params.post_id);
    
    const post_id = req.params.post_id;
    const comments = await Comment.find({post_id});

    util.sendResponse(res, 200, {
        status: 'success',
        result: comments.length,
        data: { comments }
    });
});

/**
 * Create a post based on request body
 */
exports.createPost = catchAsync(async function (req, res, next) {
    console.log("create post author " + req.body.author);
    
    const user = await User.findOne({ username: req.body.author });
    if(!user){
        return next(
            new AppError(
                'User no longer exist!',
                404
            )
        );
    }

    // Create post
    const newPost = await Post.create(req.body);

    // Add to user
    user.posts.push(newPost._id);
    user.save({ validateBeforeSave: false });
    
    util.sendResponse(res, 200, {
        status: 'success',
        data: { post: newPost }
    });
});

/**
 * Like or Dislike a post
 */
exports.likePost = catchAsync(async function (req, res, next) {

    let message = 'liked';
    const post_id = req.body.post_id;
    const user_id = req.body.user_id;

    // Validate the post still exist
    const user = await User.findById(user_id);
    const post = await Post.findById(post_id);
    if(!post){
        return next(
            new AppError(
                'Post has been deleted',
                404
            )
        );
    }

    const post_likes_index_userid = post.likes.indexOf(user_id);
    const user_likes_index_postid = user.likes.indexOf(post_id);

    if(post_likes_index_userid != -1 && user_likes_index_postid != -1){
        post.likes.splice(post_likes_index_userid, 1);
        user.likes.splice(user_likes_index_postid, 1);
        message = 'disliked';
    }else{
        // Add user_id and post_id to post and user
        post.likes.push(user_id);
        user.likes.push(post_id);  
    }

    await post.save();
    await user.save({ validateBeforeSave: false });

    util.sendResponse(res, 200, {
        status: 'success',
        message,
    });
});

exports.commentPost = catchAsync(async function (req, res, next) {
    
    const post = await Post.findById(req.body.post_id);
    console.log(req.body);
    if(!post){
        return next(
            new AppError(
                'Post has been deleted',
                404
            )
        );
    }

    const newComment = await Comment.create(req.body);
    post.comments.push(newComment._id);
    await post.save();
    
    util.sendResponse(res, 200, {
        status: 'success',
        message: 'commented'
    });
});

