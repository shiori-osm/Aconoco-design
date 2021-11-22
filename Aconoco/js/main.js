"use strict";

{
  // ローディング画面
  window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }

  // ★animation-target スクロール時に取得↓
  const targetElement = document.querySelectorAll(".animation-target");
    // スクロールするたびに実行
    document.addEventListener("scroll", function () {
      for (let i = 0; i < targetElement.length; i++){
        // ブラウザの上から要素までの距離を取得 + 要素の6割の高さで実行
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6
        if (window.innerHeight > getElementDistance) {
          targetElement[i].classList.add("show");
        }
      }
    });

  // font-animation 1文字ずつアニメーション
  const animationTargetElements = document.querySelectorAll(".font-animation");
  //  アニメーションさせたいところを取得
  for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement = animationTargetElements[i];
    const texts = targetElement.textContent;
    const textsArray = [];
    // まずはtextを空に
    targetElement.textContent = "";
  
    // ↓文字列文のfor文
    // １文字ずつ取得 spanで囲む delayで遅らせる
    for (let j = 0; j < texts.split("").length; j++){
      textsArray.push('<span style="animation-delay:'+( j * 0.2)+'s;">' + texts.split("")[j] + '</span>');
    }
    // HTMLに格納
    for (let k = 0; k < textsArray.length; k++){
      targetElement.innerHTML += textsArray[k];
    }
  } //1文字ずつアニメーション 閉じタグ


  // ハンバーガーメニュ
  const openBtn = document.getElementById("open-btn");
  const closeBtn = document.getElementById("close-btn");
  const menu = document.getElementById("open-menu");

  openBtn.addEventListener("click", () => {
    menu.classList.add("open");
    openBtn.classList.add("none");
  });
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    openBtn.classList.remove("none");
  });








} //js