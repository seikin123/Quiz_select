const quiz = [
  {
    question: '1.コピーをする時のコマンドは',
    answers: [ '⌘ + C', '⌘ + E', '⌘ + S', '⌘ + X'],
    correct: '⌘ + C'
  }, {
    question: '2.新規にエディタを開くコマンドは？？',
    answers: [ '⌘ + B', '⌘ + N', '⌘ + F', '⌘ + D'],
    correct: '⌘ + N'
  }, {
    question: '3.エディタを閉じるコマンドは？？',
    answers: [ '⌘ + D', '⌘ + C', '⌘ + W', '⌘ + V'],
    correct: '⌘ + W'
  }, {
    question: '4.全選択をするコマンドは？？',
    answers: [ '⌘ + A', '⌘ + C', '⌘ + W', '⌘ + V'],
    correct: '⌘ + A'
  }, {
    question: '5.貼り付けをするコマンドは？？',
    answers: [ '⌘ + F', '⌘ + C', '⌘ + W', '⌘ + V'],
    correct: '⌘ + V'
  }, {
    question: '6.大文字小文字の区別をする/しないの切替',
    answers: [ '⌥ + C', '⌥ + E', '⌥ + S', '⌥ + D'],
    correct: '⌥ + C'
  }, {
    question: '7.カーソル行削除',
    answers: [ '⇧ + ⌘ + K', '⇧ + ⌘ + D', '⌥ + S', '⌥ + D'],
    correct: '⇧ + ⌘ + K'
  }, {
    question: '8.カーソル行を下に移動	',
    answers: [ '⇧ + ⌘ + ↓', '⌘ + ↓', '⌥ + ↓', '⌥ + ↑'],
    correct: '⌥ + ↓'
  }, {
    question: '9.選択ワードの全マッチを選択',
    answers: [ '⌘ + F2', '⌘ + F2', '⌥ + F2', '⇧ + ↑'],
    correct: '⌘ + F2'
  }, {
    question: '10.行にインデントを追加',
    answers: [ '⌘ + ]', '⌘ + @', '⌥ + ]', ']'],
    correct: '⌘ + ]'
  }

  
];

  // スタート表示
  function startPress(e) {
    if (!start_game && e.keyCode === 32) {
    $("#start").hide();
        return;
    } else if (!start_game) {
        return;
    }
  }
const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}