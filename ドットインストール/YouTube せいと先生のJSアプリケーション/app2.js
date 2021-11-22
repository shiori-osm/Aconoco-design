"use strict";
// 問題、選択肢、答えを定義
const quiz = [
  // 1問目
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ??',
    answers : [
      'スーパーファミコン',
      'プレステ2',
      'ニンテンドースイッチ',
      'ニンテンドーDS',
    ],
    correct : 'ニンテンドーDS'
  },
  //2問目
  {
    question: '糸井重里が企画にかかわった、任天堂の看板ゲームといえば??',
    answers : [
      'Mothor2',
      'スマブラ３',
      'スーパードンキーコング',
      '星のカービィ',
    ],
    correct : 'Mothor2'
  }, {
    question: 'ファイナルファンタジーIVの主人公の名前は??',
    answers : [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル',
    ],
    correct : 'セシル'
  }
]

// quizをwhile文にするための定義
let quizIndex = 0;
const quizLength = quiz.length;

// 全ボタンを$buttonと定義
const $button = document.getElementsByTagName('button');
// 最大数のbuttonを定義
const buttonLength = $button.length;

// 最後結果を出すための変数を用意
let score = 0;



//クイズを問題文と選択肢の定数（表面的にわかるところ）
const setupQuiz = () => {
  // 問題文を書き換えて
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  // ボタンの中身も書き換える
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

// let buttonIndex = 0;
// let buttonLength = $button.length;
// while (buttonIndex < buttonLength) {
//   $button[buttonIndex].textContent = answers[buttonIndex];
//   buttonIndex++;
// }
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];


// クリックされたら動く関数 clickHandler
// 正解不正解出して、次の問題に行く定義(quizIndex++;より下)
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解だよ～!!!");
    score++;
  } else {
    window.alert("不正解～ざんねん!!!");
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('おしまいです!!!あなたの正解数は' + score +  '/' + quizLength + 'です!!!');
  };
};

// $button[0].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });

// 〇番目のbutttonにクリックされたら～の処理がbuttonの数だけ繰り返される定義
let handlerIndex = 0;
// let buttonLength = $button.length;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};