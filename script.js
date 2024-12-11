window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const bannerHeight = document.querySelector('.banner').offsetHeight;

    if (window.scrollY > bannerHeight) {
        header.style.background = '#4CAF50';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'transparent'; 
        header.style.boxShadow = 'none';
    }
});