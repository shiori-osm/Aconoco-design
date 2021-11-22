"use strict";
{
  const menu = document.querySelector("header-sp-menu");

  menu.addEventListener("click", () => {
    menu.classList.toggle("cross");
  });
}