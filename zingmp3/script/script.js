const $= document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app ={
    curentindex:0,
    isPlaying:false,
    isRandom:false,
    isRepeat:false,
    songs:[
        {
            id:1,
            name:"Coming Home",
            singer:"Dash Berlin,Bo Bruce",
            img:"./acset/img/img5.webp",
            path:"./acset/song/song5.mp3",
            album:"We Are,Pt.2"
        },
        {
            id:2,
            name:"Đông Kiếm Em",
            singer:"Vũ",
            img:"./acset/img/img2.png",
            path:"./acset/song/song2.mp3",
            album:" "
        },{
            id:3,
            name:"Những Gì Anh Nói",
            singer:"Bozitt",
            img:"./acset/img/img3.webp",
            path:"./acset/song/song3.mp3",
            album:"Những Gì Anh Nói..."
        },{
            id:4,
            name:"Mãi Chẳng Thuộc Về Nhau",
            singer:"Bozitt",
            img:"./acset/img/img4.webp",
            path:"./acset/song/song4.mp3",
            album:"Mãi Chẳng Thuộc Về Nhau..."
        },{
            id:5,
            name:"Mãi Mãi Không Phải Anh",
            singer:"Thanh Bình",
            img:"./acset/img/img1.webp",
            path:"./acset/song/song1.mp3",
            album:"Mãi Mãi Không Phải Anh(Single)"
            
        },{
            id:6,
            name:"Phố Cũ Còn Anh",
            singer:"Quinn,Chilly",
            img:"./acset/img/img6.webp",
            path:"./acset/song/song6.mp3",
            album:"Phố Cũ Còn Anh(Single)"
        },{
            id:7,
            name:"Dành Cho Em",
            singer:"Hoàng Tôn",
            img:"./acset/img/img7.webp",
            path:"./acset/song/song7.mp3",
            album:""
        },{
            id:8,
            name:"Dòng Thời Gian",
            singer:"Đăng Khoa",
            img:"./acset/img/img8.png",
            path:"./acset/song/song8.mp3",
            album:"H2 Tết"
        },{
            id:9,
            name:"Thắc Mắc",
            singer:"Thịnh Suy",
            img:"./acset/img/img9.webp",
            path:"./acset/song/song9.mp3",
            album:"(MDX)(Single)"
        },{
            id:10,
            name:"Bông Hoa Đẹp Nhất",
            singer:"Quân AP",
            img:"./acset/img/img10.webp",
            path:"./acset/song/song10.mp3",
            album:"Bông Hoa Đẹp Nhất(Single)"
        },{
            id:11,
            name:"Nhớ Về Họp Lớp Nha",
            singer:"Osad",
            img:"./acset/img/img11.png",
            path:"./acset/song/song11.mp3",
            album:""
        },{
            id:12,
            name:"Em Không Sai Chúng Ta Sai",
            singer:"Eric",
            img:"./acset/img/img12.webp",
            path:"./acset/song/song12.mp3",
            album:"Em Không Sai Chúng Ta Sai..."
        },{
            id:13,
            name:"Someday,The Boy",
            singer:"Kim Fell",
            img:"./acset/img/img13.webp",
            path:"./acset/song/song13.mp3",
            album:"Itawon Class"
        },{
            id:14,
            name:"Tháng Năm Không Quên",
            singer:"H2K,TRUNKY",
            img:"./acset/img/img14.webp",
            path:"./acset/song/song14.mp3",
            album:"Tháng Năm Không Quên(Single)"
        },{
            id:15,
            name:"Tạm Biệt Nhé",
            singer:"Lynk Lee",
            img:"./acset/img/img15.png",
            path:"./acset/song/song15.mp3",
            album:"Tạm Biệt Nhé"
        },{
            id:16,
            name:"Ngày Trái Tim Khóc",
            singer:"Cao Tùng Anh",
            img:"./acset/img/img16.webp",
            path:"./acset/song/song16.mp3",
            album:"Anh Nhớ Em Nhiều Lắm"
        },{
            id:17,
            name:"Cô Đơn Không Muốn Về Nhà",
            singer:"Mr.Siro",
            img:"./acset/img/img17.webp",
            path:"./acset/song/song17.mp3",
            album:"Cô Đơn Không Muốn Về Nhà..."
        },{
            id:18,
            name:"Ngày Mai Sẽ Khác",
            singer:"Lê Hiếu",
            img:"./acset/img/img18.webp",
            path:"./acset/song/song18.mp3",
            album:""
        },
        
    ],
    //Hiện Thị Dữ Liệu Bài Hát
    renderSong: function(){
        const _this = this;

       var htmls = this.songs.map(function(song,index){
               return `
           <div class="list-song ${index === _this.curentindex ? "active":" "}" data-index="${index}">
                <div class="list-song-img">
                    <img src="${song.img}" style="width:40px;border-radius: 6px;" alt="">         
                </div>
                <div class="list-song-name-singer">
                    <h3>${song.name}</h3>
                    <p>${song.singer}</p>
                </div>
                <div class="list-song-album">
                    <p>${song.album}</p>
                </div>
                <div class="list-song-album-time">
                    <i class="bi bi-heart-fill"></i>
                    <span class="time-during">4:33</span>
                </div>
            </div>
           `
       })
       $('.over-lists-songs').innerHTML = htmls.join('');

       var htmls = this.songs.map(function(song,index){
        return `
        <div class="list-song ${index === _this.curentindex ? "active":" "}" data-index="${index}">
            <div class="list-song-img">
                <img src="${song.img}" style="width:40px;border-radius: 6px;" alt="">         
            </div>
            <div class="list-song-name-singer">
                <h3>${song.name}</h3>
                <p>${song.singer}</p>
            </div>
            <div class="list-song-album">
                <p>${song.album}</p>
            </div>
            <div class="list-song-album-time">
                <i class="bi bi-heart-fill"></i>
                <span class="time-during">4:33</span>
            </div>
        </div>
        `
            }   )
            $('.over-lists-songs-2').innerHTML = htmls.join('');
    },
    //Xử lí bài hát
    handlesSong: function (){
        const _this = this;
        const timestart = $('.time-start');
        const timeend = $('.time-end');
        const playsong = $('.btn i.bi.bi-play-circle');
        const pausesong = $('.btn i.bi.bi-pause-circle');
        const togglesong = $('.btn-toggle-play');
        const progress = $('.progress');
        const nextsong = $('.btn-btn-next')
        const prevsong = $('.btn-prev');
        const randomsong = $('.btn-random');
        const repeatsong = $('.btn-repeat');
        const songsactive = $('.over-lists-songs')
        //Click play pause
        togglesong.onclick =function(){    
           if(_this.isPlaying){
                audio.pause();
           }
           else{
               audio.play();
           }
        }
        //Play-Pause
        audio.onplay = function(){
            _this.isPlaying = true;
            togglesong.classList.add('active');
        }
        audio.onpause = function(){
            _this.isPlaying = false;
            togglesong.classList.remove('active');
        }
        nextsong.onclick = function(){
            if($('.btn-random.active')){
                _this.randomSongs();
                audio.play();
            }
            else{
                _this.nextSongs();
               audio.play();
            }
        }
        prevsong.onclick = function(){
            _this.prevSongs();
           audio.play();
        }
        randomsong.onclick = function(){
            randomsong.classList.toggle("active")
        }
        repeatsong.onclick = function(){
            repeatsong.classList.toggle("active")
        }
        audio.ontimeupdate = function(){
            
            if(audio.duration){
                const timenow = Math.floor((audio.currentTime/audio.duration) *100);
                var color =  'linear-gradient(90deg, rgb(255 255 255) ' + `${timenow}` + '% , rgb(214 214 214 / 26%)' + `${timenow}` + '%)';
                progress.style.background = color;
                progress.value = timenow;
                var seconds = Math.floor((audio.currentTime%60))
                timestart.textContent = '0'+Math.floor((audio.currentTime)/60) +':' +(seconds>9 ?seconds:('0'+seconds))
              
            }
        }
        //Tua Song
        progress.oninput = function(e){
            const seek = audio.duration / 100 * e.target.value;            
            audio.currentTime=seek;
            const timenow =  e.target.value;
            var color =  'linear-gradient(90deg, rgb(255 255 255)' + `${timenow}` + '% , rgb(214 214 214 / 26%)' + `${timenow}` + '%)';
            progress.style.background = color;
            

        }
        audio.onloadeddata = function(){
            var seconds = Math.floor((audio.duration%60))
            timeend.textContent = '0'+Math.floor((audio.duration)/60) +':' +(seconds>9 ?seconds:('0'+seconds))
            
        }
        //Khi bài hát kết thúc
        audio.onended = function(){
            if($('.btn-random.active')){
                _this.randomSongs();
                audio.play();
            }
            else if($('.btn-repeat.active')){
                audio.play();
                console.log(_this.curentindex);

            }
            else{
                _this.nextSongs();
               audio.play();
            }
        }
        //Click phat bai hat
        songsactive.onclick = function(e){
            const findindex = e.target.closest('.list-song:not(.active)');
            const heart = e.target.closest('.list-song-album-time .bi-heart-fill');
            if(findindex || heart){
                if(findindex){
                    _this.curentindex = Number(findindex.dataset.index);
                    _this.renderSong();
                    _this.loadSong();
                    audio.play();
                }
                if(heart){
                   heart.classList.toggle('active'); 
                }

            }

        }
    },
    nextSongs: function(){
        this.curentindex++;
        if(this.songs.length-1 < this.curentindex){
            this.curentindex =0;
        }
        this.loadSong();
        this.renderSong();
    },
    prevSongs: function(){
        this.curentindex--;
        if(this.curentindex<0){
            this.curentindex = this.songs.length-1;
        }
        this.loadSong();
        this.renderSong();

    },
    randomSongs: function(){
        let newindex;
        do{
            newindex = Math.floor(Math.random() * this.songs.length);
        } while  (newindex === this.curentindex)
        this.curentindex = newindex;
        this.loadSong();
        console.log(this.curentindex)
    },
    repeatSongs: function(){
        this.loadSong();
    },
    //Tạo thuộc tính bài hát đang phát
    defineProperty: function(){
        const _this = this;
        Object.defineProperty(this,'curentSong',{
            get: function(){
                return _this.songs[_this.curentindex];
            }
            
        })
    },
    //Hiện thị thông tin bài hát đang phát
    loadSong: function(){
        const namesong = $('.footer__song-name');
        const namesinger = $('.footer__song-singer');
        const imgsong = $('.image-current img');
        const audio =$('#audio');
        
        namesong.textContent = this.curentSong.name;
        namesinger.textContent = this.curentSong.singer;
        imgsong.src = this.curentSong.img;
        audio.src = this.curentSong.path;
        this.renderSong();
    },
    run: function(){
        this.renderSong();
        this.defineProperty();
        this.handlesSong();
        this.loadSong();
    }
}
app.run();



