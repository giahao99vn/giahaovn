/* ==========================================================
   DANH SÁCH SẢN PHẨM — GiaHao One (18 sản phẩm đã lọc)
   - cat:   "print" (in 3D) | "wood" (gỗ CNC) | "hybrid" (đa vật liệu)
   - tech:  "max4" (Qidi Max 4) | "u1" (Snapmaker U1) | "cnc" (CNC 3 trục) | "hybrid" (Đa vật liệu) | "alu" (Nhôm CNC + In 3D)
   - image: ảnh sản phẩm trong assets/products/ (900x900, chuẩn Studio)
   - featured: "a".."e" để hiện trong khối "Nổi bật" (a = ô lớn nhất)
   - Văn bản viết theo dạng { vi: "...", en: "..." }
   ========================================================== */
window.PRODUCTS = [
  /* ---------- 5 SẢN PHẨM NHÔM CNC + IN 3D (KẾ HOẠCH TỔNG THỂ GIAHAOONE) ---------- */
  {
    id: "vi-co-khi", cat: "hybrid", tech: "alu", image: "assets/products/vi_co_khi_edc.jpg", featured: "a",
    colors: ["#c8643b", "#1d1d1f", "#2f6fd6", "#9caf88"],
    price: { vi: "350.000đ – 550.000đ", en: "350,000₫ – 550,000₫" },
    name: { vi: "Ví Cơ Khí Quạt Thẻ", en: "Mechanical Card Wallet" },
    tagline: { vi: "Một lần đẩy, thẻ xòe ra. Khắc chữ ký riêng.", en: "One push and cards fan out. Custom engraved." },
    desc: {
      vi: "Hai tấm ốp nhôm 6061 dày 3 mm phay CNC vát cạnh kim cương kết hợp lõi đẩy thẻ in 3D bằng nhựa kỹ thuật PA-CF/PETG chịu lực cao. Khắc tên, chữ ký hoặc họa tiết riêng theo từng đơn.",
      en: "Two 3 mm CNC-milled 6061 aluminum plates with diamond chamfers paired with an engineering-grade PA-CF/PETG card ejector core. Custom engraved with your name or signature."
    },
    material: { vi: "Nhôm 6061 (3mm), lõi PA-CF/PETG & ốc inox M3", en: "6061 aluminum (3mm), PA-CF/PETG core & M3 screws" },
    size: { vi: "Khắc tên / chữ ký riêng · Chọn màu lõi", en: "Custom name/signature engraving · Custom core color" }
  },
  {
    id: "op-smartkey", cat: "hybrid", tech: "alu", image: "assets/products/op_giap_smartkey.jpg", featured: "b",
    colors: ["#ff6a13", "#1d1d1f", "#c0c6d0"],
    price: { vi: "220.000đ – 350.000đ", en: "220,000₫ – 350,000₫" },
    name: { vi: "Ốp Giáp Smartkey Khắc Biển Số", en: "Smartkey CNC Armor & Tag" },
    tagline: { vi: "Giáp nhôm chống va đập kèm Tag SĐT chủ xe.", en: "Impact-proof aluminum armor with an owner contact tag." },
    desc: {
      vi: "Hai ốp mặt nhôm 6061 dày 3 mm vát cạnh kim cương lót vòng đệm TPU dẻo chống sốc, kèm Tag khắc biển số xe, tên và SĐT khẩn cấp để người nhặt dễ dàng liên hệ trả lại (hỗ trợ Honda, Yamaha, VinFast & ô tô).",
      en: "Two 3 mm diamond-chamfered 6061 aluminum shells with a shock-absorbing TPU liner, paired with a custom-engraved license plate & phone number tag so lost keys can be returned."
    },
    material: { vi: "Nhôm 6061 (3mm), đệm TPU chống sốc & ốc inox M3", en: "6061 aluminum (3mm), TPU shock liner & M3 screws" },
    size: { vi: "Khắc biển số, tên & SĐT · Theo mẫu chìa khóa", en: "Engraved plate & phone · Fitted to key model" }
  },
  {
    id: "khay-modun", cat: "hybrid", tech: "alu", image: "assets/products/khay_modun_cnc.jpg",
    colors: ["#1d1d1f", "#c0c6d0", "#9caf88"],
    price: { vi: "380.000đ – 650.000đ", en: "380,000₫ – 650,000₫" },
    name: { vi: "Hệ Khay Bàn Mô-đun Nam Châm", en: "Magnetic Modular Desk Tray" },
    tagline: { vi: "Chia ngăn vừa khít đồ dùng, nắp nhôm khắc tên.", en: "Custom-fitted compartments with an engraved aluminum lid." },
    desc: {
      vi: "Khay chính in 3D khổ lớn trên Qidi Max 4 chia ngăn theo cỡ đồng hồ, bút, tai nghe của bạn; kết hợp nắp trượt và khay phụ bằng nhôm 6061 dày 3–4 mm gắn nam châm, khắc tên chống trầy.",
      en: "A large-format 3D-printed body on Qidi Max 4 divided to fit your watch, pen and earbuds, paired with a magnetic sliding lid and sub-trays CNC-milled from 3–4 mm 6061 aluminum."
    },
    material: { vi: "Thân in 3D (Qidi Max 4), nắp & khay nhôm 6061, nam châm", en: "3D-printed body, 6061 aluminum lid & trays, magnets" },
    size: { vi: "Tùy chỉnh ngăn theo đồ · Khắc tên lên nắp nhôm", en: "Custom compartment sizing · Engraved aluminum lid" }
  },
  {
    id: "keybar", cat: "hybrid", tech: "alu", image: "assets/products/keybar_dao_mo_hop.jpg",
    colors: ["#ff6a13", "#1d1d1f", "#2f6fd6"],
    price: { vi: "180.000đ – 320.000đ", en: "180,000₫ – 320,000₫" },
    name: { vi: "KeyBar & Mở Hộp EDC Khắc Tên", en: "Custom KeyBar & EDC Cutter" },
    tagline: { vi: "Xếp gọn chùm chìa khóa, mở hộp nhanh gọn.", en: "Stack keys silently and unbox parcels with ease." },
    desc: {
      vi: "Thanh kẹp chìa khóa KeyBar và dụng cụ mở hộp EDC phay từ nhôm tấm 6061 dày 3 mm chịu xoắn vặn hàng ngày, kết hợp thanh trượt nhựa kỹ thuật PA-CF nhiều màu và khắc tên/ngày kỷ niệm.",
      en: "A key organizer and compact EDC box cutter CNC-milled from 3 mm 6061 aluminum plate for daily torque resistance, with a multicolor PA-CF slider and custom name engraving."
    },
    material: { vi: "Nhôm 6061 (3mm), thanh trượt PA-CF & ốc inox", en: "6061 aluminum (3mm), PA-CF slider & stainless screws" },
    size: { vi: "Khắc tên, ngày kỷ niệm hoặc logo nhóm", en: "Custom name, date or team logo engraving" }
  },
  {
    id: "bo-lot-ly-nhom", cat: "hybrid", tech: "alu", image: "assets/products/bo_lot_ly_nhom_tpu.jpg",
    colors: ["#1d1d1f", "#ff6a13", "#c0c6d0"],
    price: { vi: "320.000đ – 480.000đ / bộ 4", en: "320,000₫ – 480,000₫ / set of 4" },
    name: { vi: "Bộ 4 Đế Lót Ly Nhôm + TPU & Khay", en: "Hex Aluminum + TPU Coaster Set" },
    tagline: { vi: "Vành nhôm lục giác, lõi TPU thoát nước chống dính ly.", en: "Hexagonal aluminum rim with anti-stick draining TPU core." },
    desc: {
      vi: "Bộ 4 đế lót ly kết hợp vành lục giác nhôm 6061 dày 3–4 mm vát mép khắc tên/logo và lõi TPU dẻo có rãnh thoát nước giúp nhấc ly đá không bị dính đáy, đi kèm khay đứng in 3D.",
      en: "Four coasters uniting chamfered 3–4 mm hexagonal 6061 aluminum rims and grooved TPU cores that prevent iced glasses from sticking, complete with a 3D-printed holder stand."
    },
    material: { vi: "Vành nhôm 6061 (3–4mm), lõi TPU dẻo & khay in 3D", en: "6061 aluminum rim, flexible TPU core & 3D stand" },
    size: { vi: "Bộ 4 chiếc kèm khay · Khắc tên/logo từ 1 bộ", en: "Set of 4 with stand · Custom logo from 1 set" }
  },

  /* ---------- 4 SẢN PHẨM GỖ CNC & IN 3D GỐC ---------- */
  {
    id: "coaster", cat: "wood", tech: "cnc", image: "assets/products/coaster.jpg", featured: "d",
    colors: ["#c89f6a", "#e5c79e"],
    price: { vi: "139.000đ / bộ 4", en: "139,000₫ / set of 4" },
    name: { vi: "Bộ lót ly Gỗ", en: "Wood Coaster Set" },
    tagline: { vi: "Hoa văn khắc trên vân gỗ tự nhiên.", en: "Patterns carved into natural grain." },
    desc: {
      vi: "Bộ lót ly gỗ sồi và gỗ thông với rãnh đồng tâm được phay CNC chính xác, chà nhám mịn và lau dầu thủ công.",
      en: "Oak and pine coasters with concentric geometric grooves precisely CNC-milled and hand finished."
    },
    material: { vi: "Gỗ sồi, gỗ thông", en: "Oak, pine" },
    size: { vi: "Đường kính khoảng 95 mm", en: "Approx. 95 mm diameter" }
  },
  {
    id: "organizer", cat: "wood", tech: "cnc", image: "assets/products/organizer.jpg", featured: "e",
    colors: ["#c89f6a", "#e5c79e"],
    price: { vi: "179.000đ", en: "179,000₫" },
    name: { vi: "Khay Bàn Làm Việc", en: "Desk Tray" },
    tagline: { vi: "Gọn gàng, từ một khối gỗ.", en: "Order, carved from a single block." },
    desc: {
      vi: "Khay chia ngăn phay từ gỗ nguyên khối, giữ bút, thẻ và những vật dụng nhỏ luôn ngăn nắp.",
      en: "A compartment tray milled from solid wood to keep pens, cards and small things in order."
    },
    material: { vi: "Gỗ sồi, gỗ thông nguyên khối", en: "Solid oak, pine" },
    size: { vi: "Khoảng 240 × 120 mm", en: "Approx. 240 × 120 mm" }
  },
  {
    id: "keychain", cat: "print", tech: "u1", image: "assets/products/keychain.jpg",
    colors: ["#ff6b3d", "#2f6fd6", "#ffd23f", "#ffffff"],
    price: { vi: "39.000đ / chiếc", en: "39,000₫ / each" },
    name: { vi: "Móc khoá Hình học", en: "Geo Keychains" },
    tagline: { vi: "Nhỏ gọn. Nhiều màu sắc.", en: "Small. Full of color." },
    desc: {
      vi: "Bộ móc khoá hình khối hình học, phối màu tươi sáng — món quà nhỏ xinh cho bạn bè.",
      en: "Geometric keychains in bright color combinations — a small, delightful gift."
    },
    material: { vi: "PLA đa màu, khoen kim loại", en: "Multicolor PLA, metal ring" },
    size: { vi: "Khoảng 40 mm", en: "Approx. 40 mm" }
  },
  {
    id: "planter", cat: "print", tech: "max4", image: "assets/products/planter.jpg",
    colors: ["#f2efe9", "#c8643b", "#9caf88"],
    price: { vi: "65.000đ", en: "65,000₫" },
    name: { vi: "Chậu cây Low-poly", en: "Low-poly Planter" },
    tagline: { vi: "Một chút xanh cho góc làm việc.", en: "A little green for your desk." },
    desc: {
      vi: "Chậu cây mini với các mặt cắt đa giác, phù hợp sen đá và xương rồng.",
      en: "A mini planter with faceted polygon surfaces, perfect for succulents and cacti."
    },
    material: { vi: "PLA mờ", en: "Matte PLA" },
    size: { vi: "Khoảng 80 mm", en: "Approx. 80 mm" }
  },

  /* ---------- 8 SẢN PHẨM ĐA VẬT LIỆU ĐỘC BẢN ---------- */
  {
    id: "calendar", cat: "hybrid", tech: "hybrid", image: "assets/products/calendar.jpg", featured: "c",
    colors: ["#f2efe9", "#e5c79e", "#d97724", "#c8643b"],
    price: { vi: "139.000đ", en: "139,000₫" },
    name: { vi: "Lịch Vạn Niên Gỗ Sóng & Mica Uốn", en: "Perpetual Block Desk Calendar" },
    tagline: { vi: "Xoay từng khối ngày, trượt vòng mica hổ phách.", en: "Turn multicolor date blocks, slide the amber acrylic cursor." },
    desc: {
      vi: "Đế gỗ thông phay sóng đỡ bộ khối ngày/tháng in 3D đa màu chìm không phai, đi kèm vòng trượt đánh dấu ngày bằng Mica màu hổ phách phay CNC và gia nhiệt uốn chữ U.",
      en: "A wave-milled pine base holding multicolor 3D-printed date cubes and month bars, accented by a heat-bent U-shaped amber acrylic sliding cursor."
    },
    material: { vi: "PLA đa màu (U1), đế gỗ thông & mica hổ phách uốn", en: "Multicolor PLA, pine base & heat-bent amber acrylic" },
    size: { vi: "Khoảng 135 × 70 mm", en: "Approx. 135 × 70 mm" }
  },
  {
    id: "glassesstand", cat: "hybrid", tech: "hybrid", image: "assets/products/glassesstand.jpg",
    colors: ["#e5c79e", "#9caf88", "#dfd9ce", "#3a3b3e"],
    price: { vi: "89.000đ", en: "89,000₫" },
    name: { vi: "Đế Đỡ Mắt Kính Đệm Vải Bố", en: "Canvas & Wood Eyeglass Stand" },
    tagline: { vi: "Nâng niu tròng kính trên đệm vải bố mộc.", en: "Cradles your lenses on soft natural canvas." },
    desc: {
      vi: "Đế gỗ thông phay sóng lót nỉ để gập gọn càng kính, kết hợp sống đỡ cầu mũi in 3D bọc vải bố mộc giúp nâng tròng kính lơ lửng, không chạm mặt cứng gây trầy xước.",
      en: "A wave-carved pine base with a charcoal felt recess for folded temple arms and a canvas-upholstered 3D-printed nose bridge rest."
    },
    material: { vi: "Gỗ thông, PLA mờ, vải bố mộc & nỉ", en: "Pine wood, matte PLA, cotton canvas & felt" },
    size: { vi: "Khoảng 130 × 70 × 65 mm", en: "Approx. 130 × 70 × 65 mm" }
  },
  {
    id: "acrylicstand", cat: "hybrid", tech: "hybrid", image: "assets/products/acrylicstand.jpg",
    colors: ["#e5c79e", "#9caf88", "#f2efe9"],
    price: { vi: "99.000đ", en: "99,000₫" },
    name: { vi: "Giá Đỡ Mica Uốn Sóng & Đế Gỗ", en: "Wave Acrylic & Wood Stand" },
    tagline: { vi: "Mica phay sóng uốn cong chữ S trên đế gỗ.", en: "S-curved wave acrylic anchored in solid pine." },
    desc: {
      vi: "Tấm Mica Đài Loan dày 4mm được phay CNC rãnh sóng rồi gia nhiệt uốn cong chữ S công thái học trên khuôn 3D, cắm vào đế gỗ thông phay sóng kèm đệm đỡ PLA mờ.",
      en: "4mm cast acrylic CNC-milled with vertical wave flutes and heat-bent into an ergonomic S-curve, anchored in a wave-milled pine base with a matte PLA lip."
    },
    material: { vi: "Mica Đài Loan 4mm uốn nhiệt, gỗ thông & PLA mờ", en: "4mm heat-bent acrylic, pine wood & matte PLA" },
    size: { vi: "Khoảng 110 × 95 × 125 mm", en: "Approx. 110 × 95 × 125 mm" }
  },
  {
    id: "magnotes", cat: "hybrid", tech: "hybrid", image: "assets/products/magnotes.jpg",
    colors: ["#dfd9ce", "#e5c79e", "#d97724", "#c8643b", "#9caf88"],
    price: { vi: "109.000đ", en: "109,000₫" },
    name: { vi: "Bảng Ghi Chú Vải Bố & Mica Uốn", en: "Canvas Magnetic Memo Easel" },
    tagline: { vi: "Ghim ý tưởng lên vải bố, gài nhanh vào kẹp mica.", en: "Pin notes on taut canvas, clip cards in bent acrylic." },
    desc: {
      vi: "Đế gỗ thông phay sóng đỡ bảng nghiêng bọc vải bố lõi thép kèm 3 ghim nam châm in 3D đa màu; cạnh bên tích hợp cánh kẹp bằng Mica màu hổ phách uốn nhiệt chữ U.",
      en: "A wave-milled pine base supporting a steel-core board upholstered in natural canvas, with 3 multicolor PLA magnetic pins and a heat-bent amber acrylic side clip."
    },
    material: { vi: "Vải bố mộc, gỗ thông, mica hổ phách & PLA từ tính", en: "Cotton canvas, pine, amber acrylic & magnetic PLA" },
    size: { vi: "Khoảng 155 × 115 × 48 mm", en: "Approx. 155 × 115 × 48 mm" }
  },
  {
    id: "earbuddock", cat: "hybrid", tech: "hybrid", image: "assets/products/earbuddock.jpg",
    colors: ["#e5c79e", "#9caf88", "#dfd9ce", "#3a3b3e"],
    price: { vi: "109.000đ", en: "109,000₫" },
    name: { vi: "Trạm Đỡ Đồng Hồ & Tai Nghe", en: "Watch & Earbuds Rest Dock" },
    tagline: { vi: "Gối vải bố êm ái cho đồng hồ, hốc nỉ cho tai nghe.", en: "A soft canvas watch pillow and felt earbud well." },
    desc: {
      vi: "Đế gỗ thông phay sóng có hốc lót nỉ cho hộp tai nghe, kết hợp trụ nghiêng in 3D PLA mờ và gối ôm đồng hồ bọc vải bố mộc giúp dây đeo không bị trầy xước.",
      en: "A wave-carved pine base with a felt-lined earbud recess, paired with an angled matte PLA pillar and a natural cotton canvas watch pillow."
    },
    material: { vi: "Gỗ thông, PLA mờ, vải bố mộc & nỉ", en: "Pine wood, matte PLA, cotton canvas & felt" },
    size: { vi: "Khoảng 140 × 85 × 110 mm", en: "Approx. 140 × 85 × 110 mm" }
  },
  {
    id: "canvastray", cat: "hybrid", tech: "hybrid", image: "assets/products/canvastray.jpg",
    colors: ["#e5c79e", "#dfd9ce", "#c8643b", "#9caf88"],
    price: { vi: "119.000đ", en: "119,000₫" },
    name: { vi: "Khay Gỗ Viền Sóng Lót Vải Bố", en: "Wave Wood & Canvas Valet Tray" },
    tagline: { vi: "Đáy vải bố êm, vách ngăn PLA trượt linh hoạt.", en: "Soft canvas floor with a sliding PLA divider." },
    desc: {
      vi: "Khung khay gỗ thông phay gợn sóng bên ngoài, mặt đáy lót vải bố mộc êm ái, đi kèm vách ngăn phụ kiện in 3D PLA mờ trượt dọc rãnh gỗ để tùy chỉnh kích thước ngăn.",
      en: "A CNC-milled pine frame with wave-fluted exterior walls, a natural cotton canvas floor, and a removable matte PLA divider that slides along the wooden rails."
    },
    material: { vi: "Gỗ thông phay sóng, vải bố mộc & PLA mờ", en: "Wave-milled pine, cotton canvas & matte PLA" },
    size: { vi: "Khoảng 210 × 115 × 24 mm", en: "Approx. 210 × 115 × 24 mm" }
  },
  {
    id: "keytagdock", cat: "hybrid", tech: "hybrid", image: "assets/products/keytagdock.jpg",
    colors: ["#c89f6a", "#c8643b", "#9caf88", "#f2efe9"],
    price: { vi: "119.000đ / bộ", en: "119,000₫ / set" },
    name: { vi: "Thanh Gỗ Sóng Hít Chìa Khóa", en: "Magnetic Wave Wood Key Bar" },
    tagline: { vi: "Nam châm đúc ngầm trong lõi móc khóa in 3D.", en: "Embedded magnets inside 3D-printed geometric keytags." },
    desc: {
      vi: "Thanh treo tường gỗ sồi và gỗ thông phay sóng đi kèm 3 móc khóa hình học in 3D PLA mờ có đúc ngầm nam châm Neodymium ngay trong lõi nhựa, tự động hít gọn lên mặt gỗ.",
      en: "A wave-milled oak and pine wall bar paired with three geometric matte PLA keytags with Neodymium magnets embedded inside the print core."
    },
    material: { vi: "Gỗ sồi/thông, PLA mờ đúc ngầm nam châm & khoen inox", en: "Oak/pine, magnet-embedded PLA & steel rings" },
    size: { vi: "Thanh gỗ khoảng 165 × 48 × 20 mm", en: "Bar approx. 165 × 48 × 20 mm" }
  },
  {
    id: "terraplanter", cat: "hybrid", tech: "hybrid", image: "assets/products/terraplanter.jpg",
    colors: ["#f2efe9", "#c8643b", "#e5c79e", "#9caf88"],
    price: { vi: "129.000đ / bộ", en: "129,000₫ / set" },
    name: { vi: "Bộ Đôi Chậu Xoắn Khay Gỗ Lót Bần", en: "Dual Spiral Planters on Wood Tray" },
    tagline: { vi: "Hai chậu gân xoắn trên khay gỗ sóng lót bần.", en: "Twin spiral planters on a cork-lined wave wood tray." },
    desc: {
      vi: "Bộ 2 chậu mini in 3D gân sóng xoắn (1 cao, 1 thấp) có lưới thoát nước ẩn, đặt trong hai hốc tròn lót gỗ bần thấm nước trên khay gỗ thông phay rãnh sóng.",
      en: "Two helical-ribbed matte PLA mini planters (tall and short) with hidden drainage grids, resting in cork-lined drip wells on a wave-milled pine tray."
    },
    material: { vi: "PLA mờ, khay gỗ thông CNC & lót gỗ bần (cork)", en: "Matte PLA, CNC pine tray & natural cork pads" },
    size: { vi: "Tổng thể khoảng 185 × 95 × 90 mm", en: "Overall approx. 185 × 95 × 90 mm" }
  }
];
