"use strict";
// {
  
//   function update(){
//     document.querySelector("h1").textContent = "Changed!";
//   }
//   setTimeout(update,1000);
// }
// function update(){
//   document.getElementById("target").textContent="changed!";
// }
// setTimeout(update,1000);

// function update(){
//   document.querySelector("p").textContent="changed";
// }
// setTimeout(update,1000);
// function update(){
//   document.querySelectorAll("p").textContent = "Changed";
// }
// setTimeout(update,1000);

// function update(){
//   document.querySelectorAll("p")[1].textContent = "Changed";
// }
// setTimeout(update,1000);

// function update(){
//   document.querySelectorAll("p"), forEach((p,index)=>{
//     p.textContent = `${index}番目のpです！`;
//   });
// }
// function update(){
//   document.querySelectorAll("p").forEach((p,index)=>{
//     p.textContent = `${index} 番目のpです`;
//   });
// }
// setTimeout(update,1000);

// function update(){
//   document.getElementById("target").textContent = "Changed!";
// }
// setTimeout(update,1000);

// document.querySelector("button").addEventListener("click",()=>{
//   document.getElementById("target").textContent = "Changed!";

// });
// document.querySelector("button").addEventListener("click",()=>{
//   document.getElementById("target").textContent = "Changed!";
// });

// document.querySelector("button").addEventListener("click",()=>{
//   const item2 = document.createElement("li");
//   item2.textContent = "item2";

//   const ulNode = document.querySelector("ul");
//   ulNode.appendChild(item2);
  
// });

// document.querySelector("button").addEventListener("click",()=>{
//   const item2 = document.createElement("li");
//   item2.textContent = "item 2";

//   const ulNode =  document.querySelector("ul")
//   ulNode.appendChild(item2);
// });

// 2番目のliの前に0番目のliをコピー、挿入
// document.querySelector("button").addEventListener("click",()=>{
//   const item0 = document.querySelectorAll("li")[0];
//   const copy = item0.cloneNode(true);
//   const ulNode = document.querySelector("ul")
//   const item2 = document.querySelectorAll("li")[2];
//   ulNode.insertBefore(copy,item2);

// });
// 2番目のliの前に0番目のliをコピー、挿入
// document.querySelector("button").addEventListener("click",()=>{
//   const item0 = document.querySelectorAll("li")[0];
//   const copy = item0.cloneNode(true);

//   const item2 = document.querySelectorAll("li")[2];
//   const ulNode = document.querySelector("ul");
//   ulNode.insertBefore(copy,item2);
// });

// 2番目のliの前に0番目のliをコピー、挿入
// document.querySelector("button").addEventListener("click",()=>{
//   const item0 = document.querySelectorAll("li")[0];
//   const copy = item0.cloneNode(true);

//   const ulNode = document.querySelector("ul");
//   const item2 = document.querySelectorAll("li")[2];
//   ulNode.insertBefore(copy,item2);
// });

// item1削除
// document.querySelector("button").addEventListener("click",()=>{
//   const item1 = document.querySelectorAll("li")[1];
//   // item1.remove();
//   const ulNode = document.querySelector("ul");
//   ulNode.removeChild(item1);

// });
// 2番目のliの前に0番目のliをコピー、挿入
// document.querySelector("button").addEventListener("click",()=>{
//   const item0 = document.querySelectorAll("li")[0];
//   const copy = item0.cloneNode(false);
//   copy.textContent = "copy item 0";

//   const item2 = document.querySelectorAll("li")[2];
//   const ulNode = document.querySelector("ul");
//   ulNode.insertBefore(copy,item2);
// });

// ボタンを押したらulの中にliが追加
// document.querySelector("button").addEventListener("click",()=>{
//   const liNode = document.createElement("li");
//   const text = document.querySelector("input");
//   liNode.textContent = text.value;
//   const ulNode = document.querySelector("ul");
//   ulNode.appendChild(liNode);
//   text.value="";
//   text.focus();
// });

// input欄に入力してボタンを押したらulの中にliが追加
// document.querySelector("button").addEventListener("click",()=>{
//   const newLi = document.createElement("li");
//   const text = document.querySelector("input");
//   newLi.textContent = text.value;
//   const ulNode = document.querySelector("ul");
//   ulNode.appendChild(newLi);
// });


// document.querySelector("button").addEventListener("click",()=>{
//   const li = document.createElement("li");
//   const selectedColor = document.querySelector("select");
//   li.textContent = `${selectedColor.value} - ${selectedColor.selectedIndex}` ;
//   const ulNode = document.querySelector("ul");
//   ulNode.appendChild(li);

// });

// document.querySelector('button').addEventListener('dblclick', () => {
//   console.log('Double Clicked!');
// });
// document.addEventListener("mousemove", e => {
//   console.log(e.clientX,e.clientY);
// });

// const text = document.querySelector("textarea");

// text.addEventListener("focus",()=>{
//   console.log("focusされたよ");
// });
// text.addEventListener("blur",()=>{
//   console.log("focus外れたよ");
// });

// const text = document.querySelector("textarea");

// text.addEventListener("input",()=>{
//   console.log("input、入力されたよ");
// });
// text.addEventListener("change",()=>{
//   console.log("入力終わり、画面の外押されたよ");
// });

document.querySelector("form").addEventListener("submit",e=>{
  console.log("入力されたお！");
  e.preventDefault();
});