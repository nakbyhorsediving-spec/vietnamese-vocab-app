// みんなの日本語 初級（第1課〜第25課）フルサイズ単語データベース
const wordDatabases = {
  "ch1_5": [
    { vn: "Tôi / Em / Anh...", ja: "私" },
    { vn: "Anh / Ông / Bạn...", ja: "あなた" },
    { vn: "Người đó / Vị kia", ja: "あの人" },
    { vn: "Giáo viên / Thầy cô", ja: "先生" },
    { vn: "Học sinh / Sinh viên", ja: "学生" },
    { vn: "Nhân viên công ty", ja: "会社員" },
    { vn: "Nhân viên ngân hàng", ja: "銀行員" },
    { vn: "Bác sĩ", ja: "医者" },
    { vn: "Nghiên cứu viên", ja: "研究者" },
    { vn: "Trường đại học", ja: "大学" },
    { vn: "Bệnh viện", ja: "病院" },
    { vn: "Mấy tuổi / Bao nhiêu tuổi", ja: "何歳" },
    { vn: "Cái này / Đây", ja: "これ" },
    { vn: "Cái đó / Đó", ja: "それ" },
    { vn: "Cái kia / Kia", ja: "あれ" },
    { vn: "Quyển sách này", ja: "この～" },
    { vn: "Quyển sách đó", ja: "その～" },
    { vn: "Quyển sách kia", ja: "あの～" },
    { vn: "Sách", ja: "本" },
    { vn: "Từ điển", ja: "辞書" },
    { vn: "Tạp chí", ja: "雑誌" },
    { vn: "Báo", ja: "新聞" },
    { vn: "Sổ tay", ja: "手帳" },
    { vn: "Danh thiếp", ja: "名刺" },
    { vn: "Bút chì", ja: "鉛筆" },
    { vn: "Chìa khóa", ja: "鍵" },
    { vn: "Đồng hồ", ja: "時計" },
    { vn: "Ô / Dù", ja: "傘" },
    { vn: "Cặp sách / Balo", ja: "鞄" },
    { vn: "Máy thu hình / Tivi", ja: "テレビ" },
    { vn: "Máy ảnh", ja: "カメラ" },
    { vn: "Máy tính", ja: "パソコン" },
    { vn: "Xe hơi / Ô tô", ja: "車" },
    { vn: "Bàn", ja: "机" },
    { vn: "Ghế", ja: "椅子" },
    { vn: "Cà phê", ja: "コーヒー" },
    { vn: "Cái gì", ja: "何" },
    { vn: "Tiếng Nhật", ja: "日本語" },
    { vn: "Tiếng Anh", ja: "英語" },
    { vn: "Tiếng Việt", ja: "ベトナム語" },
    { vn: "Ở đây", ja: "ここ" },
    { vn: "Ở đó", ja: "そこ" },
    { vn: "Ở kia", ja: "あそこ" },
    { vn: "Ở đâu", ja: "どこ" },
    { vn: "Phòng học", ja: "教室" },
    { vn: "Nhà ăn", ja: "食堂" },
    { vn: "Văn phòng", ja: "事務所" },
    { vn: "Phòng họp", ja: "会議室" },
    { vn: "Phòng tiếp khách", ja: "受付" },
    { vn: "Phòng", ja: "部屋" },
    { vn: "Nhà vệ sinh", ja: "お手洗い" },
    { vn: "Thang máy", ja: "エレベーター" },
    { vn: "Đất nước", ja: "国" },
    { vn: "Công ty", ja: "会社" },
    { vn: "Nhà / Gia đình", ja: "家" },
    { vn: "Điện thoại", ja: "電話" },
    { vn: "Giày", ja: "靴" },
    { vn: "Rượu", ja: "酒" },
    { vn: "Bao nhiêu tiền", ja: "いくら" },
    { vn: "Thức dậy", ja: "起きます" },
    { vn: "Đi ngủ", ja: "寝ます" },
    { vn: "Làm việc", ja: "働きます" },
    { vn: "Nghỉ ngơi", ja: "休みます" },
    { vn: "Học tập", ja: "勉強します" },
    { vn: "Kết thúc", ja: "終わります" },
    { vn: "Bách hóa", ja: "デパート" },
    { vn: "Ngân hàng", ja: "銀行" },
    { vn: "Bưu điện", ja: "郵便局" },
    { vn: "Thư viện", ja: "図書館" },
    { vn: "Buổi sáng", ja: "午前" },
    { vn: "Buổi chiều", ja: "午後" },
    { vn: "Hôm qua", ja: "昨日" },
    { vn: "Hôm nay", ja: "今日" },
    { vn: "Ngày mai", ja: "明日" },
    { vn: "Mấy giờ", ja: "何時" },
    { vn: "Đi", ja: "行きます" },
    { vn: "Đến", ja: "来ます" },
    { vn: "Về", ja: "帰ります" },
    { vn: "Trường học", ja: "学校" },
    { vn: "Ga tàu", ja: "駅" },
    { vn: "Máy bay", ja: "飛行機" },
    { vn: "Tàu điện", ja: "電車" },
    { vn: "Xe buýt", ja: "バス" },
    { vn: "Taxi", ja: "タクシー" },
    { vn: "Đi bộ", ja: "歩いて" },
    { vn: "Bạn bè", ja: "友達" },
    { vn: "Sinh nhật", ja: "誕生日に" },
    { vn: "Tháng một", ja: "1月" }
  ],
  
  "ch6_8": [
    { vn: "Ăn", ja: "食べる" }, { vn: "Uống", ja: "飲む" }, { vn: "Hút thuốc", ja: "吸います" }, { vn: "Xem", ja: "見ます" },
    { vn: "Nghe", ja: "聞きます" }, { vn: "Đọc", ja: "読みます" }, { vn: "Viết", ja: "書きます" }, { vn: "Mua", ja: "買います" },
    { vn: "Chụp (ảnh)", ja: "撮ります" }, { vn: "Làm / Chơi", ja: "します" }, { vn: "Gặp", ja: "会います" }, { vn: "Cơm / Bữa ăn", ja: "ごはん" },
    { vn: "Bữa sáng", ja: "朝ごはん" }, { vn: "Bữa trưa", ja: "昼ごはん" }, { vn: "Bữa tối", ja: "晩ごはん" }, { vn: "Bánh mì", ja: "パン" },
    { vn: "Trứng", ja: "卵" }, { vn: "Thịt", ja: "肉" }, { vn: "Cá", ja: "魚" }, { vn: "Rau", ja: "野菜" },
    { vn: "Trái cây", ja: "果物" }, { vn: "Nước", ja: "水" }, { vn: "Trà", ja: "お茶" }, { vn: "Bia", ja: "ビール" },
    { vn: "Hoa", ja: "花" }, { vn: "Thư", ja: "手紙" }, { vn: "Ảnh", ja: "写真" }, { vn: "Bóng đá", ja: "サッカー" },
    { vn: "Du lịch", ja: "旅行" }, { vn: "Kéo", ja: "ハサミ" }, { vn: "Bút", ja: "ペン" }, { vn: "Quà tặng", ja: "プレゼント" }
  ],

  "ch9_12": [
    { vn: "Hiểu", ja: "分かります" }, { vn: "Có", ja: "あります" }, { vn: "Thích", ja: "好き" }, { vn: "Ghét", ja: "嫌い" },
    { vn: "Giỏi", ja: "上手" }, { vn: "Kém", ja: "下手" }, { vn: "Món ăn", ja: "料理" }, { vn: "Đồ uống", ja: "飲み物" },
    { vn: "Thời gian", ja: "時間" }, { vn: "Tiền", ja: "お金" }, { vn: "Phim", ja: "映画" }, { vn: "Âm nhạc", ja: "音楽" },
    { vn: "Bài hát", ja: "歌" }, { vn: "Cổ điển", ja: "クラシック" }, { vn: "Jazz", ja: "ジャズ" }, { vn: "H hòa nhạc", ja: "コンサート" },
    { vn: "Karaoke", ja: "カラオケ" }, { vn: "Kabuki", ja: "歌舞伎" }, { vn: "Bức tranh", ja: "絵" }, { vn: "Thư pháp", ja: "字" },
    { vn: "Màu đỏ", ja: "赤い" }, { vn: "Màu xanh", ja: "青い" }, { vn: "Trắng", ja: "白い" }, { vn: "Đen", ja: "黒い" },
    { vn: "Nhiều", ja: "多い" }, { vn: "Ít", ja: "少ない" }, { vn: "Rất", ja: "とても" }, { vn: "Nhiệt tình / Sôi nổi", ja: "熱心" },
    { vn: "Thành phố", ja: "街" }, { vn: "Đồ ăn / Thức ăn", ja: "食べ物" }
  ],

  "ch13_15": [
    { vn: "Rộng", ja: "広い" }, { vn: "Hẹp", ja: "狭い" }, { vn: "Mới", ja: "新しい" }, { vn: "Cũ", ja: "古い" },
    { vn: "Cao / Đắt", ja: "高い" }, { vn: "Thấp", ja: "低い" }, { vn: "Rẻ", ja: "安い" }, { vn: "Thú vị", ja: "面白い" },
    { vn: "Ngon", ja: "美味しい" }, { vn: "Bận", ja: "忙しい" }, { vn: "Thời tiết", ja: "天気" }, { vn: "Mưa", ja: "雨" },
    { vn: "Tuyết", ja: "雪" }, { vn: "Gió", ja: "風" }, { vn: "Trời", ja: "空" }, { vn: "Biển", ja: "海" },
    { vn: "Đảo", ja: "島" }, { vn: "Thị trấn", ja: "町" }, { vn: "Ngôi làng", ja: "村" }, { vn: "Trạm", ja: "停留所" },
    { vn: "Khách sạn", ja: "ホテル" }, { vn: "Cửa hàng", ja: "店" }, { vn: "Áo sơ mi", ja: "シャツ" }, { vn: "Quần", ja: "ズボン" },
    { vn: "Giày", ja: "靴" }, { vn: "Mũ", ja: "帽子" }, { vn: "Kính mắt", ja: "眼鏡" }, { vn: "Đang", ja: "～ている" },
    { vn: "Kết hôn", ja: "結婚" }, { vn: "Gia đình", ja: "家族" }
  ],

  "ch16_19": [
    { vn: "Bật", ja: "付けます" }, { vn: "Tắt", ja: "消します" }, { vn: "Mở", ja: "開けます" }, { vn: "Đóng", ja: "閉めます" },
    { vn: "Đợi", ja: "待ちます" }, { vn: "Mang / cầm", ja: "持ちます" }, { vn: "Hiểu / biết", ja: "知ります" }, { vn: "Sống / ở", ja: "住みます" },
    { vn: "Nhớ", ja: "覚えます" }, { vn: "Quên", ja: "忘れます" }, { vn: "Giúp đỡ", ja: "手伝います" }, { vn: "Goi", ja: "呼びます" },
    { vn: "Nói chuyện", ja: "話します" }, { vn: "Sử dụng", ja: "使います" }, { vn: "Chạy", ja: "走ります" }, { vn: "Bơi", ja: "泳ぎます" },
    { vn: "Leo", ja: "登ります" }, { vn: "Tắm", ja: "浴びます" }, { vn: "Nghệ thuật", ja: "芸術" }, { vn: "Đền / Chùa", ja: "寺" },
    { vn: "Đền Thần", ja: "神社" }, { vn: "Hơi / Tệ", ja: "少し" }, { vn: "Nhanh", ja: "速い" }, { vn: "Chậm", ja: "遅い" },
    { vn: "Mệt", ja: "疲れる" }, { vn: "Sạch", ja: "綺麗" }, { vn: "Bẩn", ja: "汚い" }, { vn: "An toàn", ja: "安全" },
    { vn: "Nguy hiểm", ja: "危険" }, { vn: "Quan trọng", ja: "大切" }
  ],

  "ch20_22": [
    { vn: "Cần", ja: "要ります" }, { vn: "Hiểu", ja: "分かります" }, { vn: "Tìm", ja: "探します" }, { vn: "Trễ / muộn", ja: "遅れます" },
    { vn: "Trả tiền", ja: "払います" }, { vn: "Cố gắng", ja: "頑張ります" }, { vn: "Được / tốt", ja: "良い" }, { vn: "Xấu", ja: "悪い" },
    { vn: "Bận rộn", ja: "忙しい" }, { vn: "Thoải mái", ja: "楽" }, { vn: "Áo khoác", ja: "コート" }, { vn: "Áo len", ja: "セーター" },
    { vn: "Áo sơ mi", ja: "シャツ" }, { vn: "Cà vạt", ja: "ネクタイ" }, { vn: "Nhẫn", ja: "指輪" }, { vn: "Giày dép", ja: "靴" },
    { vn: "Túi xách", ja: "鞄" }, { vn: "Ví", ja: "財布" }, { vn: "Chìa khóa", ja: "鍵" }, { vn: "Kính", ja: "眼鏡" },
    { vn: "Điện", ja: "電気" }, { vn: "Máy điều hòa", ja: "エアコン" }, { vn: "Tủ lạnh", ja: "冷蔵庫" }, { vn: "Máy giặt", ja: "洗濯機" },
    { vn: "Ti vi", ja: "テレビ" }, { vn: "Radio", ja: "ラジオ" }, { vn: "Đồng hồ", ja: "時計" }, { vn: "Bàn là / Bàn ủi", ja: "アイロン" },
    { vn: "Máy sấy", ja: "ドライヤー" }, { vn: "Đèn", ja: "明かり" }
  ],

  "ch23_25": [
    { vn: "Rẽ / quẹo", ja: "曲がります" }, { vn: "Mang / cầm", ja: "持ちます" }, { vn: "Lấy", ja: "取ります" }, { vn: "Giúp", ja: "手伝います" },
    { vn: "Gọi", ja: "呼びます" }, { vn: "Nói", ja: "話します" }, { vn: "Cho xem", ja: "見せます" }, { vn: "Bắt đầu", ja: "始まります" },
    { vn: "Tiếp tục", ja: "続けます" }, { vn: "Tìm thấy", ja: "見つかります" }, { vn: "Đường", ja: "道" }, { vn: "Góc đường", ja: "角" },
    { vn: "Cầu", ja: "橋" }, { vn: "Tín hiệu / Đèn giao thông", ja: "信号" }, { vn: "Tòa nhà", ja: "建物" }, { vn: "Bản đồ", ja: "地図" },
    { vn: "Thư viện", ja: "図書館" }, { vn: "Bảo tàng", ja: "美術館" }, { vn: "Công viên", ja: "公園" }, { vn: "Sân vận động", ja: "運動場" },
    { vn: "Chợ", ja: "市場" }, { vn: "Siêu thị", ja: "スーパー" }, { vn: "Cửa hàng tiện lợi", ja: "コンビニ" }, { vn: "Nhà sách", ja: "本屋" },
    { vn: "Tiệm hoa", ja: "花屋" }, { vn: "Tiệm bánh", ja: "パン屋" }, { vn: "Hiệu thuốc", ja: "薬屋" }, { vn: "Bưu điện", ja: "郵便局" },
    { vn: "Ngân hàng", ja: "銀行" }, { vn: "Đồn cảnh sát", ja: "交番" }
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
  
  // もしトップページにいる状態で押された場合
  if (topScreen.style.display !== 'none') {
    alert("ブラウザのタブ（×ボタン）を閉じてアプリを終了してください。");
  } else {
    // クイズ中や結果画面ならトップに戻る
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