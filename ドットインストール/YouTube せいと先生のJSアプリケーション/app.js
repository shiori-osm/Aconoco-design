// ➀まずは1問だけクイズを実行できるようにする
// ・問題文、選択肢、答えをそれぞれ定数変数で定義する
// ⑩さあついに問題を増やしていこう!!!
//・配列の中に配列を作っていく
// [{question:〇〇, answer:〇〇, correct:〇〇}]  [{},{},{}]←の書き方
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

// ⑪  ⑩で作った3問でwhile文を回すように定義する
//・何番目かを示すindex←0からスタート
//・何個あるかを示すlength
let quizIndex = 0;
const quizLength = quiz.length;

// ⑭最後のおまけ要素 何問中何問 正解したよてだす
//・最初は1問も答えてない意味で初期値は０
let score = 0;


// ⑩で新しく作ったので最初に作った問題文は消しちゃうよ
// const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ??';
// const answers = [
//   'スーパーファミコン',
//   'プレステ2',
//   'ニンテンドースイッチ',
//   'ニンテンドーDS',
// ];
// const correct = 'ニンテンドーDS';

//・⑦関数にまとめたので$buttonの定義は下から引っ越してきた
const $button = document.getElementsByTagName('button');

// ⑦while文とか出てきたら関数でまとめておく
// ・こういうクイズを用意したよっていうところをまとめる
// const setupQuiz = () => {
//   document.getElementById('js-question').textContent = question;
//   let buttonIndex = 0;
//   let buttonLength = $button.length;
//   while (buttonIndex < buttonLength) {
//     $button[buttonIndex].textContent = answers[buttonIndex]
//     buttonIndex++;
//   }
// };
// // ⑦1回呼び出さないといけない
// setupQuiz();

// ⑬setupQuizも書き換えよう⑫参照
const setupQuiz = () => {
  // ⑬quizの中のquestionを呼び出す
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    // ⑬quizの中のanswerを呼び出す
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
  }
};
// ⑦1回呼び出さないといけない
setupQuiz();


// ⑫1問目が終わったら次の問題に行けるようにsetupQuizをパワーアップさせよう


// ②問題文や答えの文をHTMLに反映させる
//・まずは問題文（先にJSかくdocument.getElementById('js-question')←そのあとHTMLにid=""書き足す）
// ⑦関数にまとめたのでquestionの定義は上に引っ越し
// document.getElementById('js-question').textContent = question;
//・次に答えをbutton反映させる buttonの〇個目 = answersの〇個目
// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];

// ④ブラッシュアップ コードが長いのできれいにする/HTMLから取ってきたことがわかるように$をつける
// ⑦関数にまとめたので$buttonの定義は上に引っ越す
// const $button = document.getElementsByTagName('button');
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// ⑥リファクタリング いまコードが汚い、まとめられるものはまとめる
//・ボタンに対して同じことをやってるのでまとめる
//・ボタンが何個かある＝ボタンは0から始まる、ということでlet buttonIndex=0;
let buttonIndex = 0;
//・4回繰り返すから4回でもいいけど100回とかになったら大変!!!→$button.length使う
let buttonLength = $button.length;
// while(buttonIndex < 4) { }
while (buttonIndex < buttonLength) {
  // (0 < 4)の間 以下の処理を繰り返してね
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
  buttonIndex++;
}

// ③buttonの1個目をクリックしたら正解か不正解か表示する
// ④ここもブラッシュアップ
// document.getElementsByTagName('button')[0].addEventListener('click', () => {
//   $button[0].addEventListener('click', () => {
//   // if()←()内に正解不正解の判断方法を書く 定数currect = buttonのtextcontentだったら正解と判断
//   // ④ここもブラッシュアップ
//   // if(correct === document.getElementsByTagName('button')[0].textContent){
//   if(correct === $button[0].textContent){
//     // もし正解だったら正解と表示
//     window.alert("正解だよ～!!!")
//   } else {
//     // もし不正解だったらelse内の処理
//     window.alert("ざんね～ん不正解だよ!!!")
//   }
// });

