"use strict";

  // const score = 50 ;
  // const name = "taguchi";
  // if(score >= 50){
  //   if(name === "taguchi"){
  //     console.log("great!")
  //   }
  // }

  // const score = 60;
  // const name = "taguchi";

  // if(score >= 50 && name ==="taguchi"){
  //   console.log("goodjob!")
  // }

  // const signal = "red";

  // if (signal === "red"){
  //   console.log("stop!")
  // }else if(signal === "yellow"){
  //   console.log("causion!")
  // }else if (signal === "blue"){
  //   console.log("go!")
  // }

  // for(let i = 1; i <= 10; i++){
  //   // console.log("hello");
  //   // console.log("hello" + i);
  //   console.log(`hello ${i}`)
  // }


  // let hp = 100;
  
  // while(hp > 0){
  //   console.log(`${hp}HP LEFT`)
  //   hp -= 15;
  // }

  // let hp = -50;
  // do{
  //   console.log(`${hp}HP LEFT`)
  //   hp -= 15;
  // }while(hp > 0)

  // for(let i = 1; i <= 10; i++){
  //   console.log(i)
  // }
  // for(let i = 1; i <= 10; i ++){
  //   if(i === 8){
  //     break;
  //   }
  //   console.log(i)
  // }

  // function showAd(message){   //仮引数:とりあえず仮置きした引数
  //   console.log("----------")
  //   console.log(`----${message}------`)
  //   console.log("----------")
  // }

  // showAd("header ad");   //実引数：実際に表示されるから実引数
  // console.log("tom is great!")

  
  // console.log("bob is great!")
  // showAd("ad");
  // console.log("steve is great!")
  // showAd("footer ad");
  // console.log("rechard is great!")
  
  // sum(1, 2, 3);
  // sum(3, 4, 5);

  // function sum(a, b, c){
  //   return a + b + c;
  // }
  // const total = sum(1, 2, 3) + sum(3, 4, 5);
  // console.log(total);

  // const sum = (a, b, c) => a + b + c;

  // const total = sum(1, 2, 3) + sum(3,4,5);
  // console.log(total);

  // const scores=[80,90,40,70];
  // // console.log(`Score:${scores[0]}`)
  // // console.log(`Score:${scores[1]}`)
  // // console.log(`Score:${scores[2]}`)
  
  // for(let i = 0; i < scores.length; i++){
  //   console.log(`Score:${scores[i]}`)
  // }
  
  // const scores =[80,90,40,50];
  // scores.push(50,60); //80,90,40,50,50,60
  // scores.pop();//80,90,40,50,50
  // scores.unshift(30,40);//30,40,80,90,40,50,50
  // scores.shift();//40,80,90,40,50,50
  // console.log(scores);
  
  
  
  
  
  // const scores=[80,90,40,70];
  // for(let i = 0; i < scores.length; i++){
  //   console.log(`Score:${scores[i]}`);
  // scores.splice(1, 2, 100, 50);
  // console.log(scores);

// function sum(a,b,c){
//   return a+b+c;
// }
// sum(1,2,3);
// sum(3,4,5);

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total)

// const sum = function(a,b,c){
//   return a + b + c;
// }

// sum(1,2,3);
// sum(3,4,5);
// const total = sum(1,2,3)+sum(3,4,5);
// console.log(total);

// const double = function(a){
//   console.log(a*2);
// }

// double(12);

// const double = a => a * 2;
// console.log(double(12));



// function showAd(message){
//   console.log("---------");
//   console.log(`--- ${message} ----`);
//   console.log("---------");
// }

// showAd( "header ad");
// console.log("tom is good");
// console.log("sam is good");
// showAd("ad");

// console.log("jason is good");
// console.log("jacob is good");
// showAd("footer ad");

// const x = 2;

// function f(){
//   const x =1;
//   console.log(x);
// }
// f();
// console.log(x);

// const scores = [80,90,40,70];
// console.log(`Scores:${scores[0]}`);
// console.log(`Scores:${scores[1]}`);
// console.log(`Scores:${scores[2]}`);


// push 末尾に追加
// unshuft 先頭に追加
// pop 末尾から削除
// shuft 先頭から削除
// const scores = [80,90,40,70];
// scores .push(50,60);
// scores .unshift();

// for (let i = 0; i < scores.length; i++){
//   console.log(`Scores ${i}:${scores[i]}`);
// }

// const scores = [80,90,40,70];
// scores.splice(1,1,40,50);

// for(let i=0; i<scores.length; i++){
//   console.log(`Scores ${i}:${scores[i]}`);
// }

// const otherScores = [10,20];
// const scores = [80,90,40,70];

// console.log(scores, ...otherScores);

// const otherScores = [10,20];
// const scores = [80,90,40,70,...otherScores];

// function sum(a,b){
//   console.log(a + b);

// }
// sum(...scores);

// const scores = [80,90,40,70];

// const [a,b,...others] = scores

// console.log(a);
// console.log(b);
// console.log(others);

// let x= 30;
// let y =50;
// [x,y]=[y,x]

// console.log(x);
// console.log(y);


