export function isAuthorized(token){
    return token.length !== 0 && token !== 'loggedout';
}