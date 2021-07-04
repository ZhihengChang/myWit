/**
 * server_utilites
 * 
 * used by: * server side file
 * descriptions: simplify server operations and to client communications
 */
module.exports = {
    sendResponse,
    filterObject,
    findAndRemove,
}

/**
 * Send json response with status code
 * @param {Response} res 
 * @param {Number} statusCode 
 * @param {Object} data 
 */
function sendResponse(res, statusCode, data){
    res.status(statusCode).json(data);
}

/**
 * Filter the given object to only contains the given allowedfields
 * @param {Object} obj 
 * @param  {...String} allowedFields 
 */
function filterObject(obj, ...allowedFields) {
    let filteredObject = {};

    Object.keys(obj).forEach(key => {
        if(allowedFields.includes(key)){
            filteredObject[key] = obj[key];
        }
    });

    return filteredObject;
}

/**
 * Remove the target from the given array
 * if removed, return true, otherwise return false
 * @param {Array} arr 
 * @param {String | Number} target 
 * @returns boolean
 */
function findAndRemove(arr, target){
    let index = arr.indexOf(target);
    return arr.splice(index, 1).length;
}