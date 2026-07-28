// みんなの日本語 初級 第1課〜第5課 完全網羅データベース
const wordDatabases = {
  "ch1_5": [
    // --- 第1課 ---
    { vn: "私", ja: "私" },
    { vn: "あなた", ja: "あなた" },
    { vn: "あの人", ja: "あの人" },
    { vn: "あの方", ja: "あの方" },
    { vn: "～さん", ja: "～さん" },
    { vn: "～ちゃん", ja: "～ちゃん" },
    { vn: "～くん", ja: "～君" },
    { vn: "～人", ja: "～人" },
    { vn: "先生", ja: "先生" },
    { vn: "教師", ja: "教師" },
    { vn: "学生", ja: "学生" },
    { vn: "会社員", ja: "会社員" },
    { vn: "社員", ja: "社員" },
    { vn: "銀行員", ja: "銀行員" },
    { vn: "医者", ja: "医者" },
    { vn: "研究者", ja: "研究者" },
    { vn: "エンジニア", ja: "エンジニア" },
    { vn: "大学", ja: "大学" },
    { vn: "病院", ja: "病院" },
    { vn: "電気", ja: "電気" },
    { vn: "誰", ja: "誰" },
    { vn: "どなた", ja: "どなた" },
    { vn: "～歳", ja: "～歳" },
    { vn: "何歳", ja: "何歳" },
    { vn: "おいくつ", ja: "おいくつ" },
    { vn: "はい", ja: "はい" },
    { vn: "いいえ", ja: "いいえ" },
    { vn: "初めまして", ja: "初めまして" },
    { vn: "~から来ました", ja: "~から来ました" },
    { vn: "どうぞよろしくお願いします", ja: "どうぞよろしくお願いします" },
    { vn: "失礼ですが", ja: "失礼ですが" },
    { vn: "お名前は？", ja: "お名前は？" },

    // --- 第2課 ---
    { vn: "これ", ja: "これ" },
    { vn: "それ", ja: "それ" },
    { vn: "あれ", ja: "あれ" },
    { vn: "この～", ja: "この～" },
    { vn: "その～", ja: "その～" },
    { vn: "あの～", ja: "あの～" },
    { vn: "本", ja: "本" },
    { vn: "辞書", ja: "辞書" },
    { vn: "雑誌", ja: "雑誌" },
    { vn: "新聞", ja: "新聞" },
    { vn: "ノート", ja: "ノート" },
    { vn: "手帳", ja: "手帳" },
    { vn: "名刺", ja: "名刺" },
    { vn: "カード", ja: "カード" },
    { vn: "鉛筆", ja: "鉛筆" },
    { vn: "ボールペン", ja: "ボールペン" },
    { vn: "シャープペンシル", ja: "シャープペンシル" },
    { vn: "鍵", ja: "鍵" },
    { vn: "時計", ja: "時計" },
    { vn: "傘", ja: "傘" },
    { vn: "鞄", ja: "鞄" },
    { vn: "カセットテープ", ja: "カセットテープ" },
    { vn: "テープレコーダー", ja: "テープレコーダー" },
    { vn: "テレビ", ja: "テレビ" },
    { vn: "ラジオ", ja: "ラジオ" },
    { vn: "カメラ", ja: "カメラ" },
    { vn: "コンピュータ", ja: "コンピュータ" },
    { vn: "自動車", ja: "自動車" },
    { vn: "車", ja: "車" },
    { vn: "机", ja: "机" },
    { vn: "椅子", ja: "椅子" },
    { vn: "チョコレート", ja: "チョコレート" },
    { vn: "コーヒー", ja: "コーヒー" },
    { vn: "お土産", ja: "お土産" },
    { vn: "英語", ja: "英語" },
    { vn: "日本語", ja: "日本語" },
    { vn: "～語", ja: "～語" },
    { vn: "何", ja: "何" },
    { vn: "そう", ja: "そう" },
    { vn: "違います", ja: "違います" },
    { vn: "そうですか", ja: "そうですか" },
    { vn: "あのう", ja: "あのう" },
    { vn: "どうぞ", ja: "どうぞ" },
    { vn: "どうも", ja: "どうも" },
    { vn: "これからお世話になります", ja: "これからお世話になります" },
    { vn: "どうぞよろしくお願いします", ja: "どうぞよろしくお願いします（2）" },

    // --- 第3課 ---
    { vn: "ここ", ja: "ここ" },
    { vn: "そこ", ja: "そこ" },
    { vn: "あそこ", ja: "あそこ" },
    { vn: "どこ", ja: "どこ" },
    { vn: "こちら", ja: "こちら" },
    { vn: "そちら", ja: "そちら" },
    { vn: "あちら", ja: "あちら" },
    { vn: "どちら", ja: "どちら" },
    { vn: "教室", ja: "教室" },
    { vn: "食堂", ja: "食堂" },
    { vn: "事務所", ja: "事務所" },
    { vn: "会議室", ja: "会議室" },
    { vn: "受付", ja: "受付" },
    { vn: "ロビー", ja: "ロビー" },
    { vn: "部屋", ja: "部屋" },
    { vn: "トイレ", ja: "トイレ" },
    { vn: "おお手洗い", ja: "おお手洗い" },
    { vn: "階段", ja: "階段" },
    { vn: "エレベーター", ja: "エレベーター" },
    { vn: "エスカレーター", ja: "エスカレーター" },
    { vn: "自動販売機", ja: "自動販売機" },
    { vn: "電話", ja: "電話" },
    { vn: "国", ja: "国" },
    { vn: "会社", ja: "会社" },
    { vn: "家", ja: "家" },
    { vn: "靴", ja: "靴" },
    { vn: "ネクタイ", ja: "ネクタイ" },
    { vn: "ワイン", ja: "ワイン" },
    { vn: "売り場", ja: "売り場" },
    { vn: "地下", ja: "地下" },
    { vn: "～階", ja: "～階" },
    { vn: "何階", ja: "何階" },
    { vn: "～円", ja: "～円" },
    { vn: "いくら", ja: "いくら" },
    { vn: "百", ja: "百" },
    { vn: "千", ja: "千" },
    { vn: "万", ja: "万" },
    { vn: "すみません", ja: "すみません" },
    { vn: "どうもありがとうございました", ja: "どうもありがとうございました" },

    // --- 第4課 ---
    { vn: "起きます", ja: "起きます" },
    { vn: "寝ます", ja: "寝ます" },
    { vn: "働きます", ja: "働きます" },
    { vn: "休みます", ja: "休みます" },
    { vn: "勉強します", ja: "勉強します" },
    { vn: "終わります", ja: "終わります" },
    { vn: "デパート", ja: "デパート" },
    { vn: "銀行", ja: "銀行" },
    { vn: "郵便局", ja: "郵便局" },
    { vn: "図書館", ja: "図書館" },
    { vn: "美術館", ja: "美術館" },
    { vn: "今", ja: "今" },
    { vn: "～時", ja: "～時" },
    { vn: "～分", ja: "～分" },
    { vn: "半", ja: "半" },
    { vn: "何時", ja: "何時" },
    { vn: "何分", ja: "何分" },
    { vn: "午前", ja: "午前" },
    { vn: "午後", ja: "午後" },
    { vn: "朝", ja: "朝" },
    { vn: "昼", ja: "昼" },
    { vn: "晩", ja: "晩" },
    { vn: "夜", ja: "夜" },
    { vn: "一昨日", ja: "一昨日" },
    { vn: "昨日", ja: "昨日" },
    { vn: "今日", ja: "今日" },
    { vn: "明日", ja: "明日" },
    { vn: "明後日", ja: "明後日" },
    { vn: "今朝", ja: "今朝" },
    { vn: "今晩", ja: "今晩" },
    { vn: "休み", ja: "休み" },
    { vn: "昼休み", ja: "昼休み" },
    { vn: "毎朝", ja: "毎朝" },
    { vn: "毎晩", ja: "毎晩" },
    { vn: "毎日", ja: "毎日" },
    { vn: "月曜日", ja: "月曜日" },
    { vn: "火曜日", ja: "火曜日" },
    { vn: "水曜日", ja: "水曜日" },
    { vn: "木曜日", ja: "木曜日" },
    { vn: "金曜日", ja: "金曜日" },
    { vn: "土曜日", ja: "土曜日" },
    { vn: "日曜日", ja: "日曜日" },
    { vn: "何曜日", ja: "何曜日" },
    { vn: "番号", ja: "番号" },
    { vn: "何番", ja: "何番" },
    { vn: "～から", ja: "～から" },
    { vn: "～まで", ja: "～まで" },
    { vn: "大変ですね", ja: "大変ですね" },
    { vn: "お願いします", ja: "お願いします" },
    { vn: "かしこまりました", ja: "かしこまりました" },

    // --- 第5課 ---
    { vn: "行きます", ja: "行きます" },
    { vn: "来ます", ja: "来ます" },
    { vn: "帰ります", ja: "帰ります" },
    { vn: "学校", ja: "学校" },
    { vn: "駅", ja: "駅" },
    { vn: "飛行機", ja: "飛行機" },
    { vn: "船", ja: "船" },
    { vn: "電車", ja: "電車" },
    { vn: "地下鉄", ja: "地下鉄" },
    { vn: "新幹線", ja: "新幹線" },
    { vn: "バス", ja: "バス" },
    { vn: "タクシー", ja: "タクシー" },
    { vn: "自転車", ja: "自転車" },
    { vn: "歩いて", ja: "歩いて" },
    { vn: "人", ja: "人" },
    { vn: "友達", ja: "友達" },
    { vn: "彼", ja: "彼" },
    { vn: "彼女", ja: "彼女" },
    { vn: "家族", ja: "家族" },
    { vn: "一人で", ja: "一人で" },
    { vn: "先週", ja: "先週" },
    { vn: "今週", ja: "今週" },
    { vn: "来週", ja: "来週" },
    { vn: "先月", ja: "先月" },
    { vn: "今月", ja: "今月" },
    { vn: "来月", ja: "来月" },
    { vn: "去年", ja: "去年" },
    { vn: "今年", ja: "今年" },
    { vn: "来年", ja: "来年" },
    { vn: "～月", ja: "～月" },
    { vn: "何月", ja: "何月" },
    { vn: "一日", ja: "一日" },
    { vn: "二日", ja: "二日" },
    { vn: "三日", ja: "三日" },
    { vn: "四日", ja: "四日" },
    { vn: "五日", ja: "五日" },
    { vn: "六日", ja: "六日" },
    { vn: "七日", ja: "七日" },
    { vn: "八日", ja: "八日" },
    { vn: "九日", ja: "九日" },
    { vn: "十日", ja: "十日" },
    { vn: "十四日", ja: "十四日" },
    { vn: "二十日", ja: "二十日" },
    { vn: "～日", ja: "～日" },
    { vn: "何日", ja: "何日" },
    { vn: "いつ", ja: "いつ" },
    { vn: "誕生日", ja: "誕生日" },
    { vn: "普通", ja: "普通" },
    { vn: "急行", ja: "急行" },
    { vn: "特急", ja: "特急" },
    { vn: "次の", ja: "次の" }
  ],
  
  // 第6〜8課以降も順次完全版にアップデートしていきます
  "ch6_8": [
    { vn: "Ăn", ja: "食べる" }, { vn: "Uống", ja: "飲む" }, { vn: "Hút thuốc", ja: "吸います" }, { vn: "Xem", ja: "見ます" },
    { vn: "Nghe", ja: "聞きます" }, { vn: "Đọc", ja: "読みます" }, { vn: "Viết", ja: "書きます" }, { vn: "Mua", ja: "買います" },
    { vn: "Chụp (ảnh)", ja: "撮ります" }, { vn: "Làm / Chơi", ja: "します" }, { vn: "Gặp", ja: "会います" }, { vn: "Cơm / Bữa ăn", ja: "ごはん" }
  ],
  "ch9_12": [
    { vn: "Hiểu", ja: "分かります" }, { vn: "Có", ja: "あります" }, { vn: "Thích", ja: "好き" }, { vn: "Ghét", ja: "嫌い" }
  ],
  "ch13_15": [
    { vn: "Rộng", ja: "広い" }, { vn: "Hẹp", ja: "狭い" }, { vn: "Mới", ja: "新しい" }, { vn: "Cũ", ja: "古い" }
  ],
  "ch16_19": [
    { vn: "Bật", ja: "付けます" }, { vn: "Tắt", ja: "消します" }, { vn: "Mở", ja: "開けます" }, { vn: "Đóng", ja: "閉めます" }
  ],
  "ch20_22": [
    { vn: "Cần", ja: "要ります" }, { vn: "Hiểu", ja: "分かります" }, { vn: "Tìm", ja: "探します" }, { vn: "Trễ / muộn", ja: "遅れます" }
  ],
  "ch23_25": [
    { vn: "Rẽ / quẹo", ja: "曲がります" }, { vn: "Mang / cầm", ja: "持ちます" }, { vn: "Lấy", ja: "取ります" }, { vn: "Giúp", ja: "手伝います" }
  ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];

// ベトナム語を3回連続で発話する関数
function playVietnameseAudio() {
  if (!('speechSynthesis' in window)) {
    alert("お使いのブラウザは音声読み上げに対応していません。");
    return;
  }

  window.speechSynthesis.cancel();

  const currentWord = currentQuestions[currentIndex].vn;
  let count = 0;

  function speakOnce() {
    if (count >= 3) return;

    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.9;

    utterance.onend = function() {
      count++;
      setTimeout(speakOnce, 400);
    };

    window.speechSynthesis.speak(utterance);
  }

  speakOnce();
}

// 効果音（ピンポーン音）
function playCorrectSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, audioCtx.currentTime);
    gain1.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start();
    osc1.stop(audioCtx.currentTime + 0.3);

    setTimeout(() => {
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1318.51, audioCtx.currentTime);
      gain2.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start();
      osc2.stop(audioCtx.currentTime + 0.5);
    }, 150);
  } catch (e) {
    console.log("Audio not supported");
  }
}

