const listtheme={
    themes:[
        {
            id:1,
            name:'Tết Đoàn Viên',
            imgmini:'./acset/background-mini/doanvien.png',
            theme:{
                bgr:'./acset/background/doanvien.png',
            }
        },
        {
            id:2,
            name:'Tết Sum Vầy',
            imgmini:'./acset/background-mini/sumvay.png',
            theme:{
                bgr:'./acset/background/tetsumvay.png',
            }
        },{
            id:3,
            name:'London',
            imgmini:'./acset/background-mini/london.png',
            theme:{
                bgr:'./acset/background/london.jpg',
            }
        },
        {
            id:4,
            name:'Zing Music',
            imgmini:'./acset/background-mini/zingmusic.jpg',
            theme:{
                bgr:'./acset/background/zingmp3.svg',
            }
        },
        {
            id:5,
            name:'IU',
            imgmini:'./acset/background-mini/iu.jpg',
            theme:{
                bgr:'./acset/background/iu.jpg',
            }
        },
        {
            id:6,
            name:'Jennie',
            imgmini:'./acset/background-mini/jennie.jpg',
            theme:{
                bgr:'./acset/background/jenie.jpg',
            }
        },
        {
            id:7,
            name:'Ji-Chang-Wook',
            imgmini:'./acset/background-mini/ji-chang-wook.jpg',
            theme:{
                bgr:'./acset/background/jichangwool.jpg',
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
            }
        },
    ],
    renderbgrmini: function(){
        const htmls = this.themes.map(function(theme){
            return`
            <div class="background_them-body">          
                <div class="background-them">
                    <div class="background-mini-img-zoom">
                        <img src="${theme.imgmini}" alt="" class="background-mini-img">
                        <div class="background-mini-img-hover">
                            <span class="apply">
                                Áp dụng
                            </span>
                            <span class="preview">Xem Trước</span>
                        </div>
                    </div>
                    <p style="font-size: 12px;font-weight: 500;">${theme.name}</p>
                </div>
            </div>
            `
        })
        $('.backgrounds-them').innerHTML = htmls.join('');
    },
    run: function(){
        this.renderbgrmini();
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