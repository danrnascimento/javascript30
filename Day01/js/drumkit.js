import { audioManager } from "./audio.js";

const audio = audioManager();

const keys = document.querySelectorAll(".key");

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", ({ keyCode }) => audio.play(keyCode));
window.addEventListener("keyup", ({ keyCode }) => audio.stop(keyCode));
