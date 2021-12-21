const $ =document.querySelector.bind(document);
const $$ =document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabactive = $('.tab-item.active');
const line = $('.line');
line.style.left = tabactive.offsetLeft + "px";
line.style.width = tabactive.offsetWidth + "px";

tabs.forEach(function(tab,index){
    const pane =panes[index]
    tab.onclick =function(){
        $(".tab-item.active").classList.remove('active');
        $(".tab-pane.active").classList.remove('active');

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        
       this.classList.add('active');
       pane.classList.add('active');

    }
})