//  const scores=[80,90,40,70];
//   for (let i = 0; i < scores.length; i++){
//     console.log(`Score:${scores[i]}`)
//   }


//   scores.forEach((score) =>{
//     console.log(`Score:${score}`)
//   });

// const prices = [180,190,200];
// const updatedPrices = prices.map(price =>{
//   return price + 20;
// });
// console.log(updatedPrices);

// const numbers = [1,4,7,8,10];

// const evenNumbers = numbers.filter(number => {
//   if (number % 2 === 0){
//     return true;
//     }else{
//       return false;
//     }
//   });

// const numbers = [1,4,7,8,10];

// const evenNumbers = numbers.filter(number =>{
//   if(number % 2 === 0){
//     return true;
//   }else{
//     return false;
//   }
// });
// console.log(evenNumbers);

// const numbers = [1,4,7,8,10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// const point = [100,180];
// const point = {x:100,y:180,};
// console.log(point);

// const point = {
//   x:100,
//   y:180,
// };

// console.log(point.x);



// ★★★復習!!!★★★↓

// let price = 150;

// console.log(price * 140);
// console.log(price * 160);

// price = 170;


// const scores = [80,90,40];
// console.log(scores[1]);

// scores[1] = 40;

// console.log(scores[1]);

// console.log(scores.length);

// let price = 150;
// console.log(price*140);
// console.log(price*160);

// price = 170;
// console.log(price*140);
// console.log(price*160);

// console.log("5" * 3);
// console.log("5" - "3");
// console.log(parseInt("5",10)+3);

// const scores = [80,90,40];
// for (let i = 0; i < scores.length; i++){
//   console.log(`Scores ${i}: ${scores [i]}`);
// }

// const otherScores = [10,20];
// const scores = [80,90,40,70,...otherScores];

// console.log(scores);

// const scores = [80,90,40,70];
// const otherScores = [10,20];

// function sum(a,b){
//   console.log (a + b);
// }
// sum(...otherScores);

// const scores = [80,90,40,70];
// const [a,b,c,d] = scores;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// const scores = [80,90,40,70];

// const [a,b,...others] = scores;
// console.log(a);
// console.log(b);
// console.log(others);

// const scores = [80,90,40,70];

// for (let i = 0; i<scores.length; i++){
//   console.log(`Score ${i}: ${scores[i]}`);
// }

// const scores = [80,90,40,70];

// // scores.forEach(score =>{
// //   console.log(`Score:${score}`)
// // });

// scores.forEach((score,index) =>{
//   console.log(`Score${index}: ${score}`);
// });

// const prices = [180,190,200];

// const updatedPrices = prices.map(price=>{
//   return price + 20;
// });
// console.log(updatedPrices);

// const prices = [180,190,200];

// const updatedPrices = prices.map(price => price + 20);
// console.log(updatedPrices);

// const numbers = [1,4,7,8,10];

// const evenNumbers = numbers.filter(number=>{
//   if(number % 2 === 0){
//     return true;
//   }else{
//     return false;
//   }
// });
// console.log(evenNumbers);

// const evenNumbers=numbers.filter(number => number %2 === 0);
// console.log(evenNumbers);

// const point={
//   x:100,
//   y:180,
// };

// point.z = 120;
// delete point.y;
// console.log(point);

// const otherProps={
//   r:4,
//   color: "red",
// };

// const point={
//   x:100,
//   y:180,
//   ...otherProps,
// };

// const {x,r, ...others} = point;
// console.log(x);
// console.log(r);
// console.log(others);



// const x = 30;
// const y = 50;
// const points = [x,y];
// points.forEach(point=>{
//   console.log(point);
// });

// const t = "17:08:50";
// // console.log(d.join("/"));
// console.log(d.split(":"));

// const t = "17:08:50";

// const [hour,minute,second] = t.split(":");
// console.log(`hour : ${t.split(":")[0]}`);
// console.log(`minute : ${t.split(":")[1]}`);
// console.log(`second : ${t.split(":")[2]}`);

// const d = new Date();
// console.log(d);

// const d = new Date();
// // console.log(`${d.getMonth()+1}月${d.getDate()}日`);
// console.log(`${d.getMonth()+1}月`);
// console.log(`${d.getDate()}日`);
// console.log(`${d.getDay()+1}曜日`);
// console.log(`${d.getHours()}時`);
// console.log(`${d.getSeconds()}分`);
// console.log(`${d.getMinutes()}分`);
// console.log(`${d.getFullYear()}年`);

// function showTime(){
//   console.log(new Date);
//   let i = 0;
//   if(i > 2, i++){
//     clearInterval(intervalId);
//   }
// }
// const intervalId = setInterval(showTime,1000);

// let i = 0;

// function showTime(){
//   console.log(new Date());
//   i++;
//   if(i>3){
//     clearInterval(intervalId);
//   }
// }
// const intervalId = setInterval(showTime,1000);




// function leapYear(a){
//   if(a % 4 === 0 && a % 100 !== 0){
//     console.log("うるうどしです");
//   }else if(a % 400 === 0){
//     console.log("うるう年だお");
//   }else {
//     console.log("うるう年じゃないお");
//   }
// }


// leapYear(2021);


