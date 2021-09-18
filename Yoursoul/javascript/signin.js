var inputUsername = document.getElementById('username');
var inputPassword= document.getElementById('password');
var CORRECT_USER='phanxuanthanh';
var CORRECT_PASSWORD ='123456';
var formLogin = document.getElementById('form-login');
if (formLogin.attachEvent){
    formLogin.attachEvent('submit',onFormSubmit);
}
else{
    formLogin.addEventListener('submit',onFormSubmit)
}

function onFormSubmit(e) {
    if(e.preventDefault) e.preventDefault();// Ngan hanh dong reload trang

    var username = inputUsername.value;
    var password = inputPassword.value;

    if(username == CORRECT_USER && password == CORRECT_PASSWORD) {
        window.location = './indexchild/test.html';
    } else {
        alert('sa')
    }

    return false;
}