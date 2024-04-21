const easyQues = [
  // HTML Questions
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "None of the above",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    answer: "<a>",
  },
  {
    question: "Which HTML tag is used to define a table row?",
    options: ["<tr>", "<table>", "<td>", "<th>"],
    answer: "<tr>",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["src", "alt", "title", "href"],
    answer: "alt",
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<footer>", "<section>", "<bottom>", "<end>"],
    answer: "<footer>",
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<important>", "<b>", "<em>"],
    answer: "<strong>",
  },
  {
    question: "Which HTML element is used to define a paragraph?",
    options: ["<p>", "<paragraph>", "<para>", "<pg>"],
    answer: "<p>",
  },
  {
    question:
      "Which HTML element is used to define a header for a document or section?",
    options: ["<header>", "<head>", "<top>", "<h1-h6>"],
    answer: "<header>",
  },
  {
    question: "Which HTML element is used to define navigation links?",
    options: ["<nav>", "<navigation>", "<navig>", "<links>"],
    answer: "<nav>",
  },
  // CSS Questions
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "color", "font-color", "bgcolor"],
    answer: "color",
  },
  {
    question:
      "Which CSS property is used to set the background color of an element?",
    options: ["bgcolor", "background-color", "color", "background"],
    answer: "background-color",
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: [
      "text-style: bold;",
      "font-weight: bold;",
      "text-decoration: bold;",
      "bold: true;",
    ],
    answer: "font-weight: bold;",
  },
  {
    question: "Which CSS property is used to add space between elements?",
    options: ["padding", "margin", "space", "spacing"],
    answer: "margin",
  },
  {
    question:
      "Which CSS property is used to set the text alignment of an element?",
    options: ["text-align", "alignment", "align", "text-style"],
    answer: "text-align",
  },
  {
    question: "Which CSS property is used to underline text?",
    options: ["text-decoration", "underline", "decoration", "line-style"],
    answer: "text-decoration",
  },
  {
    question:
      "Which CSS property is used to change the font size of an element?",
    options: ["font-size", "size", "text-size", "font-style"],
    answer: "font-size",
  },
  {
    question: "Which CSS property is used to make text italic?",
    options: [
      "font-style: italic;",
      "text-style: italic;",
      "italic: true;",
      "style: italic;",
    ],
    answer: "font-style: italic;",
  },
  {
    question: "Which CSS property is used to set the height of an element?",
    options: ["height", "element-height", "size", "set-height"],
    answer: "height",
  },
  {
    question: "Which CSS property is used to set the width of an element?",
    options: ["width", "element-width", "size", "set-width"],
    answer: "width",
  },
  // JavaScript Questions
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["var", "let", "const", "variable"],
    answer: "var",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "None of the above",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which JavaScript method is used to select an element by its ID?",
    options: ["getElementByTag", "getElementById", "selectById", "getTagById"],
    answer: "getElementById",
  },
  {
    question:
      "Which JavaScript method is used to add an event listener to an element?",
    options: ["addEventListener", "attachEvent", "onEvent", "listenEvent"],
    answer: "addEventListener",
  },
  {
    question:
      "Which JavaScript method is used to remove whitespace from both ends of a string?",
    options: ["trim", "strip", "whitespace", "clean"],
    answer: "trim",
  },
  {
    question:
      "Which JavaScript method is used to round a number to the nearest integer?",
    options: ["round", "ceil", "floor", "nearest"],
    answer: "round",
  },
  {
    question:
      "Which JavaScript method is used to convert a string to uppercase letters?",
    options: ["toUpperCase", "upperCase", "toUpper", "upper"],
    answer: "toUpperCase",
  },
  {
    question:
      "Which JavaScript method is used to convert a string to lowercase letters?",
    options: ["toLowerCase", "lowerCase", "toLower", "lower"],
    answer: "toLowerCase",
  },
  {
    question: "Which JavaScript method is used to generate a random number?",
    options: ["random", "rand", "generateRandom", "randomNumber"],
    answer: "random",
  },
  {
    question: "What is the result of 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which keyword is used to declare a constant variable?",
    options: ["var", "let", "const", "final"],
    answer: "const",
  },
  {
    question: "What is the correct way to write an array in JavaScript?",
    options: ["(1,2,3)", "{1,2,3}", "[1,2,3]", "<1,2,3>"],
    answer: "[1,2,3]",
  },
  {
    question:
      "Which JavaScript method is used to find the highest number in a list?",
    options: ["max", "maximum", "findMax", "highest"],
    answer: "max",
  },
  {
    question: "Which JavaScript keyword is used to declare a constant?",
    options: ["let", "var", "const", "constant"],
    answer: "const",
  },
  {
    question:
      "Which JavaScript operator is used to assign a value to a variable?",
    options: ["=", "==", "===", ":="],
    answer: "=",
  },
  {
    question:
      "Which JavaScript operator is used to compare two values for equality?",
    options: ["==", "===", "=", "!="],
    answer: "===",
  },
  {
    question:
      "Which JavaScript operator is used to compare whether one value is greater than another?",
    options: [">", "<", ">=", "<="],
    answer: ">",
  },
  {
    question: "Which JavaScript operator is used to add two numbers together?",
    options: ["+", "&", "*", "/"],
    answer: "+",
  },
  {
    question:
      "Which JavaScript function is used to convert a string to a number?",
    options: ["parseInt", "stringToNumber", "convertToNumber", "strNumber"],
    answer: "parseInt",
  },
  {
    question:
      "Which JavaScript function is used to round a number to a specified number of decimal places?",
    options: ["toFixed", "round", "toPrecision", "toFixedDecimal"],
    answer: "toFixed",
  },
  {
    question:
      "Which JavaScript function is used to get the current date and time?",
    options: ["getDate", "currentTime", "now", "new Date"],
    answer: "new Date",
  },
  {
    question:
      "Which JavaScript function is used to create a new array from a section of an existing array?",
    options: ["slice", "splice", "split", "cut"],
    answer: "slice",
  },
  {
    question:
      "Which JavaScript function is used to add new items to the end of an array and returns the new length?",
    options: ["push", "add", "append", "insert"],
    answer: "push",
  },
  {
    question:
      "Which JavaScript function is used to remove the last item from an array and returns that item?",
    options: ["pop", "remove", "delete", "last"],
    answer: "pop",
  },
  {
    question:
      "Which JavaScript function is used to remove the first item from an array and returns that item?",
    options: ["shift", "remove", "delete", "first"],
    answer: "shift",
  },
  {
    question:
      "Which JavaScript function is used to add new items to the beginning of an array and returns the new length?",
    options: ["unshift", "add", "prepend", "insert"],
    answer: "unshift",
  },
  {
    question:
      "Which JavaScript function is used to sort the items of an array?",
    options: ["sort", "order", "arrange", "organize"],
    answer: "sort",
  },
  {
    question:
      "Which JavaScript function is used to reverse the order of the elements in an array?",
    options: ["reverse", "backwards", "opposite", "flip"],
    answer: "reverse",
  },
  {
    question:
      "Which JavaScript function is used to join all elements of an array into a string?",
    options: ["join", "concat", "merge", "combine"],
    answer: "join",
  },
  {
    question:
      "Which JavaScript function is used to get the index of the first occurrence of a specified value in an array?",
    options: ["indexOf", "findIndex", "search", "getPosition"],
    answer: "indexOf",
  },
  {
    question:
      "Which JavaScript function is used to check if a variable is an array?",
    options: ["Array.isArray", "isArray", "checkArray", "is_array"],
    answer: "Array.isArray",
  },
  {
    question:
      "Which JavaScript function is used to convert a JavaScript object to a JSON string?",
    options: ["JSON.stringify", "stringify", "toJSON", "objToString"],
    answer: "JSON.stringify",
  },
  {
    question:
      "Which JavaScript function is used to parse a JSON string and convert it to a JavaScript object?",
    options: ["JSON.parse", "parseJSON", "stringToObject", "fromJSON"],
    answer: "JSON.parse",
  },
  {
    question:
      "Which JavaScript event occurs when the user clicks on an HTML element?",
    options: ["onclick", "onchange", "onmouseclick", "onselect"],
    answer: "onclick",
  },
  {
    question:
      "Which JavaScript event occurs when the user moves the mouse pointer over an element?",
    options: ["onmouseover", "onmouseenter", "onmousemove", "onhover"],
    answer: "onmouseover",
  },
  {
    question:
      "Which JavaScript event occurs when the user moves the mouse pointer out of an element?",
    options: ["onmouseout", "onmouseleave", "onmouseexit", "onexit"],
    answer: "onmouseout",
  },
  {
    question:
      "Which JavaScript event occurs when the user double-clicks on an element?",
    options: ["ondblclick", "ondoubleclick", "onclicktwice", "ondoubleclick"],
    answer: "ondblclick",
  },
  {
    question:
      "Which JavaScript event occurs when the user presses a key on the keyboard?",
    options: ["onkeypress", "onkeydown", "onkeyup", "onkey"],
    answer: "onkeypress",
  },
  {
    question: "Which JavaScript event occurs when an image is loaded?",
    options: ["onload", "onimage", "onimageload", "onloadimage"],
    answer: "onload",
  },
  {
    question: "Which JavaScript event occurs when a form is submitted?",
    options: ["onsubmit", "submitForm", "onformsubmit", "formSubmit"],
    answer: "onsubmit",
  },
  {
    question:
      "Which JavaScript event occurs when a user changes the value of an input field?",
    options: ["onchange", "oninputchange", "onvaluechange", "onfieldchange"],
    answer: "onchange",
  },
  {
    question: "Which JavaScript event occurs when an element is being dragged?",
    options: ["ondrag", "ondragging", "ondragstart", "ondraggingstart"],
    answer: "ondragstart",
  },
  {
    question:
      "Which JavaScript event occurs when the dragged element is being dropped?",
    options: ["ondrop", "ondragdrop", "ondragend", "ondraggingend"],
    answer: "ondrop",
  },
  {
    question:
      "Which JavaScript event occurs when the user starts to drag an element?",
    options: ["ondragstart", "ondrag", "ondragging", "ondragbegin"],
    answer: "ondragstart",
  },
  {
    question:
      "Which JavaScript event occurs when the user releases a key on the keyboard?",
    options: ["onkeyup", "onkeyrelease", "onkeyreleaseup", "onkey"],
    answer: "onkeyup",
  },
  {
    question:
      "Which JavaScript event occurs when the user scrolls in an element?",
    options: ["onscroll", "onscrolling", "onscrollstart", "onscrollbegin"],
    answer: "onscroll",
  },
  {
    question:
      "Which JavaScript event occurs when the browser starts to load the document?",
    options: ["onload", "onstart", "onpageload", "onloadstart"],
    answer: "onloadstart",
  },
  {
    question:
      "Which JavaScript event occurs when the browser has finished loading the document?",
    options: ["onload", "onpageload", "onloadend", "onfinish"],
    answer: "onloadend",
  },
  {
    question:
      "Which JavaScript event occurs when an error occurs while loading a document or an image?",
    options: ["onerror", "onloaderror", "onloadingerror", "onloaderror"],
    answer: "onerror",
  },
  {
    question:
      "Which JavaScript event occurs when the user cancels the loading of a document or an image?",
    options: ["onabort", "onloadabort", "onloadingabort", "onabortload"],
    answer: "onabort",
  },
  {
    question:
      "Which JavaScript event occurs when the user resizes the browser window?",
    options: [
      "onresize",
      "onwindowresize",
      "onbrowserresize",
      "onresizewindow",
    ],
    answer: "onresize",
  },
  {
    question:
      "Which JavaScript event occurs when a media element (like audio or video) starts playing?",
    options: ["onplay", "onmediaplay", "onstartplay", "onplaying"],
    answer: "onplaying",
  },
  {
    question:
      "Which JavaScript event occurs when a media element (like audio or video) is paused?",
    options: ["onpause", "onmediapause", "onpauseplay", "onmediastop"],
    answer: "onpause",
  },
  {
    question:
      "Which JavaScript event occurs when a media element (like audio or video) has finished playing?",
    options: ["onended", "onmediaend", "onplayend", "onfinishplay"],
    answer: "onended",
  },
  {
    question:
      "Which JavaScript event occurs when the user's online status changes?",
    options: [
      "ononline",
      "onstatuschange",
      "onlinestatuschange",
      "onconnectionchange",
    ],
    answer: "ononline",
  },
  {
    question:
      "Which JavaScript event occurs when the user's connection status changes?",
    options: [
      "onconnectionchange",
      "onstatuschange",
      "onconnectionstatuschange",
      "onlinestatuschange",
    ],
    answer: "onconnectionchange",
  },
  {
    question:
      "Which JavaScript event occurs when the user starts typing in an input field?",
    options: ["onfocus", "ontype", "oninput", "ontext"],
    answer: "onfocus",
  },
  {
    question:
      "Which JavaScript event occurs when an element is no longer focused?",
    options: ["onblur", "onfocusout", "onlosefocus", "onunfocus"],
    answer: "onblur",
  },
  {
    question:
      "Which JavaScript event occurs when an element is being dragged over a valid drop target?",
    options: ["ondragover", "ondragenter", "ondraghover", "ondropover"],
    answer: "ondragover",
  },
  {
    question:
      "Which JavaScript event occurs when the value of an input field is changed?",
    options: ["onchange", "onvaluechange", "oninputchange", "onfieldchange"],
    answer: "onchange",
  },
  {
    question:
      "Which JavaScript event occurs when the user starts dragging a text selection or a file from the element?",
    options: ["ondragstart", "ondragselect", "ondragbegin", "ondraggingstart"],
    answer: "ondragstart",
  },
  {
    question:
      "Which JavaScript event occurs when the dragged text selection or file is dropped on an element?",
    options: ["ondrop", "ondragdrop", "ondragend", "ondraggingend"],
    answer: "ondrop",
  },
  {
    question: "Which JavaScript event occurs when an element is being dragged?",
    options: ["ondrag", "ondragging", "ondragstart", "ondraggingstart"],
    answer: "ondrag",
  },
  {
    question:
      "Which JavaScript event occurs when the user presses a key and holds it down?",
    options: ["onkeydown", "onkeypress", "onkeyhold", "onkeypresshold"],
    answer: "onkeydown",
  },
  {
    question:
      "Which JavaScript event occurs when the user releases a key that was pressed?",
    options: ["onkeyup", "onkeyrelease", "onkeyreleaseup", "onkey"],
    answer: "onkeyup",
  },
  {
    question:
      "Which JavaScript event occurs when the user moves the mouse pointer out of an element, or out of one of its children?",
    options: ["onmouseout", "onmouseleave", "onmouseexit", "onexit"],
    answer: "onmouseout",
  },
  {
    question:
      "Which JavaScript event occurs when the user moves the mouse pointer over an element, or over one of its children?",
    options: ["onmouseover", "onmouseenter", "onmousemove", "onhover"],
    answer: "onmouseover",
  },
  {
    question:
      "Which JavaScript event occurs when the user moves the mouse pointer into an element, or into one of its children?",
    options: ["onmouseenter", "onmouseover", "onmousein", "onhover"],
    answer: "onmouseenter",
  },
  {
    question: "Which JavaScript event occurs when an element loses focus?",
    options: ["onblur", "onfocusout", "onlosefocus", "onunfocus"],
    answer: "onblur",
  },
  {
    question: "Which JavaScript event occurs when an element gets focus?",
    options: ["onfocus", "onfocusin", "ongainfocus", "ongetfocus"],
    answer: "onfocus",
  },
  {
    question: "Which JavaScript event occurs when a form is reset?",
    options: ["onreset", "formReset", "onformreset", "resetForm"],
    answer: "onreset",
  },
  {
    question:
      "Which JavaScript event occurs when the user changes the content of an element, by selecting or removing some text?",
    options: ["onselect", "onchange", "ontextchange", "oncontentchange"],
    answer: "onselect",
  },
  {
    question:
      "Which JavaScript event occurs when an element is being scrolled?",
    options: ["onscroll", "onscrolling", "onscrollstart", "onscrollbegin"],
    answer: "onscroll",
  },
  {
    question:
      "Which JavaScript event occurs when a user starts to drag a text selection?",
    options: ["ondragstart", "ondragselect", "ondragbegin", "ondraggingstart"],
    answer: "ondragstart",
  },
  {
    question:
      "Which JavaScript event occurs when a user finishes dragging a text selection?",
    options: ["ondragend", "ondragfinish", "ondragstop", "ondraggingend"],
    answer: "ondragend",
  },
  {
    question:
      "Which JavaScript event occurs when a user finishes dragging an element?",
    options: ["ondragend", "ondragfinish", "ondragstop", "ondraggingend"],
    answer: "ondragend",
  },
  {
    question:
      "Which JavaScript event occurs when an element is dragged over a valid drop target?",
    options: ["ondragover", "ondragenter", "ondraghover", "ondropover"],
    answer: "ondragover",
  },
  {
    question: "Which JavaScript event occurs when a user drops an element?",
    options: ["ondrop", "ondragdrop", "ondragend", "ondraggingend"],
    answer: "ondrop",
  },
  {
    question:
      "Which JavaScript event occurs when a user starts dragging a file or text selection?",
    options: ["ondragstart", "ondragselect", "ondragbegin", "ondraggingstart"],
    answer: "ondragstart",
  },
  {
    question:
      "Which JavaScript event occurs when a user finishes dragging a file or text selection?",
    options: ["ondragend", "ondragfinish", "ondragstop", "ondraggingend"],
    answer: "ondragend",
  },
  // Add more questions as needed...

  // Total: 100 questions
];

