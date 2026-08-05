// みんなの日本語 初級 語彙データベース（さらに100個追加・完成版）
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
    { vn: "Du học sinh", ja: "留学生" },
    { vn: "Y tá / Hộ lý", ja: "看護師" },

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
    { vn: "Cục tẩy / Gôm", ja: "消しゴム" },
    { vn: "Thước kẻ", ja: "定規" },

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
    { vn: "Cảm ơn rất nhiều", ja: "どうもありがとうございました" },
    { vn: "Siêu thị", ja: "スーパー" },
    { vn: "Cửa hàng tiện lợi", ja: "コンビニ" },

    // --- 第4課 ---
    { vn: "Thức dậy", ja: "起きる" },
    { vn: "Đi ngủ", ja: "寝る" },
    { vn: "Làm việc", ja: "働く" },
    { vn: "Nghỉ ngơi", ja: "休む" },
    { vn: "Học tập", ja: "勉強する" },
    { vn: "Kết thúc", ja: "終わる" },
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
    { vn: "Công viên", ja: "公園" },
    { vn: "Bệnh viện", ja: "病院" },

    // --- 第5課 ---
    { vn: "Đi", ja: "行く" },
    { vn: "Đến", ja: "来る" },
    { vn: "Về", ja: "帰る" },
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
    { vn: "Tiếp theo / Sau", ja: "次の" },
    { vn: "Hộ chiếu", ja: "パスポート" },
    { vn: "Vé", ja: "切符" },

    // --- 追加分 (ch1_5に15個追加) ---
    { vn: "Bút lông", ja: "筆" },
    { vn: "Cục sạc", ja: "充電器" },
    { vn: "Tai nghe", ja: "イヤホン" },
    { vn: "Balo", ja: "リュック" },
    { vn: "Ví tiền", ja: "財布" },
    { vn: "Chìa khóa nhà", ja: "家の鍵" },
    { vn: "Bản đồ", ja: "地図" },
    { vn: "Bưu thiếp", ja: "絵葉書" },
    { vn: "Cửa sổ", ja: "窓" },
    { vn: "Cửa ra vào", ja: "ドア" },
    { vn: "Bảng đen", ja: "黒板" },
    { vn: "Ph phấn viết", ja: "チョーク" },
    { vn: "Giấy", ja: "紙" },
    { vn: "Hồ dán", ja: "糊" },
    { vn: "Kéo cắt giấy", ja: "紙切りバサミ" }
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
    { vn: "Cái gì đó", ja: "何か" },
    { vn: "Phim ảnh", ja: "映画" },
    { vn: "Bóng chày", ja: "野球" },

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
    { vn: "Thiệp mừng năm mới", ja: "年賀状" },
    { vn: "Bánh kẹo", ja: "菓子" },
    { vn: "Mùa đông", ja: "冬" },
    { vn: "Tết / Năm mới", ja: "正月" },
    { vn: "Người Nhật", ja: "日本人" },
    { vn: "Bố (người khác)", ja: "お父さん" },
    { vn: "Mẹ (người khác)", ja: "お母さん" },
    { vn: "Đã ~ / Rồi", ja: "もう" },
    { vn: "Chưa", ja: "まだ" },
    { vn: "Từ bây giờ", ja: "これから" },
    { vn: "Quà sinh nhật", ja: "誕生日プレゼント" },
    { vn: "Hoa hồng", ja: "薔薇" },

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
    { vn: "Ấm áp", ja: "暖かい" },
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
    { vn: "Như thế nào", ja: "どう" },
    { vn: "Thế nào (lịch sự)", ja: "どのような" },
    { vn: "Cả hai", ja: "両方" },
    { vn: "Rất ~", ja: "とても" },
    { vn: "Không ~ lắm", ja: "あまり" },
    { vn: "Nhưng", ja: "が" },
    { vn: "Cái nào", ja: "どれ" },
    { vn: "Khu vực / Tỉnh thành", ja: "地方" },
    { vn: "Đồ ăn ngon", ja: "名物" },
    { vn: "Bữa tiệc", ja: "パーティー" },
    { vn: "Món thịt nướng", ja: "焼き肉" },
    { vn: "Bánh ngọt", ja: "ケーキ" },
    { vn: "Thẻ tín dụng", ja: "クレジットカード" },
    { vn: "Tiền mặt", ja: "現金" },
    { vn: "Cửa hàng ăn", ja: "飲食店" },
    { vn: "Tòa nhà", ja: "建物" },
    { vn: "Đền / Chùa", ja: "寺" },
    { vn: "Phong cảnh", ja: "景色" },
    { vn: "Khách du lịch", ja: "旅行者" },

    // --- 追加分 (ch6_8に15個追加) ---
    { vn: "Thịt bò", ja: "牛肉" },
    { vn: "Thịt heo", ja: "豚肉" },
    { vn: "Thịt gà", ja: "鶏肉" },
    { vn: "Tôm", ja: "海老" },
    { vn: "Mực", ja: "イカ" },
    { vn: "Củ cải", ja: "大根" },
    { vn: "Cà chua", ja: "トマト" },
    { vn: "Khoai tây", ja: "ジャガイモ" },
    { vn: "Hành tây", ja: "玉ねぎ" },
    { vn: "Táo", ja: "林檎" },
    { vn: "Chuối", ja: "バナナ" },
    { vn: "Dưa hấu", ja: "スイカ" },
    { vn: "Cam", ja: "橙" },
    { vn: "Nho", ja: "葡萄" },
    { vn: "Dâu tây", ja: "苺" }
  ],

  "ch9_12": [
    // --- 第9課 ---
    { vn: "Hiểu", ja: "分かる" },
    { vn: "Có (sở hữu/tồn tại vật vô tri)", ja: "ある" },
    { vn: "Có (tồn tại người/động vật)", ja: "いる" },
    { vn: "Thích", ja: "好き" },
    { vn: "Ghét", ja: "嫌い" },
    { vn: "Giỏi", ja: "上手" },
    { vn: "Kém", ja: "下手" },
    { vn: "Đồ uống", ja: "飲み物" },
    { vn: "Âm nhạc", ja: "音楽" },
    { vn: "Bài hát", ja: "歌" },
    { vn: "Đàn guitar", ja: "ギター" },
    { vn: "Khiêu vũ", ja: "ダンス" },
    { vn: "Bóng chày", ja: "野球" },
    { vn: "Tennis", ja: "テニス" },
    { vn: "Cơ hội / Thời gian", ja: "時間" },
    { vn: "Tiền", ja: "お金" },
    { vn: "Bộ phim", ja: "映画" },

    // --- 第10課 ---
    { vn: "Nhiều", ja: "多い" },
    { vn: "Ít", ja: "少ない" },
    { vn: "Vợ", ja: "妻" },
    { vn: "Chồng", ja: "夫" },
    { vn: "Con cái", ja: "子供" },
    { vn: "Con trai", ja: "息子" },
    { vn: "Con gái", ja: "娘" },
    { vn: "Anh trai", ja: "兄" },
    { vn: "Chị gái", ja: "姉" },
    { vn: "Em trai", ja: "弟" },
    { vn: "Em gái", ja: "妹" },
    { vn: "Bố mẹ", ja: "両親" },
    { vn: "Ông nội / Bà nội", ja: "祖父" },
    { vn: "Bà ngoại / Ông ngoại", ja: "祖母" },
    { vn: "Chú / Bác / Cậu", ja: "叔父" },
    { vn: "Cô / Dì", ja: "叔母" },
    { vn: "Thành phố", ja: "都市" },
    { vn: "Công viên", ja: "公園" },
    { vn: "Cửa hàng", ja: "店" },
    { vn: "Hiệu sách", ja: "本屋" },
    { vn: "Nhà hàng", ja: "レストラン" },

    // --- 第11課 ---
    { vn: "Chơi / Vui chơi", ja: "遊ぶ" },
    { vn: "Bơi", ja: "泳ぐ" },
    { vn: "Đón", ja: "迎える" },
    { vn: "Mệt", ja: "疲れる" },
    { vn: "Kết hôn", ja: "結婚する" },
    { vn: "Mua sắm", ja: "買い物する" },
    { vn: "Ăn cơm", ja: "食事する" },
    { vn: "Đi dạo", ja: "散歩する" },
    { vn: "Đặc biệt", ja: "特別" },

    // --- 第12課 ---
    { vn: "Trở nên / Trở thành", ja: "なる" },
    { vn: "Mùa xuân", ja: "春" },
    { vn: "Mùa hạ / Mùa hè", ja: "夏" },
    { vn: "Mùa thu", ja: "秋" },
    { vn: "Thời tiết", ja: "天気" },
    { vn: "Trời mưa", ja: "雨" },
    { vn: "Trời tuyết", ja: "雪" },
    { vn: "Gió", ja: "風" },
    { vn: "Biển", ja: "海" },
    { vn: "Đồ ăn", ja: "食べ物" },
    { vn: "Thế giới", ja: "世界" },
    { vn: "Lễ hội", ja: "祭" },
    { vn: "Sở thích", ja: "趣味" },
    { vn: "Môn thể thao", ja: "スポーツ" },
    { vn: "Bóng rổ", ja: "バスケットボール" },
    { vn: "Bơi lội", ja: "水泳" },
    { vn: "Hội họa / Tranh", ja: "絵" },
    { vn: "Chữ Hán", ja: "漢字" },
    { vn: "Đồ ăn Nhật", ja: "日本料理" },
    { vn: "Phòng khách", ja: "居間" },
    { vn: "Phòng ngủ", ja: "寝室" },
    { vn: "Nhà xe", ja: "駐車場" },
    { vn: "Vườn", ja: "庭" },
    { vn: "Bác sĩ", ja: "医者" },
    { vn: "Y tá", ja: "看護師" },
    { vn: "Cảnh sát", ja: "警察官" },
    { vn: "Lính cứu hỏa", ja: "消防士" },
    { vn: "Đường xá", ja: "道" },
    { vn: "Giao thông", ja: "交通" },
    { vn: "Tai nạn", ja: "事故" },
    { vn: "Sự kiện", ja: "イベント" },
    { vn: "Kỳ nghỉ", ja: "休暇" },
    { vn: "Mùa đông", ja: "冬" },

    // --- 追加分 (ch9_12に15個追加) ---
    { vn: "Bác sĩ thú y", ja: "獣医" },
    { vn: "Nhà văn", ja: "作家" },
    { vn: "Họa sĩ", ja: "画家" },
    { vn: "Nhạc sĩ", ja: "音楽家" },
    { vn: "Diễn viên", ja: "俳優" },
    { vn: "Cầu thủ", ja: "選手" },
    { vn: "Nhà khoa học", ja: "科学者" },
    { vn: "Phi công", ja: "パイロット" },
    { vn: "Tiếp viên hàng không", ja: "客室乗務員" },
    { vn: "Thợ cắt tóc", ja: "理容師" },
    { vn: "Thợ may", ja: "仕立て屋" },
    { vn: "Nông dân", ja: "農家" },
    { vn: "Ngư夫", ja: "漁師" },
    { vn: "Thợ mộc", ja: "大工" },
    { vn: "Kiến trúc sư", ja: "建築家" }
  ],

  "ch13_15": [
    // --- 第13課 ---
    { vn: "Muốn (làm gì đó)", ja: "欲しい" },
    { vn: "Muốn ăn / Muốn uống", ja: "～たい" },
    { vn: "Vào", ja: "入る" },
    { vn: "Ra", ja: "出る" },
    { vn: "Treo / Ngồi / Tốn (tiền/thời gian)", ja: "かかる" },
    { vn: "Đến nơi", ja: "着く" },
    { vn: "Sớm", ja: "早い" },
    { vn: "Muộn", ja: "遅い" },
    { vn: "Ngọt", ja: "甘い" },
    { vn: "Cay", ja: "辛い" },
    { vn: "Đắng", ja: "苦い" },
    { vn: "Chua", ja: "酸っぱい" },

    // --- 第14課 ---
    { vn: "Đặt / Để", ja: "置く" },
    { vn: "Làm / Tạo ra", ja: "作る" },
    { vn: "Bán", ja: "売る" },
    { vn: "Biết", ja: "知る" },
    { vn: "Ở / Sống", ja: "住む" },
    { vn: "Nghiên cứu", ja: "研究する" },
    { vn: "Mặc (quần áo)", ja: "着る" },
    { vn: "Đi (giày/tất)", ja: "履く" },
    { vn: "Đội (mũ)", ja: "被る" },
    { vn: "Đeo (kính)", ja: "掛ける" },
    { vn: "Cười", ja: "笑う" },
    { vn: "Khóc", ja: "泣く" },
    { vn: "Thắng / Đạt", ja: "勝つ" },
    { vn: "Thua", ja: "負ける" },
    { vn: "Chạy", ja: "走る" },
    { vn: "Đứng", ja: "立つ" },
    { vn: "Ngồi", ja: "座る" },
    { vn: "Nhớ", ja: "覚える" },
    { vn: "Quên", ja: "忘れる" },
    { vn: "Mất", ja: "無くす" },
    { vn: "Xuất phát / Rời đi", ja: "発つ" },

    // --- 第15課 ---
    { vn: "Nói", ja: "言う" },
    { vn: "Cho", ja: "与える" },
    { vn: "Nhận", ja: "受け取る" },
    { vn: "Học", ja: "学ぶ" },
    { vn: "Chờ", ja: "待つ" },
    { vn: "Giúp", ja: "手伝う" },
    { vn: "Gọi", ja: "呼ぶ" },
    { vn: "Mở", ja: "開ける" },
    { vn: "Đóng", ja: "閉める" },
    { vn: "Đồ uống giải khát", ja: "清涼飲料水" },
    { vn: "Nước trái cây", ja: "果汁" },
    { vn: "Thực đơn", ja: "メニュー" },
    { vn: "Hóa đơn", ja: "勘定" },
    { vn: "Tiền lẻ", ja: "小銭" },
    { vn: "Quần áo", ja: "衣服" },
    { vn: "Áo sơ mi", ja: "シャツ" },
    { vn: "Quần", ja: "ズボン" },
    { vn: "Giày dép", ja: "履物" },
    { vn: "Mũ nón", ja: "帽子" },
    { vn: "Kính mắt", ja: "眼鏡" },
    { vn: "Sự mệt mỏi", ja: "疲労" },
    { vn: "Giấc ngủ", ja: "睡眠" },
    { vn: "Ước mơ", ja: "夢" },
    { vn: "Kế hoạch", ja: "計画" },
    { vn: "Mục tiêu", ja: "目標" },
    { vn: "Thành công", ja: "成功" },
    { vn: "Thất bại", ja: "失敗" },
    { vn: "Sự cố", ja: "トラブル" },
    { vn: "Giải pháp", ja: "解決" },
    { vn: "Thông tin", ja: "情報" },

    // --- 追加分 (ch13_15に15個追加) ---
    { vn: "Áo khoác", ja: "コート" },
    { vn: "Áo len", ja: "セーター" },
    { vn: "Tất / vớ", ja: "靴下" },
    { vn: "Khăn quàng cổ", ja: "マフラー" },
    { vn: "Găng tay", ja: "手袋" },
    { vn: "Cà vạt", ja: "ネクタイ" },
    { vn: "Thắt lưng", ja: "ベルト" },
    { vn: "Ví da", ja: "革財布" },
    { vn: "Túi xách", ja: "ハンドバッグ" },
    { vn: "Đồng hồ đeo tay", ja: "腕時計" },
    { vn: "Nhẫn", ja: "指輪" },
    { vn: "Dây chuyền", ja: "ネックレス" },
    { vn: "Bông tai", ja: "イヤリング" },
    { vn: "Vòng tay", ja: "ブレスレット" },
    { vn: "Nước hoa", ja: "香水" }
  ],

  "ch16_19": [
    // --- 第16課 ---
    { vn: "Bật", ja: "付ける" },
    { vn: "Tắt", ja: "消す" },
    { vn: "Cho xem", ja: "見せる" },

    // --- 第17課 ---
    { vn: "Cần", ja: "要る" },
    { vn: "Tắm", ja: "浴びる" },
    { vn: "Mang vào", ja: "入れる" },
    { vn: "Lấy ra", ja: "出す" },
    { vn: "Cố gắng", ja: "頑張る" },
    { vn: "Đăng ký", ja: "申し込む" },

    // --- 第18課 ---
    { vn: "Có thể", ja: "出来る" },
    { vn: "Rửa", ja: "洗う" },
    { vn: "Hát", ja: "歌う" },
    { vn: "Chơi (nhạc cụ)", ja: "弾く" },
    { vn: "Múa, nhảy", ja: "踊る" },
    { vn: "Thu gom", ja: "集める" },
    { vn: "Đổi, thay", ja: "換える" },
    { vn: "Lái xe", ja: "運転する" },
    { vn: "Leo núi", ja: "登る" },

    // --- 第19課 ---
    { vn: "Ở trọ", ja: "泊まる" },
    { vn: "Dọn dẹp", ja: "掃除する" },
    { vn: "Giặt", ja: "洗濯する" },
    { vn: "Cảm thấy", ja: "感じる" },
    { vn: "Suy nghĩ", ja: "考える" },
    { vn: "Sống", ja: "生きる" },
    { vn: "Chết", ja: "死ぬ" },
    { vn: "Điều hòa", ja: "エアコン" },
    { vn: "Lò sưởi", ja: "暖房" },
    { vn: "Quạt máy", ja: "扇風機" },
    { vn: "Bóng đèn", ja: "電球" },
    { vn: "Cái chổi", ja: "ほうき" },
    { vn: "Khăn lau", ja: "雑巾" },
    { vn: "Nước giặt", ja: "洗剤" },
    { vn: "Sự giặt giũ", ja: "洗濯" },
    { vn: "Nhạc cụ", ja: "楽器" },
    { vn: "Đàn piano", ja: "ピアノ" },
    { vn: "Tiếng violin", ja: "バイオリン" },
    { vn: "Trò chơi", ja: "ゲーム" },
    { vn: "Sự luyện tập", ja: "練習" },
    { vn: "Sự chuẩn bị", ja: "準備" },
    { vn: "Sự bận rộn", ja: "多忙" },
    { vn: "Sự thư giãn", ja: "リラックス" },
    { vn: "Kỳ nghỉ phép", ja: "休暇" },
    { vn: "Chuyến bay", ja: "フライト" },
    { vn: "Hộ chiếu", ja: "旅券" },
    { vn: "Hành lý", ja: "手荷物" },
    { vn: "Bản đồ", ja: "地図" },
    { vn: "Máy giặt", ja: "洗濯機" },
    { vn: "Tủ lạnh", ja: "冷蔵庫" },
    { vn: "Lò vi sóng", ja: "電子レンジ" },
    { vn: "Máy hút bụi", ja: "掃除機" },
    { vn: "Bàn là", ja: "アイロン" },
    { vn: "Chìa khóa", ja: "スペアキー" },
    { vn: "Hợp đồng", ja: "契約" },
    { vn: "Tiền nhà", ja: "家賃" },
    { vn: "Phòng trọ", ja: "下宿" },
    { vn: "Hàng xóm", ja: "近所" },

    // --- 追加分 (ch16_19に15個追加) ---
    { vn: "Bàn phím", ja: "キーボード" },
    { vn: "Chuột máy tính", ja: "マウス" },
    { vn: "Màn hình", ja: "モニター" },
    { vn: "Máy in", ja: "プリンター" },
    { vn: "Loa", ja: "スピーカー" },
    { vn: "Micro", ja: "マイク" },
    { vn: "Ổ cứng", ja: "ハードディスク" },
    { vn: "USB", ja: "USBメモリー" },
    { vn: "Mạng internet", ja: "インターネット" },
    { vn: "Trang web", ja: "ウェブサイト" },
    { vn: "Mật khẩu", ja: "パスワード" },
    { vn: "Tài khoản", ja: "アカウント" },
    { vn: "Thư rác", ja: "スパムメール" },
    { vn: "Tệp tin", ja: "ファイル" },
    { vn: "Thư mục", ja: "フォルダー" }
  ],

  "ch20_22": [
    // --- 第20課 ---
    { vn: "Tìm kiếm", ja: "探す" },
    { vn: "Chậm, trễ", ja: "遅れる" },
    { vn: "Thanh toán, trả tiền", ja: "払う" },
    { vn: "Xuất phát, khởi hành", ja: "出発する" },
    { vn: "Đến nơi", ja: "到着する" },

    // --- 第21課 ---
    { vn: "Nghĩ, cho rằng", ja: "思う" },
    { vn: "Cẩn thận", ja: "気をつける" },
    { vn: "Dẫn (ai đi)", ja: "連れる" },
    { vn: "Đi cùng", ja: "伴う" },
    { vn: "Chăm sóc", ja: "世話する" },
    { vn: "Nhìn", ja: "眺める" },

    // --- 第22課 ---
    { vn: "Sinh ra", ja: "生まれる" },
    { vn: "Mặc (com lê...)", ja: "スーツを着る" },
    { vn: "Sự tìm kiếm", ja: "捜索" },
    { vn: "Sự lựa chọn", ja: "選択" },
    { vn: "Giá cả", ja: "価格" },
    { vn: "Chi phí", ja: "費用" },
    { vn: "Thu nhập", ja: "収入" },
    { vn: "Tiền lương", ja: "給料" },
    { vn: "Thuế", ja: "税金" },
    { vn: "Chủ đề", ja: "話題" },
    { vn: "Ý kiến", ja: "意見" },
    { vn: "Sự phản đối", ja: "反対" },
    { vn: "Sự đồng ý", ja: "賛成" },
    { vn: "Sự thật", ja: "真実" },
    { vn: "Lời nói dối", ja: "嘘" },
    { vn: "Sự lo lắng", ja: "心配" },
    { vn: "Sự an tâm", ja: "安心" },
    { vn: "Sự ngạc nhiên", ja: "驚き" },
    { vn: "Sự thất vọng", ja: "失望" },
    { vn: "Sự hy vọng", ja: "希望" },
    { vn: "Sự tuyệt vọng", ja: "絶望" },
    { vn: "Cảm xúc", ja: "感情" },
    { vn: "Tâm trạng", ja: "気分" },
    { vn: "Sự thoả thuận", ja: "合意" },
    { vn: "Cuộc họp", ja: "会議" },
    { vn: "Báo cáo", ja: "報告" },
    { vn: "Thư tín", ja: "書信" },
    { vn: "Tài liệu", ja: "書類" },
    { vn: "Chữ ký", ja: "署名" },
    { vn: "Dấu mộc", ja: "印鑑" },
    { vn: "Sự phỏng vấn", ja: "面接" },
    { vn: "Chức vụ", ja: "役職" },
    { vn: "Đồng nghiệp", ja: "同僚" },

    // --- 追加分 (ch20_22に15個追加) ---
    { vn: "Giám đốc", ja: "社長" },
    { vn: "Trưởng phòng", ja: "部長" },
    { vn: "Trưởng nhóm", ja: "課長" },
    { vn: "Nhân viên cấp dưới", ja: "部下" },
    { vn: "Khách hàng", ja: "顧客" },
    { vn: "Đối tác", ja: "取引先" },
    { vn: "Dự án", ja: "プロジェクト" },
    { vn: "Hội thảo", ja: "セミナー" },
    { vn: "Cuộc đàm phán", ja: "交渉" },
    { vn: "Doanh thu", ja: "売上" },
    { vn: "Lợi nhuận", ja: "利益" },
    { vn: "Khoản lỗ", ja: "赤字" },
    { vn: "Khoản lãi", ja: "黒字" },
    { vn: "Sự đầu tư", ja: "投資" },
    { vn: "Thị trường", ja: "市場" }
  ],

  "ch23_25": [
    // --- 第23課 ---
    { vn: "Rẽ, quẹo", ja: "曲がる" },

    // --- 第24課 ---
    { vn: "（新規追加枠）" },

    // --- 第25課 ---
    { vn: "（新規追加枠）" },
    { vn: "Góc đường", ja: "角" },
    { vn: "Ngã tư", ja: "交差点" },
    { vn: "Cầu vượt", ja: "歩道橋" },
    { vn: "Tín hiệu giao thông", ja: "信号" },
    { vn: "Bản đồ chỉ đường", ja: "案内図" },
    { vn: "Món quà", ja: "贈り物" },
    { vn: "Sự biết ơn", ja: "感謝" },
    { vn: "Sự xin lỗi", ja: "謝罪" },
    { vn: "Lời hứa", ja: "約束" },
    { vn: "Bí mật", ja: "秘密" },
    { vn: "Tin tức", ja: "ニュース" },
    { vn: "Báo chí", ja: "新聞" },
    { vn: "Truyền hình", ja: "テレビ" },
    { vn: "Phát thanh", ja: "ラジオ" },
    { vn: "Quảng cáo", ja: "広告" },
    { vn: "Tạp chí", ja: "雑誌" },
    { vn: "Tiểu thuyết", ja: "小説" },
    { vn: "Truyện tranh", ja: "漫画" },
    { vn: "Bức tranh", ja: "絵画" },
    { vn: "Nghệ thuật", ja: "芸術" },
    { vn: "Văn hóa", ja: "文化" },
    { vn: "Chỉ dẫn", ja: "指示" },
    { vn: "Phương hướng", ja: "方角" },
    { vn: "Khoảng cách", ja: "距離" },
    { vn: "Vạch qua đường", ja: "横断歩道" },
    { vn: "Bãi đỗ xe", ja: "駐車場" },
    { vn: "Trạm xăng", ja: "ガソリンスタンド" },
    { vn: "Trạm xe buýt", ja: "バス停" },
    { vn: "Sân bay", ja: "空港" },
    { vn: "Bến cảng", ja: "港" },
    { vn: "Cây cầu", ja: "橋" },

    // --- 追加分 (ch23_25に15個追加) ---
    { vn: "Bảo tàng", ja: "博物館" },
    { vn: "Thư viện tỉnh", ja: "図書館" },
    { vn: "Sân vận động", ja: "競技場" },
    { vn: "Nhà hát", ja: "劇場" },
    { vn: "Rạp chiếu phim", ja: "映画館" },
    { vn: "Sở thú", ja: "動物園" },
    { vn: "Vườn thực vật", ja: "植物園" },
    { vn: "Khu vui chơi", ja: "遊園地" },
    { vn: "Hồ nước", ja: "湖" },
    { vn: "Dòng sông", ja: "川" },
    { vn: "Thác nước", ja: "滝" },
    { vn: "Bãi biển", ja: "海岸" },
    { vn: "Hòn đảo", ja: "島" },
    { vn: "Ngọn núi lửa", ja: "火山" },
    { vn: "Suối nước nóng", ja: "温泉" }
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
    alert("このカテゴリにはまだ登録されていません。");
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

// 終了ボタン
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