const bgrs = $('.backgrounds-them');
const BGR_STORAGE_KEY ="BGR"
const listtheme={   
    curentindex:0,
    themes:[
        {
            id:1,
            name:'Tết Đoàn Viên',
            imgmini:'./acset/background-mini/doanvien.png',
            theme:{
                bgr:'./acset/background/doanvien.png',
                colors:{
                    headerbgr:'#ffffff00', //màu nền đầu trang
                    textcolor:'#fff',  //màu chữ
                    footerbgr:'#731717', //  màu chân trang
                    activebgr:'hsla(0,0%,100%,0.1)', // màu bài hát đg phát
                    overviewbgr:'hsla(0,0%,100%,0.3)', // màu nền thanh tổng quan
                    searchhistorybgr:'#883236', // màu nền lịch sử tìm kiếm bài hát
                    linkcolortext:'hsla(0,0%,100%,0.5)',// chữ tên ca sĩ ,tổng thời gian bài hát
                    bgrcolor:'hsla(0,0%,100%,0.05)',// màu nền phần body trái
                    hearfill:'#aa1c1c', // màu trái tim 
                    listoverview:'#fff', // màu chữ thanh tổng quan
                    searchhover:'#ffffff4a', // nền khi hover lịch sử bài hát
                    progressactive:'#fff', // màu thanh thời gian bài hát đang phát,
                    progressplayer:'hsla(0,0%,100%,0.3)',// màu thanh tổng thời gian bài hát
                    searchtext:'#eee',
                    bgrimgfooter:'',
                }
            }
        },
        {
            id:2,
            name:'Tết Sum Vầy',
            imgmini:'./acset/background-mini/sumvay.png',
            theme:{
                bgr:'./acset/background/tetsumvay.png',
                colors:{
                    headerbgr:'#ffffff00', //màu nền đầu trang
                    textcolor:'#000',  //màu chữ
                    footerbgr:'#FDD18B', //  màu chân trang
                    activebgr:'rgba(0,0,0,0.05)', // màu bài hát đg phát
                    overviewbgr:'hsla(0,0%,100%,0.3)', // màu nền thanh tổng quan
                    searchhistorybgr:'#fff', // màu nền lịch sử tìm kiếm bài hát
                    linkcolortext:'rgba(50,50,61,0.5)',// chữ tên ca sĩ ,tổng thời gian bài hát
                    bgrcolor:'rgba(0,0,0,0.05)',// màu nền phần body trái
                    hearfill:'#aa1c1c', // màu trái tim 
                    listoverview:'#CA311E', // màu chữ thanh tổng quan
                    searchhover:'#6274743d', // nền khi hover lịch sử bài hát
                    progressactive:'#aa1c1c', // màu thanh thời gian bài hát đang phát,
                    progressplayer:'rgba(0,0,0,0.1)',// màu thanh tổng thời gian bài hát
                    searchtext:'#eee',
                    bgrimgfooter:'',
                }
            }
        },{
            id:3,
            name:'London',
            imgmini:'./acset/background-mini/london.png',
            theme:{
                bgr:'./acset/background/london.jpg',
                colors:{
                    headerbgr:'#fff', //màu nền đầu trang
                    textcolor:'#000',  //màu chữ
                    footerbgr:'#fff', //  màu chân trang
                    activebgr:'rgba(0,0,0,0.05)', // màu bài hát đg phát
                    overviewbgr:'#fff', // màu nền thanh tổng quan
                    searchhistorybgr:'#fff', // màu nền lịch sử tìm kiếm bài hát
                    linkcolortext:'rgba(50,50,61,0.5)',// chữ tên ca sĩ ,tổng thời gian bài hát
                    bgrcolor:'rgba(0,0,0,0.05)',// màu nền phần body trái
                    hearfill:'#6b3483', // màu trái tim 
                    listoverview:'#6b3483', // màu chữ thanh tổng quan
                    searchhover:'#6274743d', // nền khi hover lịch sử bài hát
                    progressactive:'#6b3483', // màu thanh thời gian bài hát đang phát,
                    progressplayer:'rgba(0,0,0,0.1)',// màu thanh tổng thời gian bài hát
                    searchtext:'#eee',
                    bgrimgfooter:'',
                }
            }
        },
        {
            id:4,
            name:'Zing Music',
            imgmini:'./acset/background-mini/zingmusic.jpg',
            theme:{
                bgr:'./acset/background/zingmp3.svg',
                colors:{
                    headerbgr:'#ffffff00', //màu nền đầu trang
                    textcolor:'#fff',  //màu chữ
                    footerbgr:'rgb(47 7 78)', //  màu chân trang
                    activebgr:'hsla(0,0%,100%,0.1)', // màu bài hát đg phát
                    overviewbgr:'hsla(0,0%,100%,0.3)', // màu nền thanh tổng quan
                    searchhistorybgr:'#6a39af', // màu nền lịch sử tìm kiếm bài hát
                    linkcolortext:'hsla(0,0%,100%,0.5)',// chữ tên ca sĩ ,tổng thời gian bài hát
                    bgrcolor:'hsla(0,0%,100%,0.05)',// màu nền phần body trái
                    hearfill:'#ed2b91', // màu trái tim 
                    listoverview:'#fff', // màu chữ thanh tổng quan
                    searchhover:'#ffffff4a', // nền khi hover lịch sử bài hát
                    progressactive:'#fff', // màu thanh thời gian bài hát đang phát,
                    progressplayer:'hsla(0,0%,100%,0.3)',// màu thanh tổng thời gian bài hát
                    searchtext:'#eee',
                    bgrimgfooter:'',
                }
            }
        },
        {
            id:5,
            name:'IU',
            imgmini:'./acset/background-mini/iu.jpg',
            theme:{
                bgr:'./acset/background/iu.jpg',
                colors:{
                    headerbgr:'#e7dfdd',
                    textcolor:'#32323d',
                    footerbgr:'rgb(208 204 197)',
                    activebgr:'rgb(218 214 211)',
                    overviewbgr:'#e5e2e0',
                    searchhistorybgr:'#fff',
                    linkcolortext:'rgb(140 137 142)',
                    bgrcolor:'rgba(0,0,0,0.05)',
                    hearfill:'#409abc',
                    listoverview:'#409abc',
                    searchhover:'#7c7f802b',
                    progressactive:'#409abc',
                    progressplayer:'rgba(0,0,0,0.1)',
                }
            }
        },
        {
            id:6,
            name:'Jennie',
            imgmini:'./acset/background-mini/jennie.jpg',
            theme:{
                bgr:'./acset/background/jennie.jpg',
                colors:{
                    headerbgr:'none', //màu nền đầu trang
                    textcolor:'#000',  //màu chữ
                    footerbgr:'#c6c4d1', //  màu chân trang
                    activebgr:'rgba(0,0,0,0.05)', // màu bài hát đg phát
                    overviewbgr:'hsla(0,0%,100%,0.3)', // màu nền thanh tổng quan
                    searchhistorybgr:'#e2e7f5', // màu nền lịch sử tìm kiếm bài hát
                    linkcolortext:'rgba(50,50,61,0.5)',// chữ tên ca sĩ ,tổng thời gian bài hát
                    bgrcolor:'rgba(0,0,0,0.05)',// màu nền phần body trái
                    hearfill:'#346875', // màu trái tim 
                    listoverview:'#2a5e6b', // màu chữ thanh tổng quan
                    searchhover:'#6274743d', // nền khi hover lịch sử bài hát
                    progressactive:'#346875', // màu thanh thời gian bài hát đang phát,
                    progressplayer:'rgba(0,0,0,0.1)',// màu thanh tổng thời gian bài hát
                    searchtext:'#eee',
                    bgrimgfooter:'',
                }
            }
        },
        {
            id:7,
            name:'Ji-Chang-Wook',
            imgmini:'./acset/background-mini/ji-chang-wook.jpg',
            theme:{
                bgr:'./acset/background/jichangwook.jpg',
                colors:{
                    headerbgr:'none', //màu nền đầu trang
                    textcolor:'#000',  //màu chữ
                    footerbgr:'#b4d0d0', //  màu chân trang
                    activebgr:'hsla(0,0%,100%,0.3)', // màu bài hát đg phát
                    overviewbgr:'hsla(0,0%,100%,0.3)', // màu nền thanh tổng quan
                    searchhistorybgr:'#e1e8e8', // màu nền lịch sử tìm kiếm bài hát
                    linkcolortext:'rgba(50,50,61,0.5)',// chữ tên ca sĩ ,tổng thời gian bài hát
                    bgrcolor:'hsla(0,0%,100%,0.3)',// màu nền phần body trái
                    hearfill:'#239292', // màu trái tim 
                    listoverview:'#239292', // màu chữ thanh tổng quan
                    searchhover:'#6274743d', // nền khi hover lịch sử bài hát
                    progressactive:'#239292', // màu thanh thời gian bài hát đang phát,
                    progressplayer:'rgba(0,0,0,0.1)',// màu thanh tổng thời gian bài hát
                    searchtext:'#eee',
                    bgrimgfooter:'',
                }
            }
        },
        {
            id:8,
            name:'Jisoo',
            imgmini:'./acset/background-mini/jisoo.jpg',
            theme:{
                bgr:'./acset/background/jisoo.jpg',
            }
        },
        {
            id:9,
            name:'Lisa',
            imgmini:'./acset/background-mini/lisa.jpg',
            theme:{
                bgr:'./acset/background/lisa.jpg',
            }
        },
        {
            id:10,
            name:'Rosé',
            imgmini:'./acset/background-mini/rose.jpg',
            theme:{
                bgr:'./acset/background/rose.jpg',
                colors:{
                    headerbgr:'#061d50',
                    textcolor:'#fff',
                    footerbgr:'#051740',
                    activebgr:'#132958',
                    overviewbgr:'#637191',
                    searchhistorybgr:'#192f60',
                    linkcolortext:'hsla(0,0%,100%,0.15)',
                    bgrcolor:'hsla(0,0%,100%,0.05)',
                    hearfill:'rgb(62, 74, 243)',
                    listoverview:'#fff',
                    searchhover:'#ffffff4a',
                    progressactive:'#fff',
                    progressplayer:'hsla(0,0%,100%,0.3)',
                }
            }
        },
    ],
    config: JSON.parse(localStorage.getItem(BGR_STORAGE_KEY))||{},
	setConfig: function(key, value) {
        	this.config[key] = value;
        	localStorage.setItem(BGR_STORAGE_KEY,JSON.stringify(this.config))
    	},
    renderbgrmini: function(){
        const htmls = this.themes.map(function(theme){
            return`
            <div class="background_them-body" >          
                <div class="background-them">
                    <div class="background-mini-img-zoom">
                        <img src="${theme.imgmini}" alt="" class="background-mini-img">
                        <div class="background-mini-img-hover">
                            <span class="apply" data-index="${theme.id}">
                                Áp dụng
                            </span>
                            <span class="preview" data-index="${theme.id}">Xem Trước</span>
                        </div>
                    </div>
                    <p style="font-size: 12px;font-weight: 500;">${theme.name}</p>
                </div>
            </div>
            `
        })
        $('.backgrounds-them').innerHTML = htmls.join('');
    },
    defineProperties: function(){
        Object.defineProperty(this,'currentBgr',{
            get: function(){
                return listtheme.themes[listtheme.curentindex];
            }
        })
    },
    handleBgr: function(){
        const _this = this;
        bgrs.onclick = function(e){
            //Áp dụng
            const findindexapply = e.target.closest('.apply')
            if(findindexapply){
                _this.curentindex =Number (findindexapply.getAttribute('data-index')-1)
                _this.loadBackground();
                $('#background').style.display="none";
                _this.loadconfig();
            }
            //Xem trước
            const findindexpreview = e.target.closest('.preview')
            if(findindexpreview){
                _this.curentindex =Number (findindexpreview.getAttribute('data-index')-1)
                _this.loadBackground();
                _this.loadconfig();

            }
            
        }
    },
    loadconfig: function(){
        this.setConfig("curentindex",this.curentindex);
        this.loadBackground();
        this.renderbgrmini();
    },
    reload:function(){
        if(this.config.curentindex===undefined)
        {
            this.curentindex=1;
        }
        else {
            this.curentindex = this.config.curentindex;

        }
	},
    loadBackground:function(){
        const _this = this;
        $('body').style.backgroundImage =`url('${_this.currentBgr.theme.bgr}')`;
        document.documentElement.style.setProperty('--color-text', _this.currentBgr.theme.colors.textcolor)
        document.documentElement.style.setProperty('--search-bgr', _this.currentBgr.theme.colors.headerbgr)
        document.documentElement.style.setProperty('--footer-bgr', _this.currentBgr.theme.colors.footerbgr)
        document.documentElement.style.setProperty('--active-bgr', _this.currentBgr.theme.colors.activebgr)
        document.documentElement.style.setProperty('--overview-bgr', _this.currentBgr.theme.colors.overviewbgr)
        document.documentElement.style.setProperty('--history-search-bgr', _this.currentBgr.theme.colors.searchhistorybgr)
        document.documentElement.style.setProperty('--link-color-text', _this.currentBgr.theme.colors.linkcolortext)
        document.documentElement.style.setProperty('--colorbgr', _this.currentBgr.theme.colors.bgrcolor)
        document.documentElement.style.setProperty('--hear-fill', _this.currentBgr.theme.colors.hearfill)
        document.documentElement.style.setProperty('--list-overview', _this.currentBgr.theme.colors.listoverview)
        document.documentElement.style.setProperty('--search-hover', _this.currentBgr.theme.colors.searchhover)
        document.documentElement.style.setProperty('--progress-active', _this.currentBgr.theme.colors. progressactive)
        document.documentElement.style.setProperty('--progress-player', _this.currentBgr.theme.colors.progressplayer)
       
    }
    ,
    run: function(){
        this.reload();
        this.defineProperties();
         this.loadconfig();
        this.handleBgr();
    }    
}
listtheme.run();
/* const themes=[
    {
        id: 1,
        background:'./acset/background/iu.jpg',
        colors:{
            headerbgr:'#e7dfdd',
            textcolor:'#32323d',
            footerbgr:'rgb(208 204 197)',
            activebgr:'rgb(218 214 211)',
            overviewbgr:'#e5e2e0',
            searchhistorybgr:'#fff',
            linkcolortext:'rgb(140 137 142)',
            bgrcolor:'rgba(0,0,0,0.05)',
            hearfill:'#409abc',
            listoverview:'#409abc',
            searchhover:'#7c7f802b',
            progressactive:'#409abc',
            progressplayer:'rgba(0,0,0,0.1)',
        }
    }
]
 */
