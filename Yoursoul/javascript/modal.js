const showLog=document.querySelector('.js-showlog')
const modal=document.querySelector('.modal')
const closeLog=document.querySelector('.js-close')
const showregister=document.querySelector('.js-showlog-too')
const modalToo=document.querySelector('.modal-too')
const closeLogtooo=document.querySelector('.js-close-too')
const linkchild=document.querySelector('.js-modal-child')
const linkChildlogin=document.querySelector('.js-show-chile-res')
//Ham hien
function ShowLog(){
    modal.classList.add('open')
}
function CloseLog(){
    modal.classList.remove('open')
}
function ShowRegister(){
    modalToo.classList.add('open')
}
function CloseLogToo(){
    modalToo.classList.remove('open')
}
function Showlinkchild(){
    modalToo.classList.remove('open')
    modal.classList.add('open')
}
function Showlinkchildlogin(){
    modal.classList.remove('open')
    modalToo.classList.add('open')
}
showregister.addEventListener('click',ShowRegister)
showLog.addEventListener('click',ShowLog)
closeLog.addEventListener('click',CloseLog)
closeLogtooo.addEventListener('click',CloseLogToo)
linkchild.addEventListener('click',Showlinkchild)
linkChildlogin.addEventListener('click',Showlinkchildlogin)

$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()>400){
        document.getElementById("backtotop").style.display="flex";
        $('#backtotop').fadeIn();
      }
      else{
        $('#backtotop').fadeOut();
      }
    });
    $("#backtotop").click(function(){
      $('html,body').animate({scrollTop:0},500);
    });
    
  });
