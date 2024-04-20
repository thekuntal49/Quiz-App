const easyQues = [
  {
    question: "const result = (1 && 2) || (0 && 3);",
    options: ["1", "2", "3", "0"],
    answer: "2",
  },
  {
    question:
      "const array = [5, 1, 3, 4, 2];\nconst result = array.sort((a, b) => b - a);",
    options: [
      "[5, 4, 3, 2, 1]",
      "[1, 2, 3, 4, 5]",
      "[5, 1, 3, 4, 2]",
      "[5, 4, 2, 3, 1]",
    ],
    answer: "[5, 4, 3, 2, 1]",
  },
  {
    question: "const result = typeof Object;",
    options: ["'object'", "'function'", "'null'", "'undefined'"],
    answer: "'function'",
  },
  {
    question:
      "let result = 2009;\ntry {\n  result = 262 / 0;\n} catch (e) {\n  result = 0 / 262;}",
    options: ["Infinity", "262", "0", "NaN"],
    answer: "Infinity",
  },
  {
    question: "const result = true > false;",
    options: ["true", "false", "NaN", "Error"],
    answer: "true",
  },
  {
    question: "const result = Number.isInteger(95.0);",
    options: ["true", "false", "NaN", "Error"],
    answer: "true",
  },
  {
    question:
      "const array = [1, 2, 3, 4, 5];\nconst result = array.splice(1, 2, 3);",
    options: [
      "[1, 2, 3, 4, 5]",
      "[1, 3, 4, 5]",
      "[1, 2, 3]",
      "[1, 3, 2, 4, 5]",
    ],
    answer: "[1, 2, 3]",
  },
  {
    question: "const { name } = {\n  name: 'Brendan'\n};\nconst result = name;",
    options: ["'Brendan'", "'name'", "'undefined'", "'null'"],
    answer: "'Brendan'",
  },
  {
    question:
      "for(var items=[95,262,2015,2009],\nnoop=(v)=>v,\ni=0;i<items.length;i++)\nnoop(items[i]);\nconst result=i;",
    options: ["0", "3", "4", "undefined"],
    answer: "4",
  },
  {
    question:
      "const str = 'JavaScript is not Java';\nconst result = str.replace('Java', 'ECMA');",
    options: [
      "'JavaScript is not ECMA'",
      "'ECMAScript is not Java'",
      "'JavaScript is not Java'",
      "'ECMAScript is not ECMA'",
    ],
    answer: "'JavaScript is not ECMA'",
  },
];

const mediumQues = [
  {
    question:
      "const map = v => v * v;\nconst array = Array.from([1, 2, 3], map);\nconst result = array.join('');",
    options: ["'149'", "'123'", "'149162'", "'112233'"],
    answer: "'149162'",
  },
  {
    question: "const array = [1, 2, 3];\nconst result = 3 in array;",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
  },
  {
    question:
      "const func = function (x, y = 4) {\n  return x + y;\n}\nconst result = func(2);",
    options: ["2", "4", "6", "8"],
    answer: "6",
  },
  {
    question: "let name = 1;\n({ name } = { name: 3 });\nconst result = name;",
    options: ["1", "3", "undefined", "'name'"],
    answer: "3",
  },
  {
    question:
      "const array = [1, 2, 3];\nlet result = 1;\nfor (const value of array) {\n  result *= value;\n}",
    options: ["6", "5", "0", "1"],
    answer: "6",
  },
  {
    question: "const result = Number('') + 1;",
    options: ["1", "0", "'1'", "'01'"],
    answer: "1",
  },
  {
    question:
      "const func = new Function('a', 'b', 'return a + b');\nconst result = func(1, 2);",
    options: ["'12'", "'3'", "'Error'", "'NaN'"],
    answer: "'3'",
  },
  {
    question: "const f=(o)=>{o=null;};const o={name:'Brendan'};f(o);o.name;",
    options: ["'Brendan'", "'null'", "'undefined'", "'Error'"],
    answer: "'Brendan'",
  },
  {
    question:
      "const firstArray = [1, 2, 3];\nconst secondArray = [1, 2, 3];\nconst result = firstArray == secondArray;",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
  },
  {
    question:
      "const array = [1, 3, 5, 3, 10];\nconst result = array.lastIndexOf(3);",
    options: ["1", "3", "4", "-1"],
    answer: "3",
  },
];

const hardQues = [
  {
    question: "var value = 2009;\ndelete value;\nconst result = value;",
    options: ["2009", "undefined", "Error", "null"],
    answer: "2009",
  },
  {
    question: "const result = null && undefined;",
    options: ["null", "undefined", "true", "false"],
    answer: "null",
  },
  {
    question: "for (const i = 0; i < 5; i++) { const result = i; }",
    options: [
      "This code will throw an error",
      "This code will run without errors",
      "This code will not execute",
      "This code will result in an infinite loop",
    ],
    answer: "This code will throw an error",
  },
  {
    question:
      "const array = [1, 2, 3];\nconst result = array.concat([4], [5]);",
    options: [
      "[1, 2, 3, 4, 5]",
      "[1, 2, 3, [4, 5]]",
      "[1, 2, 3, 4], [5]",
      "[1, 2, 3, 4, [5]]",
    ],
    answer: "[1, 2, 3, 4, 5]",
  },
  {
    question:
      "const func = function fName() {\n  return 2009;\n};\nconst result = typeof fName;",
    options: ["'function'", "'number'", "'undefined'", "'null'"],
    answer: "'function'",
  },
  {
    question: "const x = ?; const result = x !== x;",
    options: ["undefined", "null", "NaN", "0"],
    answer: "NaN",
  },
  {
    question:
      "const array = [1, 2, 3];\nconst map = (v, i) => v * i;\nconst result = array.map(map);",
    options: ["'[1, 2, 3]'", "'[0, 2, 6]'", "'[0, 2, 6]'", "'Error'"],
    answer: "'[0, 2, 6]'",
  },
  {
    question: "const array = new Array(10); const result = array[0];",
    options: ["undefined", "null", "0", "TypeError"],
    answer: "undefined",
  },
  {
    question: 'const result = "ECMAScript".slice(1, -1);',
    options: ["'ECMA'", "'CMAScrip'", "'CMAScript'", "'ECMAScrip'"],
    answer: "'CMAScrip'",
  },
  {
    question:
      "const array = [1, 2, 3];\nconst result = array.concat([4], [5]);",
    options: [
      "'[1, 2, 3, 4, 5]'",
      "'[1, 2, 3, [4, 5]]'",
      "'[1, 2, 3, 4], [5]'",
      "'[1, 2, 3, 4, [5]]'",
    ],
    answer: "'[1, 2, 3, 4, 5]'",
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
