const input = document.querySelector("#username");
const cont = document.querySelector(".container");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");

localStorage.getItem("userName");
input.addEventListener("input", (e) => {
  localStorage.setItem("userName", e.target.value);
});

const img = document.querySelectorAll(".img");

localStorage.getItem("userAvatar");
let count = 0;
img.forEach((item) => {
  item.addEventListener("click", (e) => {
    localStorage.setItem("userAvatar", e.target.src);
    count++;
  });
});

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (count !== 0 && input.value !== "") {
    location.href = "choice.html";
  } else {
    if (input.value === "") {
      alert("Please enter your name");
    } else {
      alert("Please choose any avatar");
    }
  }
});

forward.addEventListener("click", () => {
  if (count !== 0 && input.value !== "") {
    history.forward();
  } else {
    if (input.value === "") {
      alert("Please enter your name");
    } else {
      alert("Please choose any avatar");
    }
  }
});
