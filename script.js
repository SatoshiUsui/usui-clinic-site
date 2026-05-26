/* ===========================================
   Fade-in on scroll — IntersectionObserver
   =========================================== */
(function () {
    var els = document.querySelectorAll('.fade-in');
    if (!els.length) return;

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    );

    els.forEach(function (el) { observer.observe(el); });
})();


/* ===========================================
   Hamburger — Full-screen Mobile Menu
   =========================================== */
(function () {
    var hamburger = document.getElementById('hamburger');
    var menu      = document.getElementById('mobile-menu');
    if (!hamburger || !menu) return;

    function openMenu() {
        menu.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    /* ハンバーガーボタン: トグル */
    hamburger.addEventListener('click', function () {
        if (menu.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    /* メニュー項目クリックで閉じる */
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    /* Escape キーで閉じる */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) {
            closeMenu();
        }
    });
})();
