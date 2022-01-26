const listalbum={
    albums:[
        {
            id:1,
            name:'Issa Album',
            img:'./acset/album/album1.webp'
        },
        {
            id:2,
            name:'Remember (Mini Album)',
            img:'./acset/album/album2.webp'
        },
        {
            id:3,
            name:'THE ALBUM',
            img:'./acset/album/album3.webp'
        },{
            id:4,
            name:'Người Yêu Cũ (Gửi Cho Anh…',
            img:'./acset/album/album4.webp'
        },{
            id:5,
            name:'Điều Anh Biết (Single)',
            img:'./acset/album/album5.webp'
        },{
            id:6,
            name:'Anh Không Sao Đâu',
            img:'./acset/album/album6.webp'
        },{
            id:7,
            name:'While You Were Sleeping OST…',
            img:'./acset/album/album7.webp'
        },{
            id:8,
            name:'Why Not Me (Single)',
            img:'./acset/album/album8.webp'
        },{
            id:9,
            name:'Itaewon Class OST Part.2…',
            img:'./acset/album/album9.webp'
        },{
            id:10,
            name:'Suýt Nữa Thì (Chuyến Đi Của…',
            img:'./acset/album/album10.webp'
        },
    ],
    renderAlbum: function(){
        var htmls = this.albums.map(function(album){
            return `
            <div class="over-list-slider album">
                <div class="over-list-hidden">
                    <div class="over-list-hidden-zoom">
                        <img src="${album.img}" alt="">
                        <div class="over-list-hidden-hover">
                            <i class="bi bi-heart-fill" style="font-size: 18px;"></i>
                            <i class="bi bi-caret-right-fill" style="background: transparent;border: 1px solid;"></i>
                            <i class="bi bi-three-dots"></i>
                        </div>
                    </div>
                    <p>${album.name}</p>
                </div>
            </div> 
            `
        })
        $('.over-lists-slider.album').innerHTML = htmls.join('');

    },
    run: function(){
        this.renderAlbum();
    }
}

const playlists={
    playlist:[
        {
            id:1,
            name: 'Bảng Xếp Hạng Bài Hát Hàn…',
            source:'Zing mp3',
            img:'./acset/playlist/playlist1.webp'
        },
        {
            id:2,
            name: 'Trào Lưu Nhạc Hot',
            source:'Zing mp3',
            img:'./acset/playlist/playlist2.webp'
        },
        {
            id:3,
            name: 'Top 100 Nhạc Hàn Quốc Hay…',
            source:'Zing mp3',
            img:'./acset/playlist/playlist3.webp'
        },
        {
            id:4,
            name: 'Hit-Maker: Vương Anh Tú',
            source:'Zing mp3',
            img:'./acset/playlist/playlist4.webp'
        },
        {
            id:5,
            name: 'Mashup V-Pop',
            source:'Zing mp3',
            img:'./acset/playlist/playlist5.webp'
        },
        {
            id:6,
            name: 'Buồn',
            source:'Phan Xuân Thành',
            img:'./acset/playlist/playlist6.png'
        },
        {
            id:7,
            name: 'Tình Yêu',
            source:'Phan Xuân Thành',
            img:'./acset/playlist/playlist7.webp'
        },
        {
            id:8,
            name: 'Thanh Xuân',
            source:'Phan Xuân Thành',
            img:'./acset/playlist/playlist8.webp'
        },
        {
            id:9,
            name: 'Nhạc phim',
            source:'Phan Xuân Thành',
            img:'./acset/playlist/playlist9.webp'
        },
        {
            id:10,
            name: '4U - On Repeat',
            source:'Zing mp3',
            img:'./acset/playlist/playlist10.webp'
        },
    ],
    renderPlaylist: function(){
        var htmls = this.playlist.map(function(playlist){
            return `
            
            <div class="over-list-slider playlist">
                <div class="over-list-hidden">
                    <div class="over-list-hidden-zoom">
                        <img src="${playlist.img}" alt="">
                        <div class="over-list-hidden-hover">
                            <i class="bi bi-heart-fill" style="font-size: 18px;"></i>
                            <i class="bi bi-caret-right-fill" style="background: transparent;border: 1px solid;"></i>
                            <i class="bi bi-three-dots"></i>
                        </div>
                    </div>
                    <p>${playlist.name}</p>
                    <span>${playlist.source}</span>
                </div>
        
            </div>
            `
        })
        $('.over-lists-slider.playlist').innerHTML = htmls.join('');
    }
}

