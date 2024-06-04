document.addEventListener('DOMContentLoaded', function () {
    const rectangle = document.getElementById('rectangle');

    function removeClickListeners() {
        const otherRectangles = document.querySelectorAll('.rotateRectangle1, .rotateRectangle2, .rotateRectangle3, .rotateRectangle4', '.mute', '.skip');
        otherRectangles.forEach(otherRectangle => {
            otherRectangle.removeEventListener('click', removeClickListeners);
        });
    }

    rectangle.addEventListener('click', function () {
        this.classList.add('expand');
        removeClickListeners();
        setTimeout(() => {
            this.style.transition = 'opacity 0.2s ease';
            this.style.opacity = '0';
            this.remove();
            document.getElementById("bodyOpening").style.backgroundImage = "url('/img/magicpattern0.png')";
            const otherRectangles = document.querySelectorAll('.rotateRectangle1, .rotateRectangle2, .rotateRectangle3, .rotateRectangle4, .mute, .skip');            otherRectangles.forEach(otherRectangle => {
                otherRectangle.remove();
            });
        }, 500);
        setTimeout(() => {
            window.location.href = "pianison-intro.html";
        }, 1000);
    });

    const backgroundAudio = document.getElementById("backgroundAudio");
    const muteButton = document.getElementById("muteButton");
    const bars = document.querySelectorAll("#muteButton .bar");
    function toggleAudio() {
        if (backgroundAudio.paused) {
            backgroundAudio.play();
            bars.forEach(bar => {
                bar.classList.add("playing__bar");
                bar.classList.remove("playing__bar0");
            });
        } else {
            backgroundAudio.pause();
            bars.forEach(bar => {
                bar.classList.remove("playing__bar");
                bar.classList.add("playing__bar0");
            });
        }

        
    }

    // Event listener for the mute button
    muteButton.addEventListener("click", function () {
        toggleAudio();
    });
    toggleAudio();
    
});