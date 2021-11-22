"use strict";
{

  const open = document.getElementById("open-btn");
  const close = document.getElementById("close-btn");
  const menu = document.getElementById("open-menu");

  open.addEventListener("click", () => {
    menu.classList.add("opened");
    open.classList.add("hide");
  });
  close.addEventListener("click", () => {
    menu.classList.remove("opened");
    open.classList.remove("hide");
  });
}