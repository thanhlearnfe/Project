var inputUsername = document.getElementById('username');
var inputPassword= document.getElementById('password');
var objpeople =[
    {
        username:"phanxuanthanh",
        password:"123456"
    },
    {
        username:"lucien",
        password:"123456"
    },
    {
        username:"dongnam",
        password:"123456"
    },
    {
        username:"kimmy",
        password:"123456"
    },
    {
        username:"minhngoc",
        password:"123456"
    }
]
var formLogin = document.getElementById('form-login');
if (formLogin.attachEvent){
    formLogin.attachEvent('submit',onFormSubmit);
}
else{
    formLogin.addEventListener('submit',onFormSubmit)
}

function onFormSubmit(e) {
    if(e.preventDefault) e.preventDefault();// Ngăn hành dong reload trang

    var username = inputUsername.value;
    var password = inputPassword.value;
    for(i=0;i< objpeople.length;i++)
    {
        if(username == objpeople[0].username && password == objpeople[0].password) {
            window.location = './indexacc1.html';// truy cập đên cửa sổ mới
           
          
        }
        else if(username == objpeople[1].username && password == objpeople[1].password)
        {
            window.location = './indexacc2.html';
        }
        else if(username == objpeople[2].username && password == objpeople[2].password)
        {
            window.location = './indexacc3.html';
        }
         else if(username == objpeople[3].username && password == objpeople[3].password)
        {
            window.location = './indexacc4.html';
        }
        else if(username == objpeople[4].username && password == objpeople[4].password)
        {
            window.location = './indexacc5.html';
        }
        else if(username == objpeople[i].username && password != objpeople[i].password){
            var divErrors = document.getElementById('errors');
            divErrors.innerHTML =   
            '<div class="alert alert-danger">' +
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            '<strong>Có lỗi xảy ra:</strong> Mật khẩu không đúng hoặc chưa nhập mật khẩu!' +
            '</div>';
        }
        else if(username != objpeople[i].username && password == objpeople[i].password){
            var divErrors = document.getElementById('errors');
            divErrors.innerHTML =   
            '<div class="alert alert-danger">' +
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            '<strong>Có lỗi xảy ra:</strong> Tài khoản không đúng hoặc chưa nhập tài khoản!' +
            '</div>';
        }
        else {
            var divErrors = document.getElementById('errors');
            divErrors.innerHTML =   
            '<div class="alert alert-danger">' +
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            '<strong>Có lỗi xảy ra:</strong> Tên đăng nhập hoặc mật khẩu không đúng!' +
            '</div>';
        }
    }
    

    return false;
}


