window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const text = document.querySelector('.text');
const img = document.querySelector('img');
const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    
    console.log(transcript);
    if(transcript.includes('Hi') || transcript.includes('Hello') || transcript.includes('Hey') ||
    transcript.includes('Oi') || transcript.includes('ei') || transcript.includes('Olá')) {
        img.classList.remove('hide');
    } else {
        img.classList.add('hide');
    }
    text.textContent = transcript;
});

recognition.addEventListener('end', recognition.start);

recognition.start();