// ⑤きれいにできたので2個目3個目にも適用させる
// $button[1].addEventListener('click', () => {
//   if(correct === $button[1].textContent){
//     window.alert("正解だよ～!!!")
//   } else {
//     window.alert("ざんね～ん不正解だよ!!!")
//   }
// });
// $button[2].addEventListener('click', () => {
//   if(correct === $button[2].textContent){
//     window.alert("正解だよ～!!!")
//   } else {
//     window.alert("ざんね～ん不正解だよ!!!")
//   }
// });
// $button[3].addEventListener('click', () => {
//   if(correct === $button[3].textContent){
//     window.alert("正解だよ～!!!")
//   } else {
//     window.alert("ざんね～ん不正解だよ!!!")
//   }
// });

// ⑧if文の記述に関する記述も関数でまとめる e.targetつかうよ
//・e.targetってのはくりっくされたそれ、って意味("click",(e)=>)←ここにeって入れれば「それ」を示す、今回はbutton[0]～[3]
// $button[1].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert("正解だよー!!!");
//   } else {
//     window.alert("残念不正解よー!!!");
//   }
  // ※eってなんだと思ったらconsoloに表示してみればいい
//   console.log(e);
// });
// $button[2].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert("正解だよー!!!");
//   } else {
//     window.alert("残念不正解よー!!!");
//   }
// });
// $button[3].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert("正解だよー!!!");
//   } else {
//     window.alert("残念不正解よー!!!");
//   }
// });

// ⑧if文に関する関数 if文が続くのでそれのまとめ
// ・クリックされたら動く関数ってことでclickhandlerって名前をつけよう
// (e)も引き継いであげないとダメ
// const clickHandler = (e) => {
//   //  if内まるっとコピペしよう
//   if (correct === e.target.textContent) {
//     window.alert("正解だよー!!!");
//   } else {
//     window.alert("残念不正解よー!!!");
//   }
// };

// ⑫このclickHandlerをパワーアップさせよう
//・いまclickHandlerはクイズ1問出したらおわりな感じ
//・本当は2問目3問目にいかないといけない
const clickHandler = (e) => {
  // ⑬quizの中のcorrectを呼び出す  なんとかここまでで形はできたので最後おまけ⑭61行目へ
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解だよー!!!");
    // ⑭正解だったらscoreを1足してあげたい
    score++;
  } else {
    window.alert("残念不正解よー!!!");
  }
  // ⑫まずはquizIndexを++する 43～44行目で定義したやつ 次の問題に進ませる
  quizIndex++;
  // 今何問目??っていうのと合計何問あるかを比較して
  if (quizIndex < quizLength) {
    // もし問題がまだあるなら問題を出してね←問題を出す処理は72行目で定義したsetupQuiz
    setupQuiz();
    // ⑫これだけでは動かない…setupQuizもいじる必要がある⑬へ
  } else {
    // もう問題がないんだったら処理を終えて終了alert出してね
    // ⑭終了したら正解数を出すよ～おしまいです!!!の続きの部分
    window.alert('おしまいです!!!あなたの正解数は' + score + '/' + quizLength + '問です!!!');
  }
};


// $button[1].addEventListener('click', (e) => {
//   // eの抜けに注意
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   // eの抜けに注意
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   // eの抜けに注意
//   clickHandler(e);
// });

// ⑨まだリファクタリングいけるんじゃね??さらに短く書こう！
//・必ずwhile文の時はlet〇〇=0;からスタート
//・clickHandlerをまとめるのでhandleIndexの名前にしたよ
let handleIndex = 0;
//・52行目でも同じ感じのこと書いたよ、もう一回書くとエラーになる…
// let buttonLength = $button.length;
  while(handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
      clickHandler(e);
  });
  handleIndex++;
}