// シャッフル
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 学習開始
function startQuiz(categoryKey) {
  let targetPool = [];

  if (categoryKey === 'all') {
    for (let key in wordDatabases) {
      targetPool = targetPool.concat(wordDatabases[key]);
    }
  } else {
    targetPool = wordDatabases[categoryKey] || [];
  }

  if (targetPool.length === 0) {
    alert("このカテゴリにはまだ単語が登録されていません。");
    return;
  }

  const shuffledVocab = shuffleArray(targetPool);
  const questionCount = Math.min(10, shuffledVocab.length);
  const selectedVocab = shuffledVocab.slice(0, questionCount);

  currentQuestions = selectedVocab.map(item => {
    const incorrects = targetPool
      .filter(v => v.ja !== item.ja)
      .map(v => v.ja);
    const shuffledIncorrects = shuffleArray(incorrects).slice(0, 3);
    const choices = shuffleArray([item.ja, ...shuffledIncorrects]);
    
    return {
      vn: item.vn,
      correct: item.ja,
      choices: choices
    };
  });

  currentIndex = 0;
  score = 0;
  userAnswers = new Array(currentQuestions.length).fill(null);

  document.getElementById('screen-top').style.display = 'none';
  document.getElementById('screen-result').style.display = 'none';
  document.getElementById('screen-quiz').style.display = 'block';

  document.getElementById('btn-prev').style.display = 'block';
  document.getElementById('btn-next').style.display = 'block';

  showQuestion();
}

