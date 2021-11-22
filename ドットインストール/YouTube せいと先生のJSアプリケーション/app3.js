// 問題文、選択肢、答えの一覧
const quiz = [
  // 1問目
  {
    question: "猫が靴下のニオイを嗅いだあと、口を半開きにするのはどうして??",
    answers : [
      "くしゃいから",
      "いいかおりだから",
      "香りを分析しているから",
      "にゃんとなく"
    ],
    correct : "香りを分析しているから"
  },
  // 2問目
  {
    question : "猫が鼻と鼻をくっつけているのは、どんな意味でしょう～??",
    answers : [
      "キミを信頼しているよ～♡",
      "喧嘩上等だにゃ！",
      "ご飯下さい",
      "早く起きてください"
    ],
    correct : "キミを信頼しているよ～♡"
  },
  // 3問目
  {
    question : "うっとりと眼を細める。そんなときの猫の気持ちは??",
    answers : [
      "ねむたいにゃ～",
      "キミを信頼しているよ～♡",
      "お腹すきました",
      "ごはんください"
    ],
    correct : "キミを信頼しているよ～♡"
  },
  //4問目
  {
    question : "猫の舌には、ザラザラした突起が付いています。この突起が生えてくるのはいつでしょ～??",
    answers : [
      "生後すぐ",
      "離乳食を食べる頃",
      "成猫になる１才頃",
      "そんなものはにゃい"
    ],
    correct : "離乳食を食べる頃"
  }
]

// ボタン取得のための定数
const $button = document.getElementsByTagName('button');
let buttonIndex = 0;
let buttonLength = $button.length;

// quizの中の要素を取得,正解数を出すためのscoreも定義
let quizIndex = 0;
let quizLength = quiz.length;
let score = 0;

// テキストを書き換えて出題する、という処理まとめ
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

// クリックしたら動く関数
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解!!! 流石だにゃ～");
    score++;
  } else {
    window.alert("残念!!! まだまだにゃ～");
  }

  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("おしまいですにゃ～!!!あなたの正解数は…" + score + "/" + quizLength + "問 ですにゃ～!!!");
  }
}

while (buttonIndex < buttonLength) {
  $button[buttonIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  buttonIndex++;
}
//buttonをクリックしたら正誤判定
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

