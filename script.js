"use strict";

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio("tunes/q.wav"); // default, audio source is "q" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // audio source based on key press
  audio.play(); // plays the audio source

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  // calling playTune function with passing data-key value as argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKey = (e) => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

document.addEventListener("click", showHideKey);
document.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
