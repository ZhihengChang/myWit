/**
 * Show the given alert message in given type format
 * sucess: green
 * error: red 
 * @param {String} type 
 * @param {String} msg 
 */
 export default function showAlert(type, msg){
    hideAlert();
    const markup = `<div class="alert alert-${type}">${msg}</div>`;
    document.querySelector('.App').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, 5000);
}

/**
 * Hide alert message
 */
function hideAlert(){
    const alert = document.querySelector('.alert');
    if(alert){
        alert.parentElement.removeChild(alert);
    }
}