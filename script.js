const figure = document.querySelector('.recipe__media');
const video = figure.querySelector('.recipe__video');
let hoverTimer;

function showVideo() {
    hoverTimer = setTimeout(() => {
        video.currentTime = 0;
        video.style.opacity = '1';
        video.play();
    }, 600);
}

function hideVideo() {
    clearTimeout(hoverTimer);
    video.style.opacity = '0';
    video.pause();
    video.currentTime = 0;
}

figure.addEventListener('mouseenter', showVideo);
figure.addEventListener('mouseleave', hideVideo);
figure.addEventListener('focus', showVideo);
figure.addEventListener('blur', hideVideo);

const video2 = document.querySelector('.recipe__second-video');

const observer = new IntersectionObserver(([entry]) => {
    video2.classList.toggle('visible', !entry.isIntersecting);
    video2.currentTime = 0;
});

observer.observe(figure);