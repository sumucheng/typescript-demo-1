var div = document.createElement("div");
div.id = "demo";

document.body.appendChild(div);
let x = false;
let position = [0, 0];
div.onmousedown = e => {
  x = true;
  position = [e.clientX, e.clientY];
};

document.onmousemove = e => {
  if (x) {
    let top = parseInt(div.style.top!) || 0;
    let left = parseInt(div.style.left!) || 0;
    div.style.top = top + e.clientY - position[1] + "px";
    div.style.left = left + e.clientX - position[0] + "px";
    position = [e.clientX, e.clientY];
  }
};

document.onmouseup = e => {
  x = false;
};
