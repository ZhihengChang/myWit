/**
 * get state from seesionStorage
 * @param {String} key 
 * @returns 
 */
export function getStateFromSession(key){
    return JSON.parse(sessionStorage.getItem(key));
}

/**
 * get state from localStorage
 * @param {String} key 
 * @returns 
 */
export function getStateFromLocal(key){
    return JSON.parse(localStorage.getItem(key));
}

/**
 * store a state in seesionStorage
 * @param {String} key 
 * @param {*} state 
 */
export function storeStateInSession(key, state){
    sessionStorage.setItem(key, JSON.stringify(state));
}

/**
 * store a state in localStorage
 * @param {String} key 
 * @param {*} state 
 */
export function storeStateInLocal(key, state){
    localStorage.setItem(key, JSON.stringify(state));
}