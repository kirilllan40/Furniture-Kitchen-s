// -------burger

(function () {
    const burger = document.querySelector('.burger-icon');
    const body = document.body;

    function openMenu() {
        body.classList.add('body--opened-menu');
    }

    function closeMenu() {
        body.classList.remove('body--opened-menu');
    }

    document.addEventListener('click', function (e) {
        if (e.target.closest('.burger-icon')) {
            e.preventDefault();
            if (body.classList.contains('body--opened-menu')) {
                closeMenu();
            } else {
                openMenu();
            }
            return;
        }

        if (e.target.closest('.anchor__item-link') && body.classList.contains('body--opened-menu')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && body.classList.contains('body--opened-menu')) {
            closeMenu();
        }
    });
})();

// ------------SLIDER---------------

let designeSlider = null;

function initDesigneSlider() {
    const sliderElement = document.querySelector('.designe__slider');
    if (!sliderElement) return;

    if (designeSlider) {
        designeSlider.destroy(true, true)
    };

    const windowWidth = window.innerWidth;
    // Определяем направление: вертикальное для >850, горизонтальное для ≤850
    const isDesktop = windowWidth > 650;
    const direction = isDesktop ? 'vertical' : 'horizontal';

    const config = {
        direction: direction,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        spaceBetween: 20,
    };

    if (isDesktop) {
        // Вертикальный режим (десктоп)
        // видно часть следующего слайда снизу
        config.spaceBetween = 20;
    } else {
        // Горизонтальный режим (мобильные)
        config.spaceBetween = 15;
        config.breakpoints = {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 25,
            }
        };
    };

    designeSlider = new Swiper('.designe__slider', config);
}

document.addEventListener('DOMContentLoaded', function() {
    initDesigneSlider();
});

// Переинициализация при изменении размера окна
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        initDesigneSlider();
    }, 250);
});