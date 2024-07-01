document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Get DOM elements
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const SliderDom = carouselDom.querySelector('.carousel .list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    const timeDom = document.querySelector('.carousel .time');
    
    const timeRunning = 1000;
    const timeAutoNext = 3000;
    let runTimeOut;
    let runNextAuto;

    // Initial setup
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    nextDom.onclick = () => {
        showSlider('next');
    };

    prevDom.onclick = () => {
        showSlider('prev');
    };

    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
        const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
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
            nextDom.click();
        }, timeAutoNext);
    }

    // Navigation button hover effect
    const navButtons = document.querySelectorAll('.navbutton');
    navButtons.forEach(button => {
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

    // Hide spinner after some time
    setTimeout(() => {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Adjust navigation button padding based on scroll position
    window.addEventListener('scroll', () => {
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
});
