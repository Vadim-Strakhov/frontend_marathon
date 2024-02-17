window.addEventListener("DOMContentLoaded", () => {
  const item = document.querySelector(".item");
  const placeholders = document.querySelectorAll(".placeholder");

  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);

  for (const placeholder of placeholders) {
    placeholder.addEventListener("dragover", dragover);
    placeholder.addEventListener("dragenter", dragenter);
    placeholder.addEventListener("dragleave", dragleave);
    placeholder.addEventListener("drop", dragdrop);
  }

  function dragstart(e) {
    e.target.classList.add("hold");
    setTimeout(() => e.target.classList.add("hide"), 0);
  }

  function dragend(e) {
    e.target.classList.remove("hold", "hide");
    // e.target.className = "item"; //_ способ через className
  }

  function dragover(e) {
    e.preventDefault();
    // console.log("drag over");
  }

  function dragenter(e) {
    e.target.classList.add("hovered");
    // console.log("drag enter");
  }

  function dragleave(e) {
    e.target.classList.remove("hovered");
    // console.log("drag leave");
  }

  function dragdrop(e) {
    e.target.classList.remove("hovered");
    e.target.append(item);
    // console.log("drag drop");
  }
});