// 問題表示
function showQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById('current-question-num').textContent = currentIndex + 1;
  document.getElementById('question-word').textContent = q.vn;

  const buttons = document.querySelectorAll('.choice-btn');
  buttons.forEach((btn, idx) => {
    btn.textContent = q.choices[idx];
    btn.classList.remove('correct', 'incorrect');
    btn.disabled = false;
  });

  document.getElementById('feedback-message').textContent = '';
  document.getElementById('btn-prev').disabled = (currentIndex === 0);

  if (userAnswers[currentIndex] !== null) {
    const selectedChoice = userAnswers[currentIndex];
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === q.correct) {
        btn.classList.add('correct');
      } else if (btn.textContent === selectedChoice && selectedChoice !== q.correct) {
        btn.classList.add('incorrect');
      }
    });
  }
}

// 選択肢クリック
function selectAnswer(choiceIndex) {
  if (userAnswers[currentIndex] !== null) return;

  const q = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll('.choice-btn');
  const selectedText = buttons[choiceIndex].textContent;
  
  userAnswers[currentIndex] = selectedText;
  buttons.forEach(btn => btn.disabled = true);

  if (selectedText === q.correct) {
    buttons[choiceIndex].classList.add('correct');
    document.getElementById('feedback-message').textContent = '正解！';
    document.getElementById('feedback-message').style.color = '#28a745';
    playCorrectSound();
    score++;
  } else {
    buttons[choiceIndex].classList.add('incorrect');
    document.getElementById('feedback-message').textContent = '不正解...';
    document.getElementById('feedback-message').style.color = '#dc3545';
    buttons.forEach(btn => {
      if (btn.textContent === q.correct) {
        btn.classList.add('correct');
      }
    });
  }
}

