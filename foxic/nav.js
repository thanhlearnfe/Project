document.getElementById("hiddenlan").style.display="none";
document.getElementById("showmoney").style.display="none";
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
}

//show lan
function showlan(){
  var x=document.getElementById("hiddenlan");
  var y=document.getElementById("showmoney");
  if(x.style.display=="none"){
    x.style.display="block";
    y.style.display="none";// Đóng Us
  }
  else{
    x.style.display="none";
  }
}
//show money
function showmoney(){
  var x=document.getElementById("showmoney");
  var y=document.getElementById("hiddenlan");
  if(x.style.display=="none"){
    x.style.display="block";
    y.style.display="none";
  }
  else{
    x.style.display="none";
  }
}

