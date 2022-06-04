function getKeyElementByKeyCode(keyCode) {
  return document.querySelector(`.key[data-key="${keyCode}"]`);
}

function getAudioElementByKeyCode(keyCode) {
  return document.querySelector(`audio[data-key="${keyCode}"]`);
}

export function audioManager() {
  function play(keyCode) {
    if (this.playing) return;

    this.playing = true;
    const key = getKeyElementByKeyCode(keyCode);
    const audio = getAudioElementByKeyCode(keyCode);

    if (!audio || !key) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }

  function stop(keyCode) {
    this.playing = false;
    const key = getKeyElementByKeyCode(keyCode);
    if (!key) return;
    key.classList.remove("playing");
  }

  return { play, stop };
}