const closetheme = $('.close-background')
const background = $('#background')
const theme = $('#theme');

closetheme.onclick = () =>{
    background.style.display = 'none';
}
theme.onclick = () =>{
    background.style.display = 'block';
}
$('#body').onclick = function(){
    $('.history-search').classList.remove('active');
    $('.header-search-border').style.background = 'var(--active-bgr)';
    background.style.display = 'none';
}
const isThemes=false;
/* clicktets.onclick = function(){
    console.log(isThemes);
    
    $('body').style.backgroundImage = `url('${themes[0].background}')`;
    document.documentElement.style.setProperty('--color-text', themes[0].colors.textcolor)
    document.documentElement.style.setProperty('--search-bgr', themes[0].colors.headerbgr)
    document.documentElement.style.setProperty('--footer-bgr', themes[0].colors.footerbgr)
    document.documentElement.style.setProperty('--active-bgr', themes[0].colors.activebgr)
    document.documentElement.style.setProperty('--overview-bgr', themes[0].colors.overviewbgr)
    document.documentElement.style.setProperty('--history-search-bgr', themes[0].colors.searchhistorybgr)
    document.documentElement.style.setProperty('--link-color-text', themes[0].colors.linkcolortext)
    document.documentElement.style.setProperty('--colorbgr', themes[0].colors.bgrcolor)
    document.documentElement.style.setProperty('--hear-fill', themes[0].colors.hearfill)
    document.documentElement.style.setProperty('--list-overview', themes[0].colors.listoverview)
    document.documentElement.style.setProperty('--search-hover', themes[0].colors.searchhover)
    document.documentElement.style.setProperty('--progress-active', themes[0].colors. progressactive)
    document.documentElement.style.setProperty('--progress-player', themes[0].colors.progressplayer)
}
 */