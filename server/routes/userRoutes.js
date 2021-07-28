const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout/:id', authController.logout);

router.patch('/updatePassword',
    authController.protect,
    authController.updatePassword
);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// API
router.route('/')
    .get(userController.getAllUser)
    .post(userController.createUser);

router.route('/:id')
    .get(userController.getUser)
    .post(userController.updateUser)
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        userController.deleteUser
    );

router.route('/student/:wit_id')
    .get(userController.getStudent);

router.route('/friends/:id')
    .get(userController.getFriends);

module.exports = router;