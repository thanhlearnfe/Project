const themes=[
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

const chude = $('#chude');
const clicktets = $('#testthoima');
const isThemes=false;
clicktets.onclick = function(){
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
