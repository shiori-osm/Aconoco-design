"use strict";
{
  const button = document.getElementById("button");
  const nav = document.getElementById("nav");
  button.addEventListener("click", () => {
    nav.classList.toggle(".show");
  });
}