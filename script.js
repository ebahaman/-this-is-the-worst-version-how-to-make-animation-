const block = document.querySelector("#block");
console.log(block.style);
var offset = 0;
setInterval(() => {
  offset += 50;
  block.style.left = offset + "px";
  if (offset < 100) {
    offset += 1;
    block.style.left = offset + "px";
  } //"this is the worst version how to make animation" (с)
}, 20);
