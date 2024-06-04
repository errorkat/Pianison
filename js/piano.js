const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'q', 'w', 'e', 'r', 't', 'y', 'u', '1', '2', '3', '4', '5', '6', '7', '%', '!', '@', '$', '^', 'Z', 'X', 'V', 'B', 'N', 'A', 'S', 'F', 'G', 'H', 'Q', 'W', 'R', 'T', 'Y'];
let audio = new Audio();

const activeKeys = new Set(); 

const playTune = (key) => {
    if (key === "%") {
       
        const fileName = `percent_lower.wav`;
        audio.src = `media/pianokeys/${fileName}`;
    } else {
        const fileName = key === key.toLowerCase() ? `${key}_lower.wav` : `${key}_upper.wav`;
        audio.src = `media/pianokeys/${fileName}`;
    }

    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    key.addEventListener("mousedown", () => {
        playTune(key.dataset.key);
        activeKeys.add(key.dataset.key); 
    });
    key.addEventListener("mouseup", () => {
        activeKeys.delete(key.dataset.key); 
    });
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) {
        if (!activeKeys.has(e.key)) { 
            playTune(e.key);
            activeKeys.add(e.key); 
        }
    }
}

const releasedKey = (e) => {
    if (allKeys.includes(e.key)) {
        activeKeys.delete(e.key); 
    }
}

const preloadKeys = () => {
    allKeys.forEach(key => {
        let tempAudio = new Audio();
       
        if (key === "%") {
            tempAudio.src = `media/pianokeys/percent_lower.wav`;
        } else {
            tempAudio.src = key === key.toLowerCase() ? `media/pianokeys/${key}_lower.wav` : `media/pianokeys/${key}_upper.wav`;
        }
        tempAudio.load();
    });
}

// Preload all keys on page load
window.addEventListener("load", preloadKeys);

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
document.addEventListener("keyup", releasedKey); 
