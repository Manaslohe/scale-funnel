const main = document.getElementById("main");
const loaderCounter = document.getElementById("loader");
// Step 1: Sheets slide in
setTimeout(() => {
  main.classList.add("animate");
}, 500);
let count = 0;
var loaderInterval = setInterval(() => {
  if (count <= 100) {
    loaderCounter.textContent = `${count++}%`;
  } else {
    loaderCounter.style.opacity = 0;
  }
}, 26);

// Step 2: Website goes fullscreen AFTER sheets animation
setTimeout(() => {
  main.classList.add("fullscreen");
  // document.getElementsByClassName('animation-frame').style.display="none";
}, 2600); // 2s sheet animation + buffer
