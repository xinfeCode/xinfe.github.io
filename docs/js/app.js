const preloaderTime = 1500;

function openProject(project) {
    window.open(project, '_blank');
}

window.addEventListener('load', () => {
    setTimeout(() => {
       const preloader = document.getElementById('preloader');
       preloader.classList.add('preloader-loaded');
    }, preloaderTime);
})