const backward = document.querySelector("#back");
backward.addEventListener("click", () => {
  let score = 0;
  location.href = "choice.html";
  localStorage.setItem("score", score);
  userScore.innerText = localStorage.score;
});

const userName = document.querySelector("#userName");

userName.innerText = localStorage.userName;

const userLvl = document.querySelector("#userLvl");
userLvl.innerText = localStorage.userDifficulty;

const userScore = document.querySelector("#score span");
userScore.innerText = localStorage.score;

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let score = 0;
  location.href = "choice.html";
  localStorage.setItem("score", score);
  userScore.innerText = localStorage.score;
});

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const todayDate = new Date();
const date = document.querySelector("#Date");
const month = document.querySelector("#Month");
const year = document.querySelector("#Year");
date.innerText = todayDate.getDate();
month.innerText = monthsShort[todayDate.getMonth()];

year.innerText = todayDate.getFullYear();

