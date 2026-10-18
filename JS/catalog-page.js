
(function () {

    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    let data = CATALOG_DATA[type];
    if (!data) {
        const allItems = Object.values(CATALOG_DATA).flatMap(cat => cat.items);
        data = { items: allItems };
    }

    const wrapper = document.getElementById('heroWrapper');
    if (!wrapper) return;

    function formatPrice(price) {
        return new Intl.NumberFormat('ru-RU').format(price) + " ₽"
    }

    // ---------------

    if (!data.items.length) {
        wrapper.innerHTML = '<p class="catalog__empty">Пока нет работ в этой категории.</p>';
        return;
    }

    wrapper.innerHTML = data.items.map(item => `
        <div class="catalog__card">
            <img class="catalog__card-img" src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="catalog__card-body">
                <h3 class="catalog__card-title">${item.title}</h3>
                <p class="catalog__card-desc">${item.desc}</p>
                <div class="catalog__card-price">${formatPrice(item.price)}</div>
            </div>
        </div>
        `).join('');
})();