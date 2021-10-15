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



//search
const search_item =document.getElementById('filter-search');
const cakes = document.querySelectorAll('.slider__col1-row1');
search_item.addEventListener('keyup',searchItem);
const banner =document.getElementById('banner');
const next =document.querySelector('.slick-next');
const title = document.querySelectorAll('.slider__col1');
console.log(title);
function searchItem(){
  let valueItem=search_item.value.toLowerCase();
  Array.from(cakes).forEach(function(ele){
    let nameItem =ele.lastElementChild.textContent;
    if(nameItem.toLowerCase().indexOf(valueItem) !== -1){
      ele.style.display='block';
      banner.style.display='block';
      $(".slider__col1-title").css({display:"block"});
      $(".slider__col1-title").css({margin:"0 0 25px 0"});
      $(".slider__col1").css({margin:"0 0 75px 0"});
    }
    else{
      ele.style.display='none';
      banner.style.display='none';
      $(".slider__col1-title").css({display:"none"});
      $(".slider__col1-title").css({margin:"0"});
      $(".slider__col1").css({margin:"0"});
    }
  })

  
}
  // Search

  /* $(document).ready(function(){
    $("#filter-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#gallery div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }); */