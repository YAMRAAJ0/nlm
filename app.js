//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 3000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}




document.addEventListener('DOMContentLoaded', () => {
    const navbuttons = document.querySelectorAll('.navbutton');
    navbuttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const drop = button.querySelector('.drop');
            if (drop) {
                drop.style.color = 'rgb(165, 0, 0)';
            }
        });
        button.addEventListener('mouseout', () => {
            const drop = button.querySelector('.drop');
            if (drop) {
                drop.style.color = ''; // Reset to original color
            }
        });
    });
});

           setTimeout(function() {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }, 6000); // 4000 milliseconds = 4 seconds

    window.addEventListener('scroll', function() {
        const navButtons = document.querySelectorAll('.navbutton');
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const scrollThreshold = document.documentElement.scrollHeight * 0.1;

        navButtons.forEach(button => {
            if (scrollPosition > scrollThreshold) {
                button.style.padding = '15px 10px'; // New padding when scroll > 10%
            } else {
                button.style.padding = '23px 25px'; // Default padding
            }
        });
    });