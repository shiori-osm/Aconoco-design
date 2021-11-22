"use strict";
{
  // 要素取得
  const dts = document.querySelectorAll("dt");

  // 複数の要素に指定するのでforeach
  // dtsの中の1つを(dt)として、それに対して｛
  dts.forEach(dt => {
    dt.addEventListener("click", () => {
      dt.parentNode.classList.toggle("appear");
    });
  });
}