const listmv={
    mvs:[
        {
            id:1,
            mv:'./acset/mv/mv1.webp',
            img:'./acset/mv/img1.jpg',
            name:'Gone',
            singer:'ROSÉ',
            time:'03:40'
        },
        {
            id:2,
            mv:'./acset/mv/mv2.webp',
            img:'./acset/mv/img2.jpg',
            name:'LALISA',
            singer:'LISA',
            time:'03:26'
        },
        {
            id:3,
            mv:'./acset/mv/mv3.webp',
            img:'./acset/mv/img3.jpg',
            name:'Hơn Cả Yêu',
            singer:'Đức Phúc',
            time:'05:43'
        },
        {
            id:4,
            mv:'./acset/mv/mv4.webp',
            img:'./acset/mv/img4.jpg',
            name:'Người Có Thương?',
            singer:'DatKaa',
            time:'05:12'
        },
        {
            id:5,
            mv:'./acset/mv/mv5.webp',
            img:'./acset/mv/img5.jpg',
            name:'Anh Luôn Là Lí Do',
            singer:'ERIK',
            time:'04:13'
        },
        {
            id:6,
            mv:'./acset/mv/mv6.webp',
            img:'./acset/mv/img6.jpg',
            name:'Đom Đóm',
            singer:'Jack',
            time:'06:21'
        },
        {
            id:7,
            mv:'./acset/mv/mv7.webp',
            img:'./acset/mv/img7.jpg',
            name:'Ai Là Người Thương Em',
            singer:'Quân A.P',
            time:'06:30'
        },
        {
            id:8,
            mv:'./acset/mv/mv8.webp',
            img:'./acset/mv/img8.jpg',
            name:'Tết Đong Đầy',
            singer:'Kay Trần,Khoa',
            time:'04:03'
        }
    ],
    renderMV:function(){
        var htmls = this.mvs.map(function(mv){
            return `
                <div class="over-list-slider mv">
                        <div class="over-list-hidden">
                            <div class="over-list-hidden-zoom">
                                <img src="${mv.mv}" alt="">
                                <div class="over-list-hidden-hover">
                                    <i class="bi bi-caret-right-fill" style="background: transparent;border: 1px solid;"></i>
                                </div>
                                <span style="position: absolute;padding: 3px 5px; background: rgba(0,0,0,.7); color: #fff;    right: 5px; bottom: 2px; border-radius: 5px;">${mv.time}</span>
                            </div>
                            <div class="" style="display: flex;  margin-top: 15px;">
                                <img src="${mv.img}" alt="" style="width:40px;border-radius: 50%;transform: scale(1);">
                                    <div class="" style="margin-left: 10px;">
                                        <p style="font-size: 14px;font-weight: 500;">${mv.name}</p>
                                        <p style="font-size: 12px;font-weight: 400;color:#a0a7a7;">${mv.singer}</p>
                                    </div>
                            </div>
                        </div>
                </div> 
            `
        })
        $('.over-lists-slider.mv').innerHTML = htmls.join('');
    }
}

const listsinger={
    singers:[
       {
           id:1,
           name:'LISA',
           img:'./acset/singer/singer1.webp',
           like:'67K quan tâm'
       },
       {
        id:2,
        name:'IU',
        img:'./acset/singer/singer2.webp',
        like:'244K quan tâm'
        },
        {
         id:3,
         name:'Bích Phương',
         img:'./acset/singer/singer3.webp',
         like:'383K quan tâm'
         }
         ,{
        id:4,
        name:'Hòa Minzy',
        img:'./acset/singer/singer4.webp',
        like:'221K quan tâm'
        }
        ,{
            id:5,
            name:'JustaTee',
            img:'./acset/singer/singer5.webp',
            like:'208K quan tâm'
        }
        ,{
        id:6,
        name:'Lou Hoàng',
        img:'./acset/singer/singer6.webp',
        like:'144K quan tâm'
        }
        ,{
            id:7,
            name:'Chi Dân',
            img:'./acset/singer/singer7.webp',
            like:'533K quan tâm'
        }
        ,{
            id:8,
            name:'SOOBIN',
            img:'./acset/singer/singer8.webp',
            like:'471K quan tâm'
        }
        ,{
            id:9,
            name:'Sơn Tùng M-TP',
            img:'./acset/singer/singer9.webp',
            like:'2.3M quan tâm'
        }
        ,{
            id:10,
            name:'Trịnh Thăng Bình',
            img:'./acset/singer/singer10.webp',
            like:'239K quan tâm'
        } 
    ],
    renderSinger:function(){
        var htmls = this.singers.map(function(singer){
            return `
                <div class="over-list-slider ">
                    <div class="over-list-hidden">
                        <div class="over-list-hidden-zoom" style="border-radius: 50%;">
                            <img src="${singer.img}" alt="" ">
                            <div class="over-list-hidden-hover">
                                <i class="bi bi-caret-right-fill" style="background: transparent;border: 1px solid;"></i>
                            </div>
                        </div>
                        <div class="info-singer">
                            <p style="font-size: 14px;font-weight: 500;">${singer.name}</p>
                            <p style="font-size: 12px;font-weight: 400;color:#a0a7a7;">${singer.like}</p>
                            <div class="music-coner">
                                <i class="bi bi-shuffle" style="margin-left:5px;"></i>
                                GÓC NHẠC
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
        $('.over-lists-slider.singer').innerHTML = htmls.join('');
        console.log( $('.over-lists-slider.singer'))
    }
}
listalbum.run();
playlists.renderPlaylist();
listmv.renderMV();
listsinger.renderSinger();