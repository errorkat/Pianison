function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const imageName = getQueryParam('image');
    const musicSheet = document.getElementById('music-sheet');
    if (imageName) {
        musicSheet.src = `/img/pianosheet/${imageName}`;
    } else {
        musicSheet.src = '/img/sheet-test.png';
    }
});

const toggleNavbarBtn = document.getElementById('toggleNavbarBtn');
const navbar = document.querySelector('.navbar');
const sheetContainer = document.querySelector('.viewportContainer');

toggleNavbarBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    sheetContainer.classList.toggle('sheetContainerMargin');
});

document.getElementById('toggleFullscreenBtn').addEventListener('click', function () {
    const musicSheet = document.getElementById('music-sheet');
    if (musicSheet.requestFullscreen) {
        musicSheet.requestFullscreen();
    } else if (musicSheet.mozRequestFullScreen) { 
        musicSheet.mozRequestFullScreen();
    } else if (musicSheet.webkitRequestFullscreen) { 
        musicSheet.webkitRequestFullscreen();
    } else if (musicSheet.msRequestFullscreen) {
        musicSheet.msRequestFullscreen();
    }
});

document.getElementById('toggleDownload').addEventListener('click', function () {
    const musicSheet = document.getElementById('music-sheet');
    const imageUrl = musicSheet.src;
    const link = document.createElement('a');
    const imageName = getQueryParam('image') || 'default'; 
    link.href = imageUrl;
    link.download = `${imageName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});