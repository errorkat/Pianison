let container = document.querySelector("#conversation");

let speeds = {
    pause: 500,
    slow: 120,
    normal: 70,
    fast: 20
};

let textLines = [
    { string: "Greetings, traveller! I am Lyra, the god of music. Welcome to the enchanting realm of melodies and harmonies. Here, your journey through the vast world of music begins.", speed: speeds.fast },
    { string: "In this world, you can embark on three magical quests. First, you can play the tunes that resonate with your soul, mastering instruments and notes.", speed: speeds.fast },
    { string: "Second, you can explore the vibrant world of anime music, discovering the popular songs and the stories behind them.", speed: speeds.fast },
    { string: "Third, you can learn the basics of music theory, gaining a fundamental understanding to start your musical journey.", speed: speeds.fast },
    { string: "Are you ready to unleash your musical potential? Join me as we dive into this symphony of experiences together. Let the music guide you and let your adventure begin!", speed: speeds.fast },
];

let characters = [];
let currentLineIndex = 0;

function prepareCharacters() {
    characters = [];
    container.innerHTML = '';
    let line = textLines[currentLineIndex];
    line.string.split("").forEach(character => {
        let span = document.createElement("span");
        span.textContent = character;
        container.appendChild(span);
        characters.push({
            span: span,
            delayAfter: line.speed
        });
    });
}

function revealOneCharacter(list) {
    document.querySelector(".triangle-up").classList.remove("triangle-upHide");
    document.querySelector('.conversationBox').removeAttribute('onclick');
    if (list.length === 0) return;
    let next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");

    let delay = next.delayAfter;
    if (list.length > 0) {
        setTimeout(function () {
            revealOneCharacter(list);
        }, delay);
    }
    else {
        setTimeout(function () {
            document.querySelector(".triangle-up").classList.add("triangle-upHide");
            document.querySelector('.conversationBox').setAttribute('onclick', 'revealNextString()');
        }, 500);
    }

}

function revealNextString() {
    if (currentLineIndex >= textLines.length) {
        window.location.href = "index.html";
        return;
    }
    prepareCharacters();
    revealOneCharacter(characters);
    currentLineIndex++;
}

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

prepareCharacters();
revealNextString();