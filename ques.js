const hardQues = [
  {
    question: "What does 'NaN' stand for in JavaScript?",
    options: ["Not a Number", "Newly assigned Number", "Negative Numeric"],
    answer: "Not a Number",
  },
  {
    question: "Which of the following statements about closures is true?",
    options: [
      "They can only be created using anonymous functions.",
      "They can access variables from their containing function even after the function has finished executing.",
      "They can only be created inside classes.",
    ],
    answer:
      "They can access variables from their containing function even after the function has finished executing.",
  },
  {
    question:
      "What will be the output of the following code?\nconsole.log(0.1 + 0.2 === 0.3);",
    options: ["true", "false"],
    answer: "false",
  },
  {
    question: "What does the 'use strict' mode in JavaScript do?",
    options: [
      "Enforces stricter parsing and error handling in your code.",
      "Enables all features of the latest JavaScript version.",
      "Allows you to use undeclared variables without an error.",
    ],
    answer: "Enforces stricter parsing and error handling in your code.",
  },
  {
    question:
      "What is the result of the following code?\nconsole.log(+'10' + +'5');",
    options: ["105", "15", "20"],
    answer: "15",
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    options: ["myVar", "3var", "_var", "var"],
    answer: "3var",
  },
  {
    question:
      "What does the following code snippet do?\nconst x = 5;\nconst y = x++ + ++x;",
    options: [
      "Assigns the value 10 to y",
      "Assigns the value 12 to y",
      "Results in a syntax error",
    ],
    answer: "Assigns the value 12 to y",
  },
  {
    question:
      "What is the result of the following code?\nconsole.log(typeof NaN);",
    options: ["number", "NaN", "undefined"],
    answer: "number",
  },
  {
    question:
      "What is the output of the following code?\nconsole.log(2 + '2');",
    options: ["22", "4", "TypeError"],
    answer: "22",
  },
  {
    question:
      "What will be the result of the following code?\nconst x = {};\nconsole.log(x.toString());",
    options: ["[object Object]", "{}", "TypeError"],
    answer: "[object Object]",
  },
];

