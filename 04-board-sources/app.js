window.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector("#board");
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  const SQUARES_NUMBERS = 450;

  for (let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", setColor);

    square.addEventListener("mouseleave", removeColor);

    board.append(square);
  }

  function setColor(e) {
    const element = e.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(e) {
    const element = e.target;
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #000`;
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
});
