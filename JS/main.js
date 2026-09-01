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