const mediumQues = [
  {
    question: "What does the 'typeof' operator return for an array?",
    options: ["'object'", "'array'", "'string'", "'number'"],
    answer: "'object'",
  },
  {
    question: "What is the result of the expression: '5' + 3?",
    options: ["'53'", "'8'", "'5+3'", "'Error'"],
    answer: "'53'",
  },
  {
    question:
      "Which method is used to add new elements to the end of an array?",
    options: ["'push'", "'pop'", "'shift'", "'unshift'"],
    answer: "'push'",
  },
  {
    question: "How do you check if a variable is undefined?",
    options: [
      "'typeof variable === 'undefined''",
      "'variable === undefined'",
      "'variable == null'",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of the 'splice' method in JavaScript?",
    options: [
      "To add or remove elements from an array",
      "To concatenate two arrays",
      "To reverse the elements of an array",
      "To sort the elements of an array",
    ],
    answer: "To add or remove elements from an array",
  },
  {
    question: "Which statement correctly declares a function?",
    options: [
      "'function myFunction() {}'",
      "'myFunction = function() {}'",
      "'var myFunction = {}'",
      "'var myFunction() = {}'",
    ],
    answer: "'function myFunction() {}'",
  },
  {
    question: "What is the result of the following code?\nBoolean('false')",
    options: ["'true'", "'false'", "'Error'", "'undefined'"],
    answer: "'true'",
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: [
      "'// This is a comment'",
      "'/* This is a comment */'",
      "'<!-- This is a comment -->'",
      "'// This is a comment */'",
    ],
    answer: "'// This is a comment'",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["'pop'", "'push'", "'shift'", "'unshift'"],
    answer: "'pop'",
  },
  {
    question: "What does the 'map' method do in JavaScript?",
    options: [
      "Creates a new array with the results of calling a function for every element in the array",
      "Filters elements in an array based on a condition",
      "Reduces the array to a single value",
      "Sorts the elements of the array",
    ],
    answer:
      "Creates a new array with the results of calling a function for every element in the array",
  },
];

// Displaying the questions

const easyQues = [
  {
    question: "What is the correct way to include JavaScript in an HTML file?",
    options: [
      "<script src='script.js'></script>",
      "<javascript src='script.js'></javascript>",
      "<script href='script.js'></script>",
      "<link rel='script' href='script.js'>",
    ],
    answer: "<script src='script.js'></script>",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["variable", "var", "v", "let"],
    answer: "var",
  },
  {
    question: "What does the '=== operator do in JavaScript?",
    options: [
      "Checks if two values are equal in value and type",
      "Checks if two values are equal in value but not in type",
      "Assigns a value to a variable",
      "Checks if two values are equal in type but not in value",
    ],
    answer: "Checks if two values are equal in value and type",
  },
  {
    question: "How do you write 'Hello, World!' in an alert box?",
    options: [
      "alertBox('Hello, World!');",
      "msg('Hello, World!');",
      "alert('Hello, World!');",
      "msgBox('Hello, World!');",
    ],
    answer: "alert('Hello, World!');",
  },
  {
    question: "Which function is used to print something in the console?",
    options: ["console.log()", "print()", "log()", "console()"],
    answer: "console.log()",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function:myFunction()",
      "function = myFunction()",
      "function myFunction()",
      "myFunction():function",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
      "function myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    question: "How do you comment out a single line of code in JavaScript?",
    options: [
      "//This is a comment",
      "/*This is a comment*/",
      "'This is a comment",
      "#This is a comment",
    ],
    answer: "//This is a comment",
  },
  {
    question: "How do you create a for loop in JavaScript?",
    options: [
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "loop (i = 0; i <= 5)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseclick", "onclick", "onchange", "onmouseover"],
    answer: "onclick",
  },
];

const ques = document.querySelector("#ques");
const opt = document.querySelectorAll(".opt");
const curr = document.querySelector("#curr");
const audio = new Audio("Audio/click.mp3");
const audioRight = new Audio("Audio/right.mp3");
const audioWrong = new Audio("Audio/wrong.mp3");
localStorage.getItem("score");
let score = 0;
let selectedOption = null;

if (localStorage.userDifficulty === "hard") {
  let currentQuestionIndex = 0;

  const hard = (document.querySelector("#hard").innerText = "Hard");

  function displayQuestion(index) {
    ques.innerText = hardQues[index].question;
    let answeredCorrectly = false;

    opt.forEach((ele, i) => {
      ele.innerText = hardQues[index].options[i];
      ele.style.backgroundColor = "";
      ele.style.cursor = "pointer";

      ele.addEventListener("click", () => {
        if (!answeredCorrectly) {
          if (ele.innerText === hardQues[index].answer) {
            score++;
            localStorage.setItem("score", score);
            ele.style.backgroundColor = "greenyellow";
            new Audio("Audio/right.mp3").play();
          } else {
            ele.style.backgroundColor = "red";
            opt.forEach((optElement) => {
              if (optElement.innerText === hardQues[index].answer) {
                optElement.style.backgroundColor = "greenyellow";
                new Audio("Audio/wrong.mp3").play();
              }
            });
          }

          answeredCorrectly = true;
          // Disable all options
          opt.forEach((optElement) => {
            optElement.removeEventListener("click", () => {});
            optElement.style.cursor = "no-drop";
            optElement.classList.add("clicked");
            optElement.classList.remove("hover-effect");
          });
        }
      });
      ele.classList.add("hover-effect");
    });
  }

  displayQuestion(currentQuestionIndex);

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    selectedOption = null;
    currentQuestionIndex++;
    curr.innerText = currentQuestionIndex + 1;

    // Reset all options
    opt.forEach((ele) => {
      ele.style.backgroundColor = "";
      ele.style.pointerEvents = "auto";
    });

    if (currentQuestionIndex == 9) {
      btn.innerText = "Submit";
      btn.style.backgroundColor = "greenyellow";
    }
    if (currentQuestionIndex < hardQues.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      location.href = "result.html";
      curr.innerText = 10;
      displayQuestion(currentQuestionIndex);
    }
  });
} else if (localStorage.userDifficulty === "medium") {
  let currentQuestionIndex = 0;

  const hard = (document.querySelector("#hard").innerText = "Medium");

  function displayQuestion(index) {
    ques.innerText = mediumQues[index].question;
    let answeredCorrectly = false;

    opt.forEach((ele, i) => {
      ele.innerText = mediumQues[index].options[i];
      ele.style.backgroundColor = "";
      ele.style.cursor = "pointer";

      ele.addEventListener("click", () => {
        if (!answeredCorrectly) {
          if (ele.innerText === mediumQues[index].answer) {
            score++;
            localStorage.setItem("score", score);
            ele.style.backgroundColor = "greenyellow";
            new Audio("Audio/right.mp3").play();
          } else {
            ele.style.backgroundColor = "red";
            opt.forEach((optElement) => {
              if (optElement.innerText === mediumQues[index].answer) {
                optElement.style.backgroundColor = "greenyellow";
                new Audio("Audio/wrong.mp3").play();
              }
            });
          }

          answeredCorrectly = true;
          // Disable all options
          opt.forEach((optElement) => {
            optElement.removeEventListener("click", () => {});
            optElement.style.cursor = "no-drop";
            optElement.classList.add("clicked");
            optElement.classList.remove("hover-effect");
          });
        }
      });
      ele.classList.add("hover-effect");
    });
  }

  displayQuestion(currentQuestionIndex);

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    selectedOption = null;
    currentQuestionIndex++;
    curr.innerText = currentQuestionIndex + 1;

    // Reset all options
    opt.forEach((ele) => {
      ele.style.backgroundColor = "";
      ele.style.pointerEvents = "auto";
    });

    if (currentQuestionIndex == 9) {
      btn.innerText = "Submit";
      btn.style.backgroundColor = "greenyellow";
    }
    if (currentQuestionIndex < mediumQues.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      location.href = "result.html";
      curr.innerText = 10;
      displayQuestion(currentQuestionIndex);
    }
  });
} else {
  let currentQuestionIndex = 0;

  const hard = (document.querySelector("#hard").innerText = "Easy");

  function displayQuestion(index) {
    ques.innerText = easyQues[index].question;
    let answeredCorrectly = false;

    opt.forEach((ele, i) => {
      ele.innerText = easyQues[index].options[i];
      ele.style.backgroundColor = "";
      ele.style.cursor = "pointer";

      ele.addEventListener("click", () => {
        if (!answeredCorrectly) {
          if (ele.innerText === easyQues[index].answer) {
            score++;
            localStorage.setItem("score", score);
            ele.style.backgroundColor = "greenyellow";
            new Audio("Audio/right.mp3").play();
          } else {
            ele.style.backgroundColor = "red";
            opt.forEach((optElement) => {
              if (optElement.innerText === easyQues[index].answer) {
                optElement.style.backgroundColor = "greenyellow";
                new Audio("Audio/wrong.mp3").play();
              }
            });
          }

          answeredCorrectly = true;
          opt.forEach((optElement) => {
            optElement.removeEventListener("click", () => {});
            optElement.style.cursor = "no-drop";
            optElement.classList.add("clicked");
            optElement.classList.remove("hover-effect");
          });
        }
      });
      ele.classList.add("hover-effect");
    });
  }

  displayQuestion(currentQuestionIndex);

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    selectedOption = null;
    currentQuestionIndex++;
    curr.innerText = currentQuestionIndex + 1;

    // Reset all options
    opt.forEach((ele) => {
      ele.style.backgroundColor = "";
      ele.style.pointerEvents = "auto";
    });

    if (currentQuestionIndex == 9) {
      btn.innerText = "Submit";
      btn.style.backgroundColor = "greenyellow";
    }
    if (currentQuestionIndex < easyQues.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      location.href = "result.html";
      curr.innerText = 10;
      displayQuestion(currentQuestionIndex);
    }
  });
}

const forward = document.querySelector("#forward");
const backward = document.querySelector("#back");

forward.addEventListener("click", () => {
  history.forward();
});

backward.addEventListener("click", () => {
  history.back();
});
