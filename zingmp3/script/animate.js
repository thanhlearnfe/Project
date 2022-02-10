const overviewtabs =$$('.overview-list')
const tabspain = $$('.tab-pain')
const viewalls = $$('.nav-view-all')


overviewtabs.forEach(function(tab,index){

    const pane =tabspain[index]
    tab.onclick =function(){
        console.log(index)

        $(".overview-list.active").classList.remove('active');
        $(".tab-pain.active").classList.remove('active');

       pane.classList.add('active');
       this.classList.add('active');
     

    }
})


viewalls.forEach(function(view,index){
    const pane =tabspain[index+1];
    const over = overviewtabs[index+1];
    view.onclick =function(){
       

        $(".overview-list.active").classList.remove('active');
        $(".tab-pain.active").classList.remove('active');

       pane.classList.add('active');
       over.classList.add('active');
       $('.body-scroll').scrollTop=0 +'px';
    }
})


//Hien thi the tim kiem
const searchInput = $('.header-search-border input');
searchInput.onclick = function() {
    $('.history-search').classList.add('active');
    $('.header-search-border').style.background = 'var( --history-search-bgr)';
}

//Hieu ung chuyen anh
$('img.img-animation-three').animate([
    {width:'230px',left: '48px',top: '0',opacity:'1',zIndex:'3'},
    {width:'160px',left: '0px',opacity:'0.4',top:'35px',zIndex:'2'},
    {width:'190px',left: '26px',opacity:'0.6',top: '16px',zIndex:'1'}
    
],{
    duration: 6000,
  iterations: Infinity
})

$('img.img-animation-second').animate([
    {width:'190px',left: '26px',opacity:'0.6',top: '16px',zIndex:'2'},
    {width:'230px',left: '48px',top: '0',opacity:'1',zIndex:'3'},
    {width:'160px',left: '0px',opacity:'0.4',top:'35px',zIndex:'1'}
],{
    duration: 6000,
  iterations: Infinity
})

$('img.img-animation-frist').animate([
    {width:'160px',left: '0px',opacity:'0.4',top:'35px',zIndex:'1'},
    {width:'190px',left: '26px',opacity:'0.6',top: '16px',zIndex:'2'},
    {width:'230px',left: '48px',top: '0',opacity:'1',zIndex:'3'},
    
],{
    duration: 6000,
  iterations: Infinity
})


