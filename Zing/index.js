var $ =document.querySelector.bind(document);
var $$ =document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY ="MP3"


const heading = $('header marquee')
const cdthumb = $('.cd-thumb')
const audio =$('#audio')
const cd =$('.cd');
var player = $('.player');
const btnplay = $('.btn-toggle-play');
const progress = $('#progress');
const timepresent = $('.span-left');
const timetotal = $('.span-right');
const next = $('.btn-next');
const prev = $('.btn-prev');
const bgrsong = $('.song');
const random = $('.btn-random');
const btnrepeat = $('.btn-repeat');
const playlist = $('.playlist');
const volume = $('.volume');
const button =$('.button');
const openclose = $('.body-background');
const bodybgr = $('body')
const app ={
    curentindex:0,
    bgrindex:0,
    isPlaying:false,
    isRandom:false,
    isRepeat:false,
    isMute:false,
    isOpen:false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY ))||{},
    songs:[
        {
            id:1,
            name:"Có hẹn với thanh xuân",
            singer:"Monstar",
            img:"./img/img9.jpg",
            path:"./path/cohenvoithanhxuan.mp3"
        },
        {
            id:2,
            name:"Bước qua nhau",
            singer:"Vũ",
            img:"./img/img2.jpg",
            path:"./path/buocquanhau.mp3"
        },
        {
            id:3,
            name:"Vợ tuyệt với nhất",
            singer:"Vũ Duy Khánh",
            img:"./img/img3.jpeg",
            path:"./path/votuyetvoinhat.mp3"
        },
        {
            id:4,
            name:"Những gì anh nói",
            singer:"Boizz",
            img:"./img/img4.jpg",
            path:"./path/nhunggianhnoi.mp3"
        },
        {
            id:5,
            name:"Đông kiếm em",
            singer:"Vũ",
            img:"./img/img5.jpg",
            path:"./path/dongkiemem.mp3"
        },
        {
            id:6,
            name:"1 Phút",
            singer:"Adiez",
            img:"./img/img6.png",
            path:"./path/1phut.mp3"
            
        },
        {
            id:7,
            name:"Hẹn Một Mai",
            singer:"Bùi Anh Tuấn",
            img:"./img/img7.jpg",
            path:"./path/henmotmai.mp3"
        },
        {
            id:8,
            name:"Ánh Nắng Của Anh",
            singer:"Đức Phúc",
            img:"./img/img8.png",

            path:"./path/anhnangcuaanh.mp3"
        },
        {
            id:9,
            name:"Chúng ta của hiện tại",
            singer:"Sơn Tùng MTP",
            img:"./img/img1.jpg",
            path:"./path/chungtacuahientai.mp3"
            
        },
        {
            id:10,
            name:"In Another Life",
            singer:"Killa Qualn",
            img:"./img/img10.jpg",
            path:"./path/inanotherlife.mp3"
            
        },
        {
            id:11,
            name:"Hẹn Một Mai",
            singer:"Bùi Anh Tuấn",
            img:"./img/img7.jpg",
            path:"./path/henmotmai.mp3"
        },
        {
            id:12,
            name:"Ánh Nắng Của Anh",
            singer:"Đức Phúc",
            img:"./img/img8.png",

            path:"./path/anhnangcuaanh.mp3"
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY,JSON.stringify(this.config))
    },
    backdround : [
        {
            id:1,
            name: 'IU',
            path:'./img2/iu.jpg'
        },
        {
            id:2,
            name: 'Jennie',
            path:'./img2/jennie.jpg'
        },
        {
            id:3,
            name: 'JiChangWook',
            path:'./img2/jichangwook.jpg'
        },
        {
            id:4,
            name: 'Jisoo',
            path:'./img2/jisoo.jpg'
        },
        {
            id:5,
            name:'Lisa',
            path:'./img2/lisa.jpg'
        },
        {
            id:6,
            name: 'Rose',
            path:'./img2/rose.jpg'
        }
    ],
    render:function(){
        var _this = this;
        var htmls = app.songs.map(function(song,index){
            return `
            <div class="song ${index === _this.curentindex ? 'active':''}" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.img}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
            </div>
            `
        })
        document.querySelector('.playlist').innerHTML =htmls.join('');
    },
    renderBR : function(){
        var htmls = this.backdround.map(function(backdround){
            return `
            <div class="backgrounds-idol" data-index="${backdround.id}">
            <p class="name-idol">${backdround.name}</p>
            <img src="${backdround.path}" alt="" class="img-idol">
            </div>
            `
        })
        const test = document.querySelector('.body-background');
        document.querySelector('.body-background').innerHTML = htmls.join('');
    },
    HandleEvent: function(){
        const _this = this;
        const cdwidth = cd.offsetWidth;
        // Xoay tròn đĩa CD
        const cdthumbAnimate =cdthumb.animate([
            {transform: 'rotate(360deg)'}
        ],{
            duration:10000,
            iterations :Infinity,
        })
        cdthumbAnimate.pause();

          //Scroll
        document.onscroll =function(){
            const scrolltop = window.screenY || document.documentElement.scrollTop;
            const newcd = cdwidth - scrolltop;
            cd.style.width = newcd >0 ? newcd + 'px' :0;
            cd.style.opacity = newcd/cdwidth ;
        }
        //Xử lí click play/pause
        btnplay.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            cdthumbAnimate.pause();
            }
            else{
                audio.play();
            cdthumbAnimate.play();

            }    
        }

        // Khi song play
        audio.onplay = function(){
            
            _this.isPlaying = true;
            player.classList.add('playing')
        }
        //khi song pause
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing')
        }
        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progresspercent = Math.floor(audio.currentTime/ audio.duration *100)
                progress.value = progresspercent;
                var color = 'linear-gradient(90deg, rgb(198 40 229 / 83%)' + progress.value + '% , rgb(214, 214, 214)' + progress.value+ '%)';
                progress.style.background =color;
                timesecond =(Math.floor( audio.currentTime)%60);
                timepresent.textContent = Math.floor(( audio.currentTime)/60)+':'+ (timesecond>9 ? timesecond :'0' + timesecond);
            }
        }
        audio.onloadedmetadata = function(){
            _this.songTime=audio.duration.toFixed();
            // _this.songVolume=audio.volume*100; 
            var second=_this.songTime%60;
            timetotal.innerHTML =`0${Math.floor(_this.songTime/60)}:${second>9?second:'0'+second}`;
    }
        progress.oninput = function(e){
            const seek = audio.duration / 100 * e.target.value;            
            audio.currentTime=seek;
             //Mau sac khi chay
            var color = 'linear-gradient(90deg, rgb(198 40 229 / 83%)' + progress.value + '% , rgb(214, 214, 214)' + progress.value+ '%)';
            progress.style.background =color;
            timesecond =(Math.floor( audio.currentTime)%60);
            timepresent.textContent = Math.floor(( audio.currentTime)/60)+':'+ (timesecond>9 ? timesecond :'0' + timesecond);
        },
        // Khi next bài hát
        next.onclick =function(){
            if(_this.isRandom){
                _this.randomSong();
            }
            else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollActive();
        },
        // Khi lùi bài hát
        prev.onclick= function(){
            _this.prevSong();
            audio.play();
            _this.render();
            _this.scrollActive();
        },
        // Ngẫu nhiên bài hát
        random.onclick = function(){         
            _this.isRandom=!_this.isRandom;
            _this.setConfig('isRandom',_this.isRandom);
            random.classList.toggle('active',_this.isRandom);
        },
        //
        btnrepeat.onclick = function(){
            _this.isRepeat=!_this.isRepeat;
            _this.setConfig('isRepeat',_this.isRepeat);
            btnrepeat.classList.toggle('active',_this.isRepeat);
        }
        audio.onended = function(){
            if($('.btn-repeat.active')){
                audio.play();
            }
            else{
                next.click()
            }
            
        }
        //
        
        //
        playlist.onclick = function(e){
            const songNode =e.target.closest('.song:not(.active)')
            if(songNode || e.target.closest('.song .option')){
               if(songNode){
                  _this.curentindex =Number(songNode.getAttribute('data-index'))// songNode.dataset.index
                  _this.render();
                _this.loadAndSave();
                  audio.play()
               }
               if(e.target.closest('.song .option')){

               }
            }
        }
        // Tắt bật âm
        volume.onclick = function(){
            $('.control').classList.toggle('mute');
            if(_this.isMute == false){
                audio.muted = true;
                _this.isMute = true;
            }
            else{
                audio.muted = false;
                _this.isMute = false;
            }
        }
       
    },
    HandleBgr: function(){
        const _this = this;
        button.onclick = function(){
            if(_this.isOpen == false){
                _this.isOpen = true;
                openclose.classList.add('active');
            }
            else{
                _this.isOpen = false;
                openclose.classList.remove('active');
            }

        }
        const backgroundIdol = $('.backgrounds-idol')
        //
        openclose.onclick = function(e){
            const findindex = e.target.closest('.backgrounds-idol')
            if(findindex){
                console.log(findindex.getAttribute('data-index'));
                _this.bgrindex =Number (findindex.getAttribute('data-index')-1)
                _this.loadBackground();
                openclose.classList.remove('active');
                _this.isOpen = false;
            }
            console.log(_this.bgrindex)

        }
    },
    // Định nghĩa thuộc tính 
    defineProperties: function(){
        Object.defineProperty(this, 'curentSong',{
           get: function(){
               return this.songs[this.curentindex]
           }
        })
        Object.defineProperty(this, 'curentBackground',{
            get: function(){
                return this.backdround[this.bgrindex]
            }
        })
    },
    nextSong: function(){
        this.curentindex++;
        if(this.curentindex >= this.songs.length){
            this.curentindex = 0;
        }
        this.loadAndSave();

        
    },
    prevSong: function(){
        this.curentindex--;
        if(this.curentindex < 0){
            this.curentindex = this.songs.length-1
        }
        this.loadAndSave();

    },
    randomSong: function(){
        let newindex;
        do{
            newindex = Math.floor(Math.random() * this.songs.length);
        } while  (newindex === this.curentindex)
        
        this.curentindex = newindex;
        this.loadAndSave();
        console.log(this.curentindex)
    },
    scrollActive : function(){
        setTimeout(function(){
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block:'center',
            })
        },200)
    },
    // Hiện thị thông tin bài hát
    loadCurrentSong: function(){
        const _this = this;
        heading.textContent = this.curentSong.name;
        cdthumb.style.backgroundImage =`url('${this.curentSong.img}')`;
        audio.src =this.curentSong.path;
        timesecond =(Math.floor( audio.currentTime)%60);
        timepresent.textContent = Math.floor(( audio.currentTime)/60)+':'+ (timesecond>9 ? timesecond :'0' + timesecond);
    },
    loadAndSave: function(){
        this.setConfig("currentIndex",this.curentindex);    
        this.loadCurrentSong();
        this.render();
       
    },
    reloadHandle: function(){ 
        if(this.config.curentindex===undefined)
        {
            this.curentindex=0;
        }
        else {
            this.curentindex = this.config.currentIndex;
            this.isRandom=this.config.isRandom;
            this.isRepeat=this.config.isRepeat;        
        }
        random.classList.toggle('active',this.isRandom);
        btnrepeat.classList.toggle('active',this.isRepeat);
    },
    loadBackground: function(){

        $('body').style.backgroundImage =`url('${this.curentBackground.path}')`;
        console.log(this.curentBackground.path)
        },
    start:function(){
        //Render danh sách bài hát
       
    
         //Định nghĩa thuốcj tính object
         this.defineProperties();
        //Xử lí sự kiện
        this.HandleEvent()
        //Tải lên bài hát
        this.loadCurrentSong()
        //
        this.loadBackground()
        this.renderBR();
        this.HandleBgr()
        this.loadAndSave();
       
    }
}
app.start();



