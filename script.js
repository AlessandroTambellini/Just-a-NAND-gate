const circle_a = document.querySelector("#btn-wire-a .slide-circle");
const circle_b = document.querySelector("#btn-wire-b .slide-circle");
const button_a = document.querySelector("#btn-wire-a");
const wire_a = document.querySelector("#wire-a");
const wire_b = document.querySelector("#wire-b");
const wire_c = document.querySelector("#wire-c");

let a_toLeft = false;
let b_toLeft = false;

[circle_a, circle_b].forEach((circle) => {
  circle.addEventListener("click", (e) => {
    slideCircle(e.target);
    changeWireColor(e.target);

    circle === circle_a ? (a_toLeft = !a_toLeft) : (b_toLeft = !b_toLeft);
    if (a_toLeft && b_toLeft) {
      wire_c.style.backgroundColor = "hsl(29, 57%, 46%)";
    } else {
      wire_c.style.backgroundColor = "yellow";
    }
  });
});

const leftDistance = button_a.clientWidth - circle_a.offsetWidth;
function slideCircle(circle) {
  if (circle === circle_a) {
    if (a_toLeft) {
      circle.style.left = "0";
    } else {
      circle.style.left = `${leftDistance}px`;
    }
    return;
  }
  b_toLeft
    ? (circle.style.left = "0")
    : (circle.style.left = `${leftDistance}px`);
}

function changeWireColor(circle) {
  if (circle === circle_a) {
    a_toLeft
      ? (wire_a.style.backgroundColor = "hsl(29, 57%, 46%)")
      : (wire_a.style.backgroundColor = "yellow");
  } else {
    b_toLeft
      ? (wire_b.style.backgroundColor = "hsl(29, 57%, 46%)")
      : (wire_b.style.backgroundColor = "yellow");
  }
}
