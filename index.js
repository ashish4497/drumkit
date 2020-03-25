window.addEventListener("keyup", playMusic);

function playMusic(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  // key.classList.remove("playing");
  // key.classList.toggle("playing");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const key = document.querySelectorAll(".key");
key.forEach(key => key.addEventListener("transitionend", removeTransition));
