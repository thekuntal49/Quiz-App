const audio = new Audio("Audio/login.mp3");
audio.play();

const image = document.querySelector("#image");
const para = document.querySelector("p");
image.src = localStorage.userAvatar;
para.innerText = localStorage.userName;

image.addEventListener("click", () => {
  history.back();
});

const forward = document.querySelector("#forward");
const backward = document.querySelector("#back");

forward.addEventListener("click", () => {
  history.forward();
});

backward.addEventListener("click", () => {
  history.back();
});

const easy = document.querySelector(".btn1");
const medium = document.querySelector(".btn2");
const hard = document.querySelector(".btn3");

localStorage.getItem("userDifficulty");

let mode = "hard";

hard.addEventListener("click", () => {
  mode = "hard";
  localStorage.setItem("userDifficulty", mode);
  location.href = "ques.html";
});

medium.addEventListener("click", () => {
  mode = "medium";
  localStorage.setItem("userDifficulty", mode);
  location.href = "ques.html";
});

easy.addEventListener("click", () => {
  mode = "easy";
  localStorage.setItem("userDifficulty", mode);
  location.href = "ques.html";
});

document.querySelector("#logout").addEventListener("click", () => {
  location.href = "index.html";
});
