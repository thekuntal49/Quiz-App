const quizForm = document.querySelector("#quizForm");
const input = document.querySelector("#username");
const img = document.querySelectorAll(".img");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let count = 0;
  let selectedAvatar = "";

  if (input.value === "") {
    alert("Please enter your name");
    return;
  }

  img.forEach((item) => {
    if (item.classList.contains("selected")) {
      selectedAvatar = item.src;
      count++;
    }
  });

  if (count === 0) {
    alert("Please choose an avatar");
    return;
  }

  localStorage.setItem("userName", input.value);
  localStorage.setItem("userAvatar", selectedAvatar);

  const formData = new FormData();
  formData.append("username", input.value);
  formData.append("avatar", selectedAvatar);

  fetch("submit.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      location.href = "choice.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

img.forEach((item) => {
  item.addEventListener("click", (e) => {
    img.forEach((imgItem) => {
      imgItem.classList.remove("selected");
    });
    e.target.classList.add("selected");
  });
});

const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");

forward.addEventListener("click", () => {
  history.forward();
});
