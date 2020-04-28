document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-main__nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', { delay: 500 });

ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.card-banner-one', { delay: 500 });
ScrollReveal().reveal('.card-banner-two', { delay: 500 });
ScrollReveal().reveal('.social', { delay: 500 });
ScrollReveal().reveal('.footer-links', { delay: 500 });
