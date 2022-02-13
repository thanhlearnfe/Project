const exploreSlideLists = Array.from($$('.explore__slide--container'));
var listExploreSlide = [
    {
        image: "./acset/img/tabExplore/slides/slide1.jpg"
    },
    {
        image: "./acset/img/tabExplore/slides/slide2.jpg"
    },
    {
        image: "./acset/img/tabExplore/slides/slide3.jpg"
    },
    {
        image: "./acset/img/tabExplore/slides/slide4.jpg"
    },
    {
        image: "./acset/img/tabExplore/slides/slide5.jpg"
    },
    {
        image: "./acset/img/tabExplore/slides/slide6.jpg"
    },
    {
        image: "./acset/img/tabExplore/slides/slide7.jpg"
    },
    {
        image: "./acset/img/tabExplore/slides/slide8.jpg"
    },
];

const EXPLORE_SLIDE_STORAGE_KEY = 'VIK_EXPLORE_SLIDE';

localStorage.setItem(EXPLORE_SLIDE_STORAGE_KEY, JSON.stringify(listExploreSlide));
const slide={
    html([first, ...string], ...values) {
        return values.reduce(
            (acc, cur) => acc.concat(cur, string.shift())
            , [first]
        )
        .filter(x => x && x !== true || x === 0)
        .join('')       
    },
    exploreSlides: JSON.parse(localStorage.getItem(EXPLORE_SLIDE_STORAGE_KEY) || '[]'),
    renderExploreSlide() {
        exploreSlideLists.forEach((exploreSlideList, slideIndex) => {
            exploreSlideList.innerHTML = slide.html`
                <div class="explore__slide-move">
                    <div class="slide__move-btn btn--prev">
                        <i class="bi bi-chevron-left"></i>
                    </div>
                    <div class="slide__move-btn btn--next">
                        <i class="bi bi-chevron-right"></i>
                    </div>
                </div>
                ${this.exploreSlides.map((exploreSlide, index) => {
                    return slide.html`
                        <div 
                            class="col l-4 m-4 c-6 explore__slide-item 
                            ${index === 0 && 'first next'} 
                            ${index === 1 && 'second'} 
                            ${index === 2 && 'third'}
                            ${index === 3 && 'fourth'}
                            ${index > 3 && index < slide.exploreSlides.length - 1 && 'fifth'}
                            ${index === slide.exploreSlides.length - 1 && 'sixth prev'}
                        ">
                            <div class="row__item-display">
                            <img src="${exploreSlide.image}" alt="" class="slide__img">
                            </div>
                        </div>
                    `
                })}
            `
        })
    },
    handleEvents: function() {
        const _this = this;
        const slideMove = $('.explore__slide--container .explore__slide-move');
        
        function exploreSlideShow() {
            _this.nextSlide();
            let autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
            slideMove.onclick = (e) => {
                const prevBtn = e.target.closest('.slide__move-btn.btn--prev')
                const nextBtn = e.target.closest('.slide__move-btn.btn--next')
                
                if(prevBtn) {
                    _this.prevSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
                }
    
                if(nextBtn) {
                    _this.nextSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
                }
            }
           
        }
        exploreSlideShow();
    },
    prevSlide: function() {
        const slideMoveItems = Array.from($$('.explore__slide--container .explore__slide-item'))
        $('.explore__slide-item.next').classList.remove('next')
        $('.explore__slide-item.prev').classList.remove('prev')
        const firstSlide = $('.explore__slide-item.first')
        const secondSlide = $('.explore__slide-item.second')
        const thirdSlide = $('.explore__slide-item.third')
        const fourthSlide = $('.explore__slide-item.fourth')
        const sixthSlide = $('.explore__slide-item.sixth')
        const fifthSlideIndex = slideMoveItems.indexOf(sixthSlide) === 0 ? slideMoveItems.length - 1 : slideMoveItems.indexOf(sixthSlide) - 1;
        const fifthSlide =  slideMoveItems[fifthSlideIndex]

        firstSlide.classList.replace('first', 'second')
        secondSlide.classList.replace('second', 'third')
        thirdSlide.classList.add('prev')
        thirdSlide.classList.replace('third', 'fourth')
        fourthSlide.classList.replace('fourth', 'fifth')
        fifthSlide.classList.replace('fifth', 'sixth')
        sixthSlide.classList.add('next')
        sixthSlide.classList.replace('sixth', 'first')
    },

    nextSlide: function() {
        const slideMoveItems = Array.from($$('.explore__slide--container .explore__slide-item'))
        $('.explore__slide-item.next').classList.remove('next')
        $('.explore__slide-item.prev').classList.remove('prev')
        const firstSlide = $('.explore__slide-item.first')
        const secondSlide = $('.explore__slide-item.second')
        const thirdSlide = $('.explore__slide-item.third')
        const fourthSlide = $('.explore__slide-item.fourth')
        const sixthSlide = $('.explore__slide-item.sixth')
        const fifthSlideIndex = slideMoveItems.indexOf(fourthSlide) === slideMoveItems.length - 1 ? 0 : slideMoveItems.indexOf(fourthSlide) + 1;
        const fifthSlide =  slideMoveItems[fifthSlideIndex]

        firstSlide.classList.add('prev')
        firstSlide.classList.replace('first', 'sixth')
        secondSlide.classList.replace('second', 'first')
        thirdSlide.classList.replace('third', 'second')
        fourthSlide.classList.add('next')
        fourthSlide.classList.replace('fourth', 'third')
        fifthSlide.classList.replace('fifth', 'fourth')
        sixthSlide.classList.replace('sixth', 'fifth')
    },

    run : function() {
        this.renderExploreSlide();
        this.handleEvents();
    }
}
slide.run();