const mediumQues = [
  // HTML Questions
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Document Order Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "Hyper Text Transfer Protocol",
      "Hyperlink Transfer Protocol",
      "HTTP Text Transfer Protocol",
      "Hyper Transfer Protocol",
    ],
    answer: "Hyper Text Transfer Protocol",
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    options: [
      "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
      "<style src='mystyle.css'>",
      "<stylesheet>mystyle.css</stylesheet>",
      "<link href='mystyle.css'>",
    ],
    answer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: [
      "In the <body> section",
      "At the end of the document",
      "In the <head> section",
      "In the <title> section",
    ],
    answer: "In the <head> section",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<sheet>"],
    answer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "font", "class", "styles"],
    answer: "style",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a href='http://www.example.com'>Example</a>",
      "<link>http://www.example.com</link>",
      "<a url='http://www.example.com'>Example</a>",
      "<a>http://www.example.com</a>",
    ],
    answer: "<a href='http://www.example.com'>Example</a>",
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["^", "/", "*", "<"],
    answer: "/",
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    options: [
      "<a href='url' target='_blank'>",
      "<a href='url' new>",
      "<a href='url' target='new'>",
      "<a href='url' window>",
    ],
    answer: "<a href='url' target='_blank'>",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<dl>"],
    answer: "<ul>",
  },
  {
    question: "What is the correct HTML for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<line>"],
    answer: "<br>",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<body bg='yellow'>",
      "<background>yellow</background>",
      "<bg color='yellow'>",
      "<body style='background-color:yellow;'>",
    ],
    answer: "<body style='background-color:yellow;'>",
  },
  {
    question:
      "Which HTML attribute is used to define the language of the content?",
    options: ["lang", "language", "lg", "en"],
    answer: "lang",
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<footer>", "<end>", "<section>", "<bottom>"],
    answer: "<footer>",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a href='http://www.example.com'>Example</a>",
      "<link>http://www.example.com</link>",
      "<a url='http://www.example.com'>Example</a>",
      "<a>http://www.example.com</a>",
    ],
    answer: "<a href='http://www.example.com'>Example</a>",
  },
  {
    question: "Which HTML element is used to define navigation links?",
    options: ["<nav>", "<navigation>", "<navig>", "<n>"],
    answer: "<nav>",
  },
  {
    question: "What does the <aside> element define?",
    options: [
      "A footer for a document or section",
      "Content aside from the content (like a sidebar)",
      "A section containing contact information",
      "Additional information about the document",
    ],
    answer: "Content aside from the content (like a sidebar)",
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<important>", "<b>", "<i>"],
    answer: "<strong>",
  },
  {
    question:
      "Which HTML element is used to define a section of navigation links?",
    options: ["<nav>", "<navigation>", "<navig>", "<n>"],
    answer: "<nav>",
  },
  {
    question:
      "Which HTML element is used to define a header for a document or section?",
    options: ["<head>", "<header>", "<top>", "<h>"],
    answer: "<header>",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["<title>", "<head>", "<h1>", "<meta>"],
    answer: "<title>",
  },
  {
    question: "What does the <mark> element define?",
    options: [
      "An inline quotation",
      "An important text",
      "Highlighted text",
      "Italic text",
    ],
    answer: "Highlighted text",
  },
  {
    question: "Which HTML element is used to define emphasized text?",
    options: ["<italic>", "<emphasize>", "<i>", "<em>"],
    answer: "<em>",
  },
  {
    question: "Which HTML element is used to define a paragraph?",
    options: ["<para>", "<p>", "<paragraph>", "<pg>"],
    answer: "<p>",
  },
  {
    question: "What does the <ins> element define?",
    options: ["Inserted text", "Inline text", "Important text", "Italic text"],
    answer: "Inserted text",
  },
  {
    question: "Which HTML element is used to define a description list?",
    options: ["<dl>", "<list>", "<ul>", "<ol>"],
    answer: "<dl>",
  },
  {
    question: "What is the correct HTML for making a text input field?",
    options: [
      "<input type='text'>",
      "<textfield>",
      "<input type='textfield'>",
      "<textinput>",
    ],
    answer: "<input type='text'>",
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: [
      "<input type='check'>",
      "<checkbox>",
      "<input type='checkbox'>",
      "<check>",
    ],
    answer: "<input type='checkbox'>",
  },
  {
    question: "What is the correct HTML for making a text area?",
    options: [
      "<input type='textarea'>",
      "<textarea>",
      "<textinput>",
      "<input type='textinput'>",
    ],
    answer: "<textarea>",
  },
  {
    question: "What is the correct HTML for making a drop-down list?",
    options: [
      "<input type='dropdown'>",
      "<select>",
      "<dropdown>",
      "<input type='list'>",
    ],
    answer: "<select>",
  },
  {
    question: "What is the correct HTML for making a button?",
    options: [
      "<button>",
      "<input type='button'>",
      "<input type='submit'>",
      "<btn>",
    ],
    answer: "<button>",
  },
  {
    question: "What is the correct HTML for inserting an image?",
    options: [
      "<img src='image.gif' alt='MyImage'>",
      "<image src='image.gif' alt='MyImage'>",
      "<img alt='MyImage'>image.gif</img>",
      "<img alt='MyImage' src='image.gif'>",
    ],
    answer: "<img src='image.gif' alt='MyImage'>",
  },
  {
    question: "How to write comments in HTML?",
    options: [
      "<!-This is a comment->",
      "//This is a comment",
      "<--This is a comment-->",
      "<!This is a comment!>",
    ],
    answer: "<--This is a comment-->",
  },
  {
    question: "What is the correct HTML for inserting a background image?",
    options: [
      "<background img='background.gif'>",
      "<body bg='background.gif'>",
      "<body style='background-image:url(background.gif)'>",
      "<img src='background.gif' background>",
    ],
    answer: "<body style='background-image:url(background.gif)'>",
  },
  {
    question: "An <iframe> is used to display a web page within a web page.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "HTML comments start with <!-- and end with -->.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "How can you make a numbered list?",
    options: ["<list>", "<ol>", "<ul>", "<dl>"],
    answer: "<ol>",
  },
  {
    question: "How can you make a bulleted list?",
    options: ["<list>", "<ul>", "<ol>", "<dl>"],
    answer: "<ul>",
  },
  {
    question: "What is the correct HTML for inserting a background color?",
    options: [
      "<background>yellow</background>",
      "<body style='background-color:yellow;'>",
      "<bg color='yellow'>",
      "<body bg='yellow'>",
    ],
    answer: "<body style='background-color:yellow;'>",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a href='http://www.example.com'>Example</a>",
      "<link>http://www.example.com</link>",
      "<a url='http://www.example.com'>Example</a>",
      "<a>http://www.example.com</a>",
    ],
    answer: "<a href='http://www.example.com'>Example</a>",
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["*", "^", "/", "<"],
    answer: "/",
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    options: [
      "<a href='url' target='_blank'>",
      "<a href='url' new>",
      "<a href='url' target='new'>",
      "<a href='url' window>",
    ],
    answer: "<a href='url' target='_blank'>",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<list>", "<ol>", "<dl>", "<ul>"],
    answer: "<ul>",
  },
  {
    question: "What is the correct HTML for inserting an image?",
    options: [
      "<img src='image.jpg' alt='Description'>",
      "<image src='image.jpg' alt='Description'>",
      "<img link='image.jpg' alt='Description'>",
      "<img url='image.jpg' alt='Description'>",
    ],
    answer: "<img src='image.jpg' alt='Description'>",
  },
  // CSS Questions
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    options: [
      "h1 {background-color: #FFFFFF;}",
      "h1.all {background-color: #FFFFFF;}",
      "all.h1 {background-color: #FFFFFF;}",
      "h1 {bg-color: #FFFFFF;}",
    ],
    answer: "h1 {background-color: #FFFFFF;}",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-size", "text-style", "font-style"],
    answer: "font-size",
  },
  {
    question:
      "How do you make each word in a text start with a capital letter?",
    options: [
      "text-style: capitalize",
      "text-transform: capitalize",
      "transform: capitalize",
      "style: capitalize",
    ],
    answer: "text-transform: capitalize",
  },
  {
    question:
      "What is the correct CSS syntax for making all the <p> elements bold?",
    options: [
      "p {font-weight: bold;}",
      "p {text-weight: bold;}",
      "p {style: bold;}",
      "p {font: bold;}",
    ],
    answer: "p {font-weight: bold;}",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {decoration: no-underline;}",
      "a {text-decoration: none;}",
      "a {underline: none;}",
      "a {text-decoration: no-underline;}",
    ],
    answer: "a {text-decoration: none;}",
  },
  {
    question:
      "Which CSS property is used to change the background color of an element?",
    options: ["bgcolor", "background-color", "color", "bg-color"],
    answer: "background-color",
  },
  {
    question: "How do you change the text color of an element?",
    options: [
      "color: red;",
      "text-color: red;",
      "font-color: red;",
      "text: red;",
    ],
    answer: "color: red;",
  },
  {
    question: "Which CSS property is used to change the font of an element?",
    options: ["font-family", "font", "text-style", "font-style"],
    answer: "font-family",
  },
  {
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list-type: square;",
      "list-style-type: square;",
      "list: square;",
      "style-type: square;",
    ],
    answer: "list-style-type: square;",
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    answer: "#demo",
  },
  {
    question: "How do you group selectors?",
    options: [
      "Separate each selector with a comma",
      "Separate each selector with a plus sign (+)",
      "Separate each selector with a space",
      "Separate each selector with a colon (:)",
    ],
    answer: "Separate each selector with a comma",
  },
  {
    question: "What is the default value of the position property?",
    options: ["static", "relative", "fixed", "absolute"],
    answer: "static",
  },
  {
    question:
      "Which CSS property is used to control the text size of an element relative to the normal text?",
    options: ["text-height", "text-size", "font-style", "font-size"],
    answer: "font-size",
  },
  {
    question:
      "How do you make a list that lists its items horizontally instead of vertically?",
    options: [
      "list-style-type: horizontal;",
      "list: horizontal;",
      "list-direction: horizontal;",
      "display: inline;",
    ],
    answer: "display: inline;",
  },
  {
    question: "How do you make a cell span across multiple columns in a table?",
    options: ["colspan", "rowspan", "span", "merge"],
    answer: "colspan",
  },
  {
    question: "How do you make the text bold?",
    options: [
      "text: bold;",
      "font-style: bold;",
      "font-weight: bold;",
      "font: bold;",
    ],
    answer: "font-weight: bold;",
  },
  {
    question:
      "Which CSS property is used to change the left margin of an element?",
    options: ["margin-left", "padding-left", "indent-left", "left-margin"],
    answer: "margin-left",
  },
  {
    question: "How do you make a border around all sides of a div?",
    options: [
      "border-all: 1px solid black;",
      "border: 1px solid black;",
      "border-style: solid;",
      "border-all: black;",
    ],
    answer: "border: 1px solid black;",
  },
  {
    question: "How do you add a background color for the whole page?",
    options: [
      "body {background-color: #FFFFFF;}",
      "body-color: #FFFFFF;",
      "body-color: #FFF;",
      "background: #FFFFFF;",
    ],
    answer: "body {background-color: #FFFFFF;}",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "font-color", "text-color", "font-style"],
    answer: "color",
  },
  {
    question: "How do you make a list that lists its items with circles?",
    options: [
      "list: circle;",
      "list-type: circle;",
      "list-style-type: circle;",
      "style-type: circle;",
    ],
    answer: "list-style-type: circle;",
  },
  {
    question:
      "Which CSS property is used to change the font size of an element?",
    options: ["font-size", "text-size", "font-style", "size"],
    answer: "font-size",
  },
  {
    question: "How do you make a text italic?",
    options: [
      "font: italic;",
      "font-style: italic;",
      "text-style: italic;",
      "style: italic;",
    ],
    answer: "font-style: italic;",
  },
  {
    question:
      "How do you add a background color for only the left border of an element?",
    options: [
      "border-left-color: red;",
      "border-left-style: solid;",
      "border-color-left: red;",
      "left-border-color: red;",
    ],
    answer: "border-left-color: red;",
  },
  {
    question: "How do you add a shadow to text?",
    options: [
      "text-shadow: 2px 2px #FF0000;",
      "shadow: 2px 2px #FF0000;",
      "text: shadow 2px 2px #FF0000;",
      "font-shadow: 2px 2px #FF0000;",
    ],
    answer: "text-shadow: 2px 2px #FF0000;",
  },
  {
    question:
      "How do you make a border around all sides of a div that is 2 pixels thick and red?",
    options: [
      "border: 2px red solid;",
      "border-all: 2px red solid;",
      "border-style: solid;",
      "border-width: 2px; border-color: red;",
    ],
    answer: "border: 2px red solid;",
  },
  {
    question: "How do you make a rounded corner?",
    options: [
      "corner: 5px;",
      "border-radius: 5px;",
      "round: 5px;",
      "radius: 5px;",
    ],
    answer: "border-radius: 5px;",
  },
  {
    question: "How do you align text to the center of a page?",
    options: [
      "text-align: center;",
      "align: center;",
      "text-position: center;",
      "position: center;",
    ],
    answer: "text-align: center;",
  },
  {
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list-type: square;",
      "list-style-type: square;",
      "list: square;",
      "style-type: square;",
    ],
    answer: "list-style-type: square;",
  },
  {
    question: "How do you make a list that lists its items with images?",
    options: [
      "list-style-image: url('image.jpg');",
      "list-image: url('image.jpg');",
      "image-list: url('image.jpg');",
      "style-image: url('image.jpg');",
    ],
    answer: "list-style-image: url('image.jpg');",
  },
  {
    question: "How do you make a list that lists its items with circles?",
    options: [
      "list: circle;",
      "list-type: circle;",
      "list-style-type: circle;",
      "style-type: circle;",
    ],
    answer: "list-style-type: circle;",
  },
  {
    question: "How do you make a list that lists its items with Roman numbers?",
    options: [
      "list-style-type: upper-roman;",
      "list-type: upper-roman;",
      "list: upper-roman;",
      "style-type: upper-roman;",
    ],
    answer: "list-style-type: upper-roman;",
  },
  // JavaScript Questions
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<script>", "<scripting>", "<javascript>"],
    answer: "<script>",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    options: [
      "document.getElementByName('p').innerHTML = 'Hello World!';",
      "document.getElement('p').innerHTML = 'Hello World!';",
      "#demo.innerHTML = 'Hello World!';",
      "document.getElementById('demo').innerHTML = 'Hello World!';",
    ],
    answer: "document.getElementById('demo').innerHTML = 'Hello World!';",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "The <head> section",
      "The <body> section",
      "Both the <head> section and the <body> section are correct",
      "The <footer> section",
    ],
    answer: "Both the <head> section and the <body> section are correct",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>",
    ],
    answer: "<script src='xxx.js'>",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');",
      "msg('Hello World');",
    ],
    answer: "alert('Hello World');",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "function => myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call myFunction()",
      "call function myFunction()",
      "myFunction()",
      "function myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i = 5", "if (i == 5)", "if i == 5 then"],
    answer: "if (i == 5)",
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if i =! 5 then", "if (i != 5)", "if (i <> 5)", "if i <> 5"],
    answer: "if (i != 5)",
  },

  {
    question: "What does the 'typeof' operator return?",
    options: ["Number", "String", "Object", "Undefined"],
    answer: "String",
  },
  {
    question: "What does the 'isNaN' function do?",
    options: [
      "Returns true if the argument is not a number",
      "Returns true if the argument is a number",
      "Returns true if the argument is NaN",
      "Returns true if the argument is a string",
    ],
    answer: "Returns true if the argument is NaN",
  },
  {
    question: "Which method is used to add an item to the end of an array?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    answer: ".push()",
  },
  {
    question: "What is the result of the expression '2' + 2?",
    options: ["4", "22", "Error", "Undefined"],
    answer: "22",
  },
  {
    question: "Which loop is used to iterate over the properties of an object?",
    options: ["for loop", "while loop", "do...while loop", "for...in loop"],
    answer: "for...in loop",
  },
  {
    question: "What is the purpose of the 'continue' statement in a loop?",
    options: [
      "To exit the loop",
      "To skip the current iteration and continue with the next iteration",
      "To skip the next iteration and continue with the current iteration",
      "To pause the loop",
    ],
    answer:
      "To skip the current iteration and continue with the next iteration",
  },
  {
    question: "What does the 'slice' method do?",
    options: [
      "Returns a new array with a portion of the array selected",
      "Removes the last element from an array and returns it",
      "Adds one or more elements to the beginning of an array",
      "Sorts the elements of an array",
    ],
    answer: "Returns a new array with a portion of the array selected",
  },
  {
    question:
      "What is the difference between '==' and '===' operators in JavaScript?",
    options: [
      "'==' is used for assignment, '===' is used for comparison",
      "'==' is used for loose equality, '===' is used for strict equality",
      "'==' is used for comparison, '===' is used for assignment",
      "'==' is used for strict equality, '===' is used for loose equality",
    ],
    answer:
      "'==' is used for loose equality, '===' is used for strict equality",
  },
  {
    question: "Which method is used to remove the last item from an array?",
    options: [".pop()", ".push()", ".shift()", ".unshift()"],
    answer: ".pop()",
  },
  {
    question: "What does the 'map' method do?",
    options: [
      "Creates a new array with the results of calling a provided function on every element in the array",
      "Checks if all elements in an array pass a test",
      "Creates a new array with all elements that pass a test",
      "Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value",
    ],
    answer:
      "Creates a new array with the results of calling a provided function on every element in the array",
  },
  {
    question: "What is the result of the expression '5' == 5?",
    options: ["true", "false", "undefined", "null"],
    answer: "true",
  },
  // Add more questions as needed...

  // Total: 100 questions
];
const hardQues = [
  // HTML Questions
  {
    question: "What is the purpose of the `defer` attribute in a script tag?",
    options: [
      "It specifies that the script should be executed after the page has been parsed",
      "It specifies that the script should be executed immediately",
      "It specifies that the script should be deferred until the page has been loaded",
      "It specifies that the script should be deferred until the page has been fully rendered",
    ],
    answer:
      "It specifies that the script should be executed after the page has been parsed",
  },
  {
    question: "How can you make a checkbox checked by default?",
    options: [
      "<input type='checkbox' checked>",
      "<input type='checkbox' selected>",
      "<input type='checkbox' defaultChecked>",
      "<input type='checkbox' checked='true'>",
    ],
    answer: "<input type='checkbox' checked>",
  },
  {
    question: "What is the purpose of the `z-index` property in CSS?",
    options: [
      "It specifies the stack order of an element",
      "It specifies the vertical alignment of an element",
      "It specifies the horizontal alignment of an element",
      "It specifies the size of an element",
    ],
    answer: "It specifies the stack order of an element",
  },
  {
    question: "What is the purpose of the `visibility` property in CSS?",
    options: [
      "It specifies whether an element is visible or hidden",
      "It specifies the opacity of an element",
      "It specifies the display behavior of an element",
      "It specifies the position of an element",
    ],
    answer: "It specifies whether an element is visible or hidden",
  },
  {
    question: "What is the purpose of the `content` property in CSS?",
    options: [
      "It is used to insert generated content",
      "It is used to set the text content of an element",
      "It is used to set the background image of an element",
      "It is used to set the color of an element",
    ],
    answer: "It is used to insert generated content",
  },
  {
    question: "How can you make a text input field read-only?",
    options: [
      "<input type='text' readonly>",
      "<input type='text' readOnly>",
      "<input type='text' readonly='true'>",
      "<input type='text' readOnly='readOnly'>",
    ],
    answer: "<input type='text' readonly>",
  },
  {
    question: "What is the purpose of the `flex-wrap` property in CSS?",
    options: [
      "It specifies whether the flex items should wrap or not",
      "It specifies the direction of the flex container",
      "It specifies the alignment of the flex items",
      "It specifies the size of the flex items",
    ],
    answer: "It specifies whether the flex items should wrap or not",
  },
  {
    question: "What is the purpose of the `pointer-events` property in CSS?",
    options: [
      "It specifies whether an element can be the target of pointer events",
      "It specifies the cursor to be displayed when the mouse pointer is over an element",
      "It specifies the visibility of the mouse pointer",
      "It specifies the behavior of the element when clicked",
    ],
    answer:
      "It specifies whether an element can be the target of pointer events",
  },
  {
    question: "What is the purpose of the `unicode-bidi` property in CSS?",
    options: [
      "It specifies the level of embedding with respect to the bidirectional algorithm",
      "It specifies whether an element is displayed right-to-left or left-to-right",
      "It specifies the alignment of the text in an element",
      "It specifies the direction of the text flow in an element",
    ],
    answer:
      "It specifies the level of embedding with respect to the bidirectional algorithm",
  },
  {
    question: "What is the purpose of the `orphans` property in CSS?",
    options: [
      "It specifies the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element",
      "It specifies the minimum number of lines that must be left at the top of a page when a page break occurs inside an element",
      "It specifies the maximum number of lines that can be left at the bottom of a page when a page break occurs inside an element",
      "It specifies the maximum number of lines that can be left at the top of a page when a page break occurs inside an element",
    ],
    answer:
      "It specifies the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element",
  },
  // CSS Questions
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    options: [
      "h1 {background-color: #FFFFFF;}",
      "h1.all {background-color: #FFFFFF;}",
      "all.h1 {background-color: #FFFFFF;}",
      "h1 {bg-color: #FFFFFF;}",
    ],
    answer: "h1 {background-color: #FFFFFF;}",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-size", "text-style", "font-style"],
    answer: "font-size",
  },
  {
    question:
      "How do you make each word in a text start with a capital letter?",
    options: [
      "text-style: capitalize",
      "text-transform: capitalize",
      "transform: capitalize",
      "style: capitalize",
    ],
    answer: "text-transform: capitalize",
  },
  {
    question:
      "What is the correct CSS syntax for making all the <p> elements bold?",
    options: [
      "p {font-weight: bold;}",
      "p {text-weight: bold;}",
      "p {style: bold;}",
      "p {font: bold;}",
    ],
    answer: "p {font-weight: bold;}",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {decoration: no-underline;}",
      "a {text-decoration: none;}",
      "a {underline: none;}",
      "a {text-decoration: no-underline;}",
    ],
    answer: "a {text-decoration: none;}",
  },
  {
    question:
      "Which CSS property is used to change the background color of an element?",
    options: ["bgcolor", "background-color", "color", "bg-color"],
    answer: "background-color",
  },
  {
    question: "How do you change the text color of an element?",
    options: [
      "color: red;",
      "text-color: red;",
      "font-color: red;",
      "text: red;",
    ],
    answer: "color: red;",
  },
  {
    question: "Which CSS property is used to change the font of an element?",
    options: ["font-family", "font", "text-style", "font-style"],
    answer: "font-family",
  },
  {
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list-type: square;",
      "list-style-type: square;",
      "list: square;",
      "style-type: square;",
    ],
    answer: "list-style-type: square;",
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    answer: "#demo",
  },
  {
    question: "How do you group selectors?",
    options: [
      "Separate each selector with a comma",
      "Separate each selector with a plus sign (+)",
      "Separate each selector with a space",
      "Separate each selector with a colon (:)",
    ],
    answer: "Separate each selector with a comma",
  },
  {
    question: "What is the default value of the position property?",
    options: ["static", "relative", "fixed", "absolute"],
    answer: "static",
  },
  {
    question:
      "Which CSS property is used to control the text size of an element relative to the normal text?",
    options: ["text-height", "text-size", "font-style", "font-size"],
    answer: "font-size",
  },
  {
    question:
      "How do you make a list that lists its items horizontally instead of vertically?",
    options: [
      "list-style-type: horizontal;",
      "list: horizontal;",
      "list-direction: horizontal;",
      "display: inline;",
    ],
    answer: "display: inline;",
  },
  {
    question: "How do you make a cell span across multiple columns in a table?",
    options: ["colspan", "rowspan", "span", "merge"],
    answer: "colspan",
  },
  {
    question: "How do you make the text bold?",
    options: [
      "text: bold;",
      "font-style: bold;",
      "font-weight: bold;",
      "font: bold;",
    ],
    answer: "font-weight: bold;",
  },
  {
    question:
      "Which CSS property is used to change the left margin of an element?",
    options: ["margin-left", "padding-left", "indent-left", "left-margin"],
    answer: "margin-left",
  },
  {
    question: "How do you make a border around all sides of a div?",
    options: [
      "border-all: 1px solid black;",
      "border: 1px solid black;",
      "border-style: solid;",
      "border-all: black;",
    ],
    answer: "border: 1px solid black;",
  },
  {
    question: "How do you add a background color for the whole page?",
    options: [
      "body {background-color: #FFFFFF;}",
      "body-color: #FFFFFF;",
      "body-color: #FFF;",
      "background: #FFFFFF;",
    ],
    answer: "body {background-color: #FFFFFF;}",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "font-color", "text-color", "font-style"],
    answer: "color",
  },
  {
    question: "How do you make a list that lists its items with circles?",
    options: [
      "list: circle;",
      "list-style-type: circle;",
      "list: circle;",
      "style-type: circle;",
    ],
    answer: "list-style-type: circle;",
  },
  {
    question:
      "Which CSS property is used to change the font size of an element?",
    options: ["font-size", "text-size", "font-style", "size"],
    answer: "font-size",
  },
  {
    question: "How do you make a text italic?",
    options: [
      "font: italic;",
      "font-style: italic;",
      "text-style: italic;",
      "style: italic;",
    ],
    answer: "font-style: italic;",
  },
  {
    question:
      "How do you add a background color for only the left border of an element?",
    options: [
      "border-left-color: red;",
      "border-left-style: solid;",
      "border-color-left: red;",
      "left-border-color: red;",
    ],
    answer: "border-left-color: red;",
  },
  {
    question: "How do you add a shadow to text?",
    options: [
      "text-shadow: 2px 2px #FF0000;",
      "shadow: 2px 2px #FF0000;",
      "text: shadow 2px 2px #FF0000;",
      "font-shadow: 2px 2px #FF0000;",
    ],
    answer: "text-shadow: 2px 2px #FF0000;",
  },
  {
    question:
      "How do you make a border around all sides of a div that is 2 pixels thick and red?",
    options: [
      "border: 2px red solid;",
      "border-all: 2px red solid;",
      "border-style: solid;",
      "border-width: 2px; border-color: red;",
    ],
    answer: "border: 2px red solid;",
  },
  {
    question: "How do you make a rounded corner?",
    options: [
      "corner: 5px;",
      "border-radius: 5px;",
      "round: 5px;",
      "radius: 5px;",
    ],
    answer: "border-radius: 5px;",
  },
  {
    question: "How do you align text to the center of a page?",
    options: [
      "text-align: center;",
      "align: center;",
      "text-position: center;",
      "position: center;",
    ],
    answer: "text-align: center;",
  },
  {
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list-type: square;",
      "list-style-type: square;",
      "list: square;",
      "style-type: square;",
    ],
    answer: "list-style-type: square;",
  },
  {
    question: "How do you make a list that lists its items with images?",
    options: [
      "list-style-image: url('image.jpg');",
      "list-image: url('image.jpg');",
      "image-list: url('image.jpg');",
      "style-image: url('image.jpg');",
    ],
    answer: "list-style-image: url('image.jpg');",
  },
  {
    question: "How do you make a list that lists its items with circles?",
    options: [
      "list: circle;",
      "list-type: circle;",
      "list-style-type: circle;",
      "style-type: circle;",
    ],
    answer: "list-style-type: circle;",
  },
  {
    question: "How do you make a list that lists its items with Roman numbers?",
    options: [
      "list-style-type: upper-roman;",
      "list-type: upper-roman;",
      "list: upper-roman;",
      "style-type: upper-roman;",
    ],
    answer: "list-style-type: upper-roman;",
  },
  // JavaScript Questions
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<script>", "<scripting>", "<javascript>"],
    answer: "<script>",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    options: [
      "document.getElementByName('p').innerHTML = 'Hello World!';",
      "document.getElement('p').innerHTML = 'Hello World!';",
      "#demo.innerHTML = 'Hello World!';",
      "document.getElementById('demo').innerHTML = 'Hello World!';",
    ],
    answer: "document.getElementById('demo').innerHTML = 'Hello World!';",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "The <head> section",
      "The <body> section",
      "Both the <head> section and the <body> section are correct",
      "The <footer> section",
    ],
    answer: "Both the <head> section and the <body> section are correct",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script file='xxx.js'>",
    ],
    answer: "<script src='xxx.js'>",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');",
      "msg('Hello World');",
    ],
    answer: "alert('Hello World');",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "function => myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call myFunction()",
      "call function myFunction()",
      "myFunction()",
      "function myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i = 5", "if (i == 5)", "if i == 5 then"],
    answer: "if (i == 5)",
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if i =! 5 then", "if (i != 5)", "if (i <> 5)", "if i <> 5"],
    answer: "if (i != 5)",
  },
  {
    question: "How to round the number 7.25, to the nearest integer?",
    options: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "rnd(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    options: [
      "Math.max(x, y)",
      "Math.ceil(x, y)",
      "Math.floor(x, y)",
      "ceil(x, y)",
    ],
    answer: "Math.max(x, y)",
  },
  {
    question:
      "What is the correct JavaScript syntax for opening a new window called 'w2'?",
    options: [
      "w2 = window.new('http://www.example.com');",
      "w2 = window.open('http://www.example.com');",
      "w2 = window.create('http://www.example.com');",
      "w2 = window.openNew('http://www.example.com');",
    ],
    answer: "w2 = window.open('http://www.example.com');",
  },
  {
    question: "JavaScript is the same as Java.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "How can you detect the client's browser name?",
    options: [
      "navigator.appName",
      "client.browserName",
      "browser.name",
      "navigator.name",
    ],
    answer: "navigator.appName",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseclick", "onmouseover", "onchange", "onclick"],
    answer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "v carName;",
      "variable carName;",
      "var carName;",
      "v = carName;",
    ],
    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "-", "x"],
    answer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "true",
  },
  {
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "What will the following code return: Boolean(0)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["rnd(7.25)", "Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    answer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "variable carName;",
      "v carName;",
      "var carName;",
      "v = carName;",
    ],
    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "x", "*", "-"],
    answer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "true",
  },
  {
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "What will the following code return: Boolean(0)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    answer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "v = carName;",
      "variable carName;",
      "v carName;",
      "var carName;",
    ],
    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "-", "x"],
    answer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "true",
  },
  {
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "What will the following code return: Boolean(0)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    answer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "v = carName;",
      "variable carName;",
      "v carName;",
      "var carName;",
    ],
    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "-", "x"],
    answer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "true",
  },
  {
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "What will the following code return: Boolean(0)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    answer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "v = carName;",
      "variable carName;",
      "v carName;",
      "var carName;",
    ],
    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "-", "x"],
    answer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "true",
  },
  {
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "What will the following code return: Boolean(0)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    answer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "v = carName;",
      "variable carName;",
      "v carName;",
      "var carName;",
    ],
    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "-", "x"],
    answer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "true",
  },
  {
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "What will the following code return: Boolean(0)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "false",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
    answer: "Math.round(7.25)",
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
  document.querySelector("#hard").innerText = "Hard";
  let currentQuestionIndex = 0;
  let score = 0;

  function displayQuestion(index) {
    let hardRand = Math.floor(Math.random() * 101); // Generate a random index between 0 and 9

    ques.innerText = hardQues[hardRand].question;
    let answeredCorrectly = false;

    opt.forEach((ele, i) => {
      ele.innerText = hardQues[hardRand].options[i];
      ele.style.backgroundColor = "";
      ele.style.cursor = "pointer";

      ele.addEventListener("click", () => {
        if (!answeredCorrectly) {
          if (ele.innerText === hardQues[hardRand].answer) {
            score++;
            localStorage.setItem("score", score);
            ele.style.backgroundColor = "greenyellow";
            new Audio("Audio/right.mp3").play();
          } else {
            ele.style.backgroundColor = "red";
            opt.forEach((optElement) => {
              if (optElement.innerText === hardQues[hardRand].answer) {
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
    if (currentQuestionIndex < 10) {
      displayQuestion(currentQuestionIndex);
    } else {
      curr.innerText = 10;
      location.href = "result.html"; // Directly switch to result.html
    }
  });
} else if (localStorage.userDifficulty === "medium") {
  document.querySelector("#hard").innerText = "Medium";
  let currentQuestionIndex = 0;
  let score = 0;

  function displayQuestion(index) {
    let mediumRand = Math.floor(Math.random() * 101); // Generate a random index between 0 and 9

    ques.innerText = mediumQues[mediumRand].question;
    let answeredCorrectly = false;

    opt.forEach((ele, i) => {
      ele.innerText = mediumQues[mediumRand].options[i];
      ele.style.backgroundColor = "";
      ele.style.cursor = "pointer";

      ele.addEventListener("click", () => {
        if (!answeredCorrectly) {
          if (ele.innerText === mediumQues[mediumRand].answer) {
            score++;
            localStorage.setItem("score", score);
            ele.style.backgroundColor = "greenyellow";
            new Audio("Audio/right.mp3").play();
          } else {
            ele.style.backgroundColor = "red";
            opt.forEach((optElement) => {
              if (optElement.innerText === mediumQues[mediumRand].answer) {
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
    if (currentQuestionIndex < 10) {
      displayQuestion(currentQuestionIndex);
    } else {
      curr.innerText = 10;
      location.href = "result.html"; // Directly switch to result.html
    }
  });
} else {
  document.querySelector("#hard").innerText = "Easy";
  let currentQuestionIndex = 0;
  let score = 0;

  function displayQuestion(index) {
    let easyRand = Math.floor(Math.random() * 101); // Generate a random index between 0 and 9

    ques.innerText = easyQues[easyRand].question;
    let answeredCorrectly = false;

    opt.forEach((ele, i) => {
      ele.innerText = easyQues[easyRand].options[i];
      ele.style.backgroundColor = "";
      ele.style.cursor = "pointer";

      ele.addEventListener("click", () => {
        if (!answeredCorrectly) {
          if (ele.innerText === easyQues[easyRand].answer) {
            score++;
            localStorage.setItem("score", score);
            ele.style.backgroundColor = "greenyellow";
            new Audio("Audio/right.mp3").play();
          } else {
            ele.style.backgroundColor = "red";
            opt.forEach((optElement) => {
              if (optElement.innerText === easyQues[easyRand].answer) {
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
    if (currentQuestionIndex < 10) {
      displayQuestion(currentQuestionIndex);
    } else {
      curr.innerText = 10;
      location.href = "result.html"; // Directly switch to result.html
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