// 戻る
function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

// 次へ
function goNext() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    showResult();
  }
}

// 終了ボタンが押されたときの処理
function goExit() {
  const topScreen = document.getElementById('screen-top');
  
  if (topScreen.style.display !== 'none') {
    alert("ブラウザのタブ（×ボタン）を閉じてアプリを終了してください。");
  } else {
    returnToTop();
  }
}

// 結果表示
function showResult() {
  document.getElementById('screen-quiz').style.display = 'none';
  document.getElementById('screen-result').style.display = 'block';

  document.getElementById('btn-prev').style.display = 'none';
  document.getElementById('btn-next').style.display = 'none';

  document.getElementById('score-count').textContent = score;
  
  const commentElem = document.getElementById('result-comment');
  if (score === currentQuestions.length) {
    commentElem.textContent = "全問正解です！素晴らしい！";
  } else if (score >= 7) {
    commentElem.textContent = "よくできました！その調子です。";
  } else {
    commentElem.textContent = "復習してもう一度チャレンジしてみましょう！";
  }
}

// トップに戻る
function returnToTop() {
  document.getElementById('screen-quiz').style.display = 'none';
  document.getElementById('screen-result').style.display = 'none';
  document.getElementById('screen-top').style.display = 'block';

  document.getElementById('btn-prev').style.display = 'none';
  document.getElementById('btn-next').style.display = 'none';
}

window.onload = function() {
  returnToTop();
};