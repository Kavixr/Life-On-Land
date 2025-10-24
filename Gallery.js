// Background color functions
function setBgColor(color) {
  document.body.style.backgroundColor = color;
}
function randomBgColor() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Text color functions
function setTextColor(color) {
  document.body.style.color = color;
}
function randomTextColor() {
  document.body.style.color =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}
