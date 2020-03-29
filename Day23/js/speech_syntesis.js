let voices = [];
const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

const populateVoices = (event) => {
    voices = event.currentTarget.getVoices();
    const voicesOptions = voices
        .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
        .join('');
    voicesDropdown.innerHTML = voicesOptions;
}

const setVoice = (event) => {
    msg.voice = voices.find(voice => voice.name === event.currentTarget.value);
    toggle();
}

const toggle = (startOver = true) => {
    speechSynthesis.cancel();
    if(startOver) {
        speechSynthesis.speak(msg);
    }
}

const setOption = () => {
    msg[event.currentTarget.name] = event.currentTarget.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false));
options.forEach(option => option.addEventListener('change', setOption));