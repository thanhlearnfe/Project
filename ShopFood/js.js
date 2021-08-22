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

// Slider
var index=1;
const imgnext=document.querySelector('.js-next')
imgnext.addEventListener('click',nextimg)
function nextimg(){ 
    var imgs=["./acsets/img/img5.jpg","./acsets/img/img4.jpg","./acsets/img/img3.jpg","./acsets/img/img2.jpg","./acsets/img/img1.jpg"]
    document.getElementById('img').src=imgs[index];
    index++;
        if (index==5){
            index=0;
        }
    }
setInterval(nextimg,3000);



    
    
    
        
