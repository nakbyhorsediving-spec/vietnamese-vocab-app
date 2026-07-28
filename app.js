// みんなの日本語 初級 第1課〜第8課 完全網羅データベース
const wordDatabases = {
  "ch1_5": [
    // --- 第1課 ---
    { vn: "Tôi", ja: "私" },
    { vn: "Bạn / Anh / Chị", ja: "あなた" },
    { vn: "Người đó / Vị kia", ja: "あの人" },
    { vn: "Vị kia (lịch sự)", ja: "あの方" },
    { vn: "Anh / Chị / Ông / Bà (hậu tố tên)", ja: "～さん" },
    { vn: "Em / Bé (hậu tố tên trẻ em)", ja: "～ちゃん" },
    { vn: "Cậu / Bạn (hậu tố tên con trai)", ja: "～君" },
    { vn: "Người (hậu tố chỉ quốc tịch/số đếm)", ja: "～人" },
    { vn: "Thầy / Cô (giáo viên)", ja: "先生" },
    { vn: "Giáo viên", ja: "教師" },
    { vn: "Học sinh / Sinh viên", ja: "学生" },
    { vn: "Nhân viên công ty", ja: "会社員" },
    { vn: "Nhân viên (công ty cụ thể)", ja: "社員" },
    { vn: "Nhân viên ngân hàng", ja: "銀行員" },
    { vn: "Bác sĩ", ja: "医者" },
    { vn: "Nghiên cứu viên", ja: "研究者" },
    { vn: "Kỹ sư", ja: "エンジニア" },
    { vn: "Trường đại học", ja: "大学" },
    { vn: "Bệnh viện", ja: "病院" },
    { vn: "Điện / Đèn điện", ja: "電気" },
    { vn: "Ai", ja: "誰" },
    { vn: "Ai (lịch sự)", ja: "どなた" },
    { vn: "～ tuổi", ja: "～歳" },
    { vn: "Mấy tuổi", ja: "何歳" },
    { vn: "Bao nhiêu tuổi (lịch sự)", ja: "おいくつ" },
    { vn: "Vâng / Dạ", ja: "はい" },
    { vn: "Không", ja: "いいえ" },
    { vn: "Rất hân hạnh được gặp bạn", ja: "初めまして" },
    { vn: "Tôi đến từ ~", ja: "~から来ました" },
    { vn: "Rất mong được sự giúp đỡ của bạn", ja: "どうぞよろしくお願いします" },
    { vn: "Xin lỗi, nhưng mà...", ja: "失礼ですが" },
    { vn: "Tên bạn là gì?", ja: "お名前は？" },

    // --- 第2課 ---
    { vn: "Cái này / Đây", ja: "これ" },
    { vn: "Cái đó / Đó", ja: "それ" },
    { vn: "Cái kia / Kia", ja: "あれ" },
    { vn: "Quyển sách này / ~ này", ja: "この～" },
    { vn: "Quyển sách đó / ~ đó", ja: "その～" },
    { vn: "Quyển sách kia / ~ kia", ja: "あの～" },
    { vn: "Sách", ja: "本" },
    { vn: "Từ điển", ja: "辞書" },
    { vn: "Tạp chí", ja: "雑誌" },
    { vn: "Báo", ja: "新聞" },
    { vn: "Vở / Sổ tay", ja: "ノート" },
    { vn: "Sổ tay nhỏ", ja: "手帳" },
    { vn: "Danh thiếp", ja: "名刺" },
    { vn: "Thẻ", ja: "カード" },
    { vn: "Bút chì", ja: "鉛筆" },
    { vn: "Bút bi", ja: "ボールペン" },
    { vn: "Bút máy / Bút chì bấm", ja: "シャープペンシル" },
    { vn: "Chìa khóa", ja: "鍵" },
    { vn: "Đồng hồ", ja: "時計" },
    { vn: "Ô / Dù", ja: "傘" },
    { vn: "Cặp sách / Balo", ja: "鞄" },
    { vn: "Băng cassette", ja: "カセットテープ" },
    { vn: "Máy ghi âm", ja: "テープレコーダー" },
    { vn: "Ti vi", ja: "テレビ" },
    { vn: "Radio", ja: "ラジオ" },
    { vn: "Máy ảnh", ja: "カメラ" },
    { vn: "Máy tính", ja: "コンピュータ" },
    { vn: "Xe hơi", ja: "自動車" },
    { vn: "Xe", ja: "車" },
    { vn: "Bàn", ja: "机" },
    { vn: "Ghế", ja: "椅子" },
    { vn: "Kẹo sô-cô-la", ja: "チョコレート" },
    { vn: "Cà phê", ja: "コーヒー" },
    { vn: "Quà lưu niệm", ja: "お土産" },
    { vn: "Tiếng Anh", ja: "英語" },
    { vn: "Tiếng Nhật", ja: "日本語" },
    { vn: "Tiếng ~", ja: "～語" },
    { vn: "Cái gì", ja: "何" },
    { vn: "Đúng vậy", ja: "そう" },
    { vn: "Sai rồi / Không phải", ja: "違います" },
    { vn: "Thế à? / Ra vậy", ja: "そうですか" },
    { vn: "À thì... (từ đệm khi ngập ngừng)", ja: "あのう" },
    { vn: "Xin mời", ja: "どうぞ" },
    { vn: "Cảm ơn", ja: "どうも" },
    { vn: "Từ nay mong anh/chị giúp đỡ", ja: "これからお世話になります" },
    { vn: "Rất mong được sự giúp đỡ của anh/chị", ja: "どうぞよろしくお願いします（2）" },

    // --- 第3課 ---
    { vn: "Ở đây / Chỗ này", ja: "ここ" },
    { vn: "Ở đó / Chỗ đó", ja: "そこ" },
    { vn: "Ở kia / Chỗ kia", ja: "あそこ" },
    { vn: "Ở đâu / Chỗ nào", ja: "どこ" },
    { vn: "Phía này / Đằng này", ja: "こちら" },
    { vn: "Phía đó / Đằng đó", ja: "そちら" },
    { vn: "Phía kia / Đằng kia", ja: "あちら" },
    { vn: "Phía nào / Đằng nào / Hướng nào", ja: "どちら" },
    { vn: "Phòng học", ja: "教室" },
    { vn: "Nhà ăn", ja: "食堂" },
    { vn: "Văn phòng", ja: "事務所" },
    { vn: "Phòng họp", ja: "会議室" },
    { vn: "Quầy tiếp tân / Lễ tân", ja: "受付" },
    { vn: "Phòng đợi / Tiền sảnh", ja: "ロビー" },
    { vn: "Phòng", ja: "部屋" },
    { vn: "Nhà vệ sinh", ja: "トイレ" },
    { vn: "Phòng vệ sinh (lịch sự)", ja: "おお手洗い" },
    { vn: "Cầu thang", ja: "階段" },
    { vn: "Thang máy", ja: "エレベーター" },
    { vn: "Thang cuốn", ja: "エスカレーター" },
    { vn: "Máy bán hàng tự động", ja: "自動販売機" },
    { vn: "Điện thoại", ja: "電話" },
    { vn: "Đất nước", ja: "国" },
    { vn: "Công ty", ja: "会社" },
    { vn: "Nhà / Gia đình", ja: "家" },
    { vn: "Giày", ja: "靴" },
    { vn: "Cà vạt", ja: "ネクタイ" },
    { vn: "Rượu vang", ja: "ワイン" },
    { vn: "Quầy bán hàng", ja: "売り場" },
    { vn: "Tầng hầm", ja: "地下" },
    { vn: "Tầng ~", ja: "～階" },
    { vn: "Mấy tầng", ja: "何階" },
    { vn: "Yên (tiền Nhật)", ja: "～円" },
    { vn: "Bao nhiêu tiền", ja: "いくら" },
    { vn: "Trăm", ja: "百" },
    { vn: "Nghìn", ja: "千" },
    { vn: "Mười nghìn / Vạn", ja: "万" },
    { vn: "Xin lỗi / Cảm ơn (khi nhận sự giúp đỡ)", ja: "すみません" },
    { vn: "Cảm ơn rất nhiều", ja: "どうもありがとうございました" },

    // --- 第4課 ---
    { vn: "Thức dậy", ja: "起きます" },
    { vn: "Đi ngủ", ja: "寝ます" },
    { vn: "Làm việc", ja: "働きます" },
    { vn: "Nghỉ ngơi", ja: "休みます" },
    { vn: "Học tập", ja: "勉強します" },
    { vn: "Kết thúc", ja: "終わります" },
    { vn: "Cửa hàng bách hóa / Trung tâm thương mại", ja: "デパート" },
    { vn: "Ngân hàng", ja: "銀行" },
    { vn: "Bưu điện", ja: "郵便局" },
    { vn: "Thư viện", ja: "図書館" },
    { vn: "Bảo tàng mỹ thuật", ja: "美術館" },
    { vn: "Bây giờ", ja: "今" },
    { vn: "～ giờ", ja: "～時" },
    { vn: "～ phút", ja: "～分" },
    { vn: "Rưỡi / Nửa", ja: "半" },
    { vn: "Mấy giờ", ja: "何時" },
    { vn: "Mấy phút", ja: "何分" },
    { vn: "Buổi sáng (AM)", ja: "午前" },
    { vn: "Buổi chiều (PM)", ja: "午後" },
    { vn: "Buổi sáng", ja: "朝" },
    { vn: "Buổi trưa", ja: "昼" },
    { vn: "Buổi tối / Đêm", ja: "晩" },
    { vn: "Ban đêm", ja: "夜" },
    { vn: "Hôm kia", ja: "一昨日" },
    { vn: "Hôm qua", ja: "昨日" },
    { vn: "Hôm nay", ja: "今日" },
    { vn: "Ngày mai", ja: "明日" },
    { vn: "Ngày kia", ja: "明後日" },
    { vn: "Sáng nay", ja: "今朝" },
    { vn: "Tối nay", ja: "今晩" },
    { vn: "Nghỉ / Ngày nghỉ", ja: "休み" },
    { vn: "Nghỉ trưa", ja: "昼休み" },
    { vn: "Mỗi sáng", ja: "毎朝" },
    { vn: "Mỗi tối", ja: "毎晩" },
    { vn: "Mỗi ngày", ja: "毎日" },
    { vn: "Thứ hai", ja: "月曜日" },
    { vn: "Thứ ba", ja: "火曜日" },
    { vn: "Thứ tư", ja: "水曜日" },
    { vn: "Thứ năm", ja: "木曜日" },
    { vn: "Thứ sáu", ja: "金曜日" },
    { vn: "Thứ bảy", ja: "土曜日" },
    { vn: "Chủ nhật", ja: "日曜日" },
    { vn: "Thứ mấy", ja: "何曜日" },
    { vn: "Số (nhà, điện thoại)", ja: "番号" },
    { vn: "Số mấy", ja: "何番" },
    { vn: "Từ ~", ja: "～から" },
    { vn: "Đến ~", ja: "～まで" },
    { vn: "Vất vả quá nhỉ / Cực nhỉ", ja: "大変ですね" },
    { vn: "Nhờ anh/chị / Xin vui lòng", ja: "お願いします" },
    { vn: "Vâng, tôi hiểu rồi / Xin rõ", ja: "かしこまりました" },

    // --- 第5課 ---
    { vn: "Đi", ja: "行きます" },
    { vn: "Đến", ja: "来ます" },
    { vn: "Về", ja: "帰ります" },
    { vn: "Trường học", ja: "学校" },
    { vn: "Ga tàu", ja: "駅" },
    { vn: "Máy bay", ja: "飛行機" },
    { vn: "Tàu thủy", ja: "船" },
    { vn: "Tàu điện", ja: "電車" },
    { vn: "Tàu điện ngầm", ja: "地下鉄" },
    { vn: "Tàu siêu tốc Shinkansen", ja: "新幹線" },
    { vn: "Xe buýt", ja: "バス" },
    { vn: "Taxi", ja: "タクシー" },
    { vn: "Xe đạp", ja: "自転車" },
    { vn: "Đi bộ", ja: "歩いて" },
    { vn: "Người", ja: "人" },
    { vn: "Bạn bè", ja: "友達" },
    { vn: "Anh ấy / Bạn trai", ja: "彼" },
    { vn: "Cô ấy / Bạn gái", ja: "彼女" },
    { vn: "Gia đình", ja: "家族" },
    { vn: "Một mình", ja: "一人で" },
    { vn: "Tuần trước", ja: "先週" },
    { vn: "Tuần này", ja: "今週" },
    { vn: "Tuần sau", ja: "来週" },
    { vn: "Tháng trước", ja: "先月" },
    { vn: "Tháng này", ja: "今月" },
    { vn: "Tháng sau", ja: "来月" },
    { vn: "Năm ngoái", ja: "去年" },
    { vn: "Năm nay", ja: "今年" },
    { vn: "Năm sau", ja: "来年" },
    { vn: "Tháng ~", ja: "～月" },
    { vn: "Mấy tháng", ja: "何月" },
    { vn: "Mùng 1", ja: "一日" },
    { vn: "Mùng 2", ja: "二日" },
    { vn: "Mùng 3", ja: "三日" },
    { vn: "Mùng 4", ja: "四日" },
    { vn: "Mùng 5", ja: "五日" },
    { vn: "Mùng 6", ja: "六日" },
    { vn: "Mùng 7", ja: "七日" },
    { vn: "Mùng 8", ja: "八日" },
    { vn: "Mùng 9", ja: "九日" },
    { vn: "Mùng 10", ja: "十日" },
    { vn: "Ngày 14", ja: "十四日" },
    { vn: "Ngày 20", ja: "二十日" },
    { vn: "Ngày ~ / ~ ngày", ja: "～日" },
    { vn: "Mấy ngày / Ngày mấy", ja: "何日" },
    { vn: "Khi nào", ja: "いつ" },
    { vn: "Ngày sinh nhật", ja: "誕生日" },
    { vn: "Tàu thường", ja: "普通" },
    { vn: "Tàu tốc hành", ja: "急行" },
    { vn: "Tàu tốc hành đặc biệt", ja: "特急" },
    { vn: "Tiếp theo / Sau", ja: "次の" }
  ],
  
  "ch6_8": [
    // --- 第6課 ---
    { vn: "Ăn", ja: "食べる" },
    { vn: "Uống", ja: "飲む" },
    { vn: "Hút (thuốc lá)", ja: "吸う" },
    { vn: "Xem / Nhìn", ja: "見る" },
    { vn: "Nghe", ja: "聞く" },
    { vn: "Đọc", ja: "読む" },
    { vn: "Viết / Vẽ", ja: "書く" },
    { vn: "Mua", ja: "買う" },
    { vn: "Chụp (ảnh)", ja: "撮る" },
    { vn: "Làm / Chơi (thể thao)", ja: "する" },
    { vn: "Gặp (bạn bè)", ja: "会う" },
    { vn: "Cơm / Bữa ăn", ja: "ごはん" },
    { vn: "Bữa sáng", ja: "朝ごはん" },
    { vn: "Bữa trưa", ja: "昼ごはん" },
    { vn: "Bữa tối", ja: "晩ごはん" },
    { vn: "Bánh mì", ja: "パン" },
    { vn: "Trứng", ja: "卵" },
    { vn: "Thịt", ja: "肉" },
    { vn: "Cá", ja: "魚" },
    { vn: "Rau", ja: "野菜" },
    { vn: "Trái cây / Hoa quả", ja: "果物" },
    { vn: "Nước", ja: "水" },
    { vn: "Trà", ja: "お茶" },
    { vn: "Hồng trà / Trà đen", ja: "紅茶" },
    { vn: "Sữa", ja: "牛乳" },
    { vn: "Nước ép", ja: "ジュース" },
    { vn: "Bia", ja: "ビール" },
    { vn: "Rượu / Đồ uống có cồn", ja: "酒" },
    { vn: "Thuốc lá", ja: "タバコ" },
    { vn: "Thư", ja: "手紙" },
    { vn: "Bức ảnh", ja: "写真" },
    { vn: "Bóng đá", ja: "サッカー" },
    { vn: "Môn thể thao", ja: "スポーツ" },
    { vn: "Buổi đi chơi / Chuyến du lịch", ja: "旅行" },
    { vn: "Hoa", ja: "花" },
    { vn: "Công việc", ja: "仕事" },
    { vn: "Bản thân / Tự mình", ja: "自分" },
    { vn: "Cùng nhau", ja: "一緒に" },
    { vn: "Một chút", ja: "ちょっと" },
    { vn: "Luôn luôn / Thường", ja: "いつも" },
    { vn: "Thỉnh thoảng", ja: "時々" },
    { vn: "Sau đó / Thế rồi", ja: "それから" },
    { vn: "Cái gì đó", ja: "何を" },

    // --- 第7課 ---
    { vn: "Cắt", ja: "切る" },
    { vn: "Gửi", ja: "送る" },
    { vn: "Cho / Tặng", ja: "上げる" },
    { vn: "Nhận", ja: "貰う" },
    { vn: "Cho mượn", ja: "貸す" },
    { vn: "Mượn", ja: "借りる" },
    { vn: "Dạy", ja: "教える" },
    { vn: "Học", ja: "習う" },
    { vn: "Gọi (điện thoại)", ja: "掛ける" },
    { vn: "Tay / Bàn tay", ja: "手" },
    { vn: "Đũa", ja: "箸" },
    { vn: "Thìa / Muỗng", ja: "スプーン" },
    { vn: "Nĩa / Xiên", ja: "フォーク" },
    { vn: "Dao", ja: "ナイフ" },
    { vn: "Kéo", ja: "ハサミ" },
    { vn: "Máy tính cá nhân", ja: "パソコン" },
    { vn: "Điện thoại di động", ja: "携帯電話" },
    { vn: "Thư điện tử / Email", ja: "メール" },
    { vn: "Đồ quà cáp / Quà tặng", ja: "年賀状" },
    { vn: "Bánh kẹo", ja: "菓子" },
    { vn: "Mùa đông", ja: "冬" },
    { vn: "Tết / Năm mới", ja: "正月" },
    { vn: "Người Nhật", ja: "日本人" },
    { vn: "Bố (người khác)", ja: "お父さん" },
    { vn: "Mẹ (người khác)", ja: "お母さん" },
    { vn: "Đã ~ / Rồi", ja: "もう" },
    { vn: "Chưa", ja: "まだ" },
    { vn: "Từ bây giờ", ja: "これから" },

    // --- 第8課 ---
    { vn: "Đẹp / Sạch sẽ", ja: "綺麗" },
    { vn: "Náo nhiệt / Đông đúc", ja: "賑やか" },
    { vn: "Yên tĩnh", ja: "静か" },
    { vn: "Nổi tiếng", ja: "有名" },
    { vn: "Tốt bụng / Thân thiện", ja: "親切" },
    { vn: "Khỏe / Tiện nghi", ja: "元気" },
    { vn: "Rảnh rỗi", ja: "暇" },
    { vn: "Tiện lợi", ja: "便利" },
    { vn: "Tuyệt vời / Đẹp", ja: "素敵" },
    { vn: "Lớn / To", ja: "大きい" },
    { vn: "Nhỏ", ja: "小さい" },
    { vn: "Mới", ja: "新しい" },
    { vn: "Cũ", ja: "古い" },
    { vn: "Tốt", ja: "良い" },
    { vn: "Xấu", ja: "悪い" },
    { vn: "Cao / Đắt đỏ", ja: "高い" },
    { vn: "Thấp", ja: "低い" },
    { vn: "Rẻ", ja: "安い" },
    { vn: "Nhiệt độ / Thời tiết ấm áp", ja: "暖かい" },
    { vn: "Mát mẻ", ja: "涼しい" },
    { vn: "Lạnh", ja: "寒い" },
    { vn: "Nóng", ja: "暑い" },
    { vn: "Khó", ja: "難しい" },
    { vn: "Dễ", ja: "易しい" },
    { vn: "Bận rộn", ja: "忙しい" },
    { vn: "Thú vị / Hay", ja: "面白い" },
    { vn: "Ngon", ja: "美味しい" },
    { vn: "Trắng", ja: "白い" },
    { vn: "Đen", ja: "黒い" },
    { vn: "Đỏ", ja: "赤い" },
    { vn: "Xanh dương", ja: "青い" },
    { vn: "Hoa anh đào", ja: "桜" },
    { vn: "Núi", ja: "山" },
    { vn: "Thị trấn / Thành phố", ja: "町" },
    { vn: "Món ăn", ja: "料理" },
    { vn: "Kỳ thi", ja: "試験" },
    { vn: "Công việc / Sinh hoạt", ja: "生活" },
    { vn: "Côn trùng / Ghế", ja: "椅子" },
    { vn: "Như thế nào", ja: "どう" },
    { vn: "Thế nào (lịch sự)", ja: "どのような" },
    { vn: "Cả hai", ja: "両方" },
    { vn: "Rất ~", ja: "とても" },
    { vn: "Không ~ lắm", ja: "あまり" },
    { vn: "Nhưng", ja: "が" },
    { vn: "Cái này nhé", ja: "どれ" }
  ],

  // 残りのカテゴリ（9課以降）
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