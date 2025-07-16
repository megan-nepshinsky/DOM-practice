//See, Think, Wonder
// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// <h2> Hi! </h2>
// <h3> Hello there </h3>
// <h4> Have a good day! </h4>
// `;

// Part 1 - Accessing/Changing/Adding 💻
// Accessing HTML

// var header = document.getElementById("welcome");
// console.log(header);

// var image_change = document.querySelector(".changePic");

// Changing HTML

// Adding HTML
// document.getElementById("app").innerHTML = ` <h1>bibbity bobbity boo</h1>
// <h3> Today is horse day at KWK Camp 2.3! </h3>
// <img src = "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg"
// alt = "horse" height = "100px">
// `;

// Part 2 - Events 📝

//Accessed the button within our HTML ▶️

var button = document.querySelector(".doorbell");
// console.log(button);

// Added an Event Listener 👂

button.addEventListener("click", ringChime);

// Added an Event Handler 👏

function ringChime() {
  alert("Ding Dong!");
  document.getElementById("app").innerHTML = ` <h1>bibbity bobbity boo</h1>
<h3> Today is horse day at KWK Camp 2.3! </h3>
<img src = "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg"
alt = "horse" height = "100px">
`;

  document.getElementById(
    "results"
  ).innerHTML = `<h1> Here are your results! </h1>`;
}
// Part 3 - CSS 🎨
var body = document.querySelector("body");
body.style.backgroundColor = "pink";

var header = document.querySelector("#welcome");
header.style.color = "#e3ff00";
