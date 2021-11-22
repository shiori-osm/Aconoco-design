"use strict";
{
  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");

  menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    nav.classList.toggle("slide");
  });
}

{
  const modalopen = document.getElementById("modalopen");
  const modalmask = document.getEmelentById("modalmask");
  const modal = document.getElementById("modal");
  const close = document.getElementById("close");

  modalopen.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalmask.classList.remove("hidden");
  });
  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalmask.classList.add("hidden");
  });
  modalmask.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalmask.classList.add("hidden");
  });
}

