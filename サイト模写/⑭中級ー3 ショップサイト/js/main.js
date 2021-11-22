"use strict;"
{
  const line = document.getElementById("line");
  const nav = document.getElementById("nav");

  line.addEventListener("click", () => {
    line.classList.toggle("open");
    nav.classList.toggle("slide");
  });
}