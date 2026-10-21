/* ==========================================================
   DANH SÁCH SẢN PHẨM — GiaHao One
   - cat:   "print" (in 3D) | "wood" (gỗ CNC) | "hybrid" (đa vật liệu)
   - tech:  "max4" (Qidi Max 4) | "u1" (Snapmaker U1) | "cnc" (CNC 3 trục) | "hybrid" (Đa vật liệu)
   - image: ảnh sản phẩm trong assets/products/ (900x900, chuẩn Studio)
   - featured: "a".."e" để hiện trong khối "Nổi bật" (a = ô lớn nhất)
   - Văn bản viết theo dạng { vi: "...", en: "..." }
   ========================================================== */
window.PRODUCTS = [
  /* ---------- 9 SẢN PHẨM GỐC ---------- */
  {
    id: "vase", cat: "print", tech: "max4", image: "assets/products/vase.jpg", featured: "a",
    colors: ["#c8643b", "#f2efe9", "#9caf88", "#2b2b2e"],
    price: { vi: "159.000đ", en: "159,000₫" },
    name: { vi: "Bình hoa Xoắn", en: "Twist Vase" },
    tagline: { vi: "Đường cong sinh ra từ thuật toán.", en: "Curves born from an algorithm." },
    desc: {
      vi: "Thiết kế tham số với những đường gân xoắn mềm mại, bắt sáng theo từng góc nhìn. In liền khối, không mối nối.",
      en: "A parametric design with soft spiralling ribs that catch the light from every angle. Printed as one seamless piece."
    },
    material: { vi: "PLA mờ", en: "Matte PLA" },
    size: { vi: "Cao khoảng 200 mm", en: "Approx. 200 mm tall" }
  },
  {
    id: "lamp", cat: "print", tech: "max4", image: "assets/products/lamp.jpg", featured: "b",
    colors: ["#f7f3ea", "#c89f6a"],
    price: { vi: "219.000đ", en: "219,000₫" },
    name: { vi: "Đèn Lithophane", en: "Lithophane Lamp" },
    tagline: { vi: "Hình ảnh hiện lên khi ánh sáng bật.", en: "An image that appears in the light." },
    desc: {
      vi: "Hình ảnh được tạo nên từ độ dày khác nhau của lớp nhựa — chỉ hiện rõ khi đèn sáng. Ánh sáng ấm, dịu mắt.",
      en: "The image is formed by varying wall thickness — revealed only when lit. Warm, gentle light."
    },
    material: { vi: "PLA trắng, đế gỗ tự nhiên", en: "White PLA, natural wood base" },
    size: { vi: "Cao khoảng 150 mm", en: "Approx. 150 mm tall" }
  },
  {
    id: "figure", cat: "print", tech: "u1", image: "assets/products/figure.jpg", featured: "c",
    colors: ["#ff6b3d", "#ffffff", "#2f6fd6", "#ffd23f"],
    price: { vi: "99.000đ", en: "99,000₫" },
    name: { vi: "Mèo Phi Hành Gia", en: "Astro Cat" },
    tagline: { vi: "Rực rỡ, ngay từ bản in.", en: "Colorful, straight off the printer." },
    desc: {
      vi: "Mô hình để bàn đa màu được in trọn vẹn trong một lần, màu sắc nằm ngay trong vật liệu — không sơn, không phai.",
      en: "A multicolor desk figure printed in a single run, with color built into the material — no paint, no fading."
    },
    material: { vi: "PLA đa màu", en: "Multicolor PLA" },
    size: { vi: "Cao khoảng 90 mm", en: "Approx. 90 mm tall" }
  },
  {
    id: "coaster", cat: "wood", tech: "cnc", image: "assets/products/coaster.jpg", featured: "d",
    colors: ["#c89f6a", "#e5c79e"],
    price: { vi: "139.000đ / bộ 4", en: "139,000₫ / set of 4" },
    name: { vi: "Bộ lót ly Gỗ", en: "Wood Coaster Set" },
    tagline: { vi: "Hoa văn khắc trên vân gỗ tự nhiên.", en: "Patterns carved into natural grain." },
    desc: {
      vi: "Bộ lót ly gỗ sồi và gỗ thông với rãnh đồng tâm được phay CNC chính xác, chà nhám mịn và lau dầu thủ công (189.000đ / bộ 6).",
      en: "Oak and pine coasters with concentric geometric grooves precisely CNC-milled and hand finished (189,000₫ / set of 6)."
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
    id: "stand", cat: "print", tech: "u1", image: "assets/products/stand.jpg",
    colors: ["#f2efe9", "#9caf88", "#2b2b2e"],
    price: { vi: "69.000đ", en: "69,000₫" },
    name: { vi: "Giá đỡ Điện thoại", en: "Phone Stand" },
    tagline: { vi: "Hai màu. Một khối.", en: "Two colors. One piece." },
    desc: {
      vi: "Giá đỡ tối giản với góc nghiêng thoải mái cho cuộc gọi video và xem nội dung. Phối hai màu ngay khi in.",
      en: "A minimal stand angled for video calls and viewing, with two colors printed in."
    },
    material: { vi: "PLA hai màu", en: "Dual-color PLA" },
    size: { vi: "Vừa hầu hết điện thoại", en: "Fits most phones" }
  },
  {
    id: "keychain", cat: "print", tech: "u1", image: "assets/products/keychain.jpg",
    colors: ["#ff6b3d", "#2f6fd6", "#ffd23f", "#ffffff"],
    price: { vi: "39.000đ / chiếc", en: "39,000₫ / each" },
    name: { vi: "Móc khoá Hình học", en: "Geo Keychains" },
    tagline: { vi: "Nhỏ gọn. Nhiều màu sắc.", en: "Small. Full of color." },
    desc: {
      vi: "Bộ móc khoá hình khối hình học, phối màu tươi sáng — món quà nhỏ xinh cho bạn bè (119.000đ / bộ 4).",
      en: "Geometric keychains in bright color combinations — a small, delightful gift (119,000₫ / set of 4)."
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
  {
    id: "nameplate", cat: "wood", tech: "cnc", image: "assets/products/nameplate.jpg",
    colors: ["#c89f6a", "#e5c79e"],
    price: { vi: "119.000đ", en: "119,000₫" },
    name: { vi: "Bảng gỗ Sóng", en: "Wave Wood Panel" },
    tagline: { vi: "Những con sóng trên vân gỗ.", en: "Waves across the grain." },
    desc: {
      vi: "Tấm gỗ sồi và gỗ thông với hoa văn sóng nổi được phay CNC — điểm nhấn trang trí cho bàn làm việc hoặc kệ sách.",
      en: "An oak and pine panel with raised CNC-milled waves — a decorative accent for desks and shelves."
    },
    material: { vi: "Gỗ sồi, gỗ thông", en: "Oak, pine" },
    size: { vi: "Khoảng 200 × 80 mm", en: "Approx. 200 × 80 mm" }
  },

  /* ---------- 14 SẢN PHẨM ĐA VẬT LIỆU ĐỘC BẢN ---------- */
  {
    id: "cablewave", cat: "hybrid", tech: "hybrid", image: "assets/products/cablewave.jpg",
    colors: ["#e5c79e", "#9caf88", "#c8643b", "#f2efe9"],
    price: { vi: "69.000đ", en: "69,000₫" },
    name: { vi: "Thanh Giữ Cáp Gỗ Sóng", en: "Wave Wood Cable Block" },
    tagline: { vi: "Đằm nặng trên bàn, đóng mở bằng nam châm.", en: "Weighted wave wood with magnetic PLA clips." },
    desc: {
      vi: "Khối gỗ thông phay sóng 3D đằm nặng đặt trên bàn (đáy lót nỉ bám bàn không cần keo dán) kết hợp 3 ngàm khóa cáp in 3D PLA mờ đóng mở bằng nam châm Neodymium.",
      en: "A weighted 3D wave-milled pine block with a non-slip felt bottom, paired with three matte PLA magnetic cable locking clips."
    },
    material: { vi: "Gỗ thông phay sóng, PLA mờ, nam châm & đáy nỉ", en: "Wave-milled pine, matte PLA, magnets & felt" },
    size: { vi: "Khoảng 120 × 38 × 22 mm", en: "Approx. 120 × 38 × 22 mm" }
  },
  {
    id: "penholder", cat: "hybrid", tech: "hybrid", image: "assets/products/penholder.jpg",
    colors: ["#9caf88", "#e5c79e", "#c8643b", "#f2efe9"],
    price: { vi: "89.000đ", en: "89,000₫" },
    name: { vi: "Ống Cắm Bút Gân Xoắn Đế Gỗ", en: "Spiral Rib Pen Cup" },
    tagline: { vi: "Gân xoắn mềm mại trên chân đế gỗ đằm tay.", en: "Helical ribs seated in a weighted pine base." },
    desc: {
      vi: "Sự kết hợp giữa thân trên in 3D 6 múi gân xoắn đồng điệu với Bình hoa Xoắn và chân đế gỗ thông phay CNC nặng đằm ở đáy, bên trong lót vải nỉ êm bảo vệ ngòi bút.",
      en: "Combines a 6-rib helical 3D-printed matte PLA upper cup with a weighted CNC-milled natural pine base and an interior felt pad to protect pen tips."
    },
    material: { vi: "PLA mờ, đế gỗ thông CNC & lót vải nỉ", en: "Matte PLA, CNC pine base & felt pad" },
    size: { vi: "Cao khoảng 110 mm", en: "Approx. 110 mm tall" }
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
    id: "valetbox", cat: "hybrid", tech: "hybrid", image: "assets/products/valetbox.jpg",
    colors: ["#9caf88", "#e5c79e", "#d97724", "#3a3b3e"],
    price: { vi: "119.000đ", en: "119,000₫" },
    name: { vi: "Hộp Phụ Kiện Nắp Gỗ & Vòm Mica", en: "Wave & Amber Acrylic Valet Box" },
    tagline: { vi: "Nắp xoay chốt đồng giữa gỗ sóng và mica uốn.", en: "A brass-pivoted lid uniting wave wood and curved acrylic." },
    desc: {
      vi: "Thân hộp in 3D PLA mờ gân xoắn lót vải nỉ; nắp trên kết hợp gỗ thông phay sóng và cửa sổ Mica màu hổ phách uốn cong nhẹ, xoay mượt quanh chốt đồng và hít khóa nam châm.",
      en: "A spiral-fluted matte PLA box lined with dark felt, topped with a brass-pivoted swivel lid combining wave-milled pine and a curved amber acrylic window."
    },
    material: { vi: "PLA mờ, gỗ thông, mica hổ phách uốn, nỉ & chốt đồng", en: "Matte PLA, pine, curved amber acrylic, felt & brass" },
    size: { vi: "Khoảng 120 × 85 × 58 mm", en: "Approx. 120 × 85 × 58 mm" }
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
  },
  {
    id: "calendar", cat: "hybrid", tech: "hybrid", image: "assets/products/calendar.jpg",
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
    id: "bookarch", cat: "hybrid", tech: "hybrid", image: "assets/products/bookarch.jpg",
    colors: ["#c8643b", "#f2efe9", "#e5c79e"],
    price: { vi: "149.000đ / cặp", en: "149,000₫ / pair" },
    name: { vi: "Cặp Chặn Sách Vòm Xoắn & Mica Uốn", en: "Architectural Arch Bookends" },
    tagline: { vi: "Vòm xoắn, gỗ sóng và lưỡi đỡ mica uốn chữ L.", en: "Spiral arches, wave wood and L-bent acrylic tongues." },
    desc: {
      vi: "Cặp chặn sách kiến trúc kết hợp khối gỗ thông phay sóng và vòm bậc thang gân xoắn in 3D PLA mờ, lồng khóa với lưỡi đỡ dưới sách bằng tấm Mica 4mm uốn nhiệt chữ L.",
      en: "A pair of bookends uniting wave-milled pine blocks and spiral-ribbed matte PLA stepped arches with 4mm heat-bent L-curve frosted acrylic under-book tongues."
    },
    material: { vi: "Gỗ thông, PLA mờ & mica 4mm uốn nhiệt", en: "Pine wood, matte PLA & 4mm heat-bent acrylic" },
    size: { vi: "Cao khoảng 155 mm / chiếc", en: "Approx. 155 mm tall each" }
  },
  {
    id: "acryliclamp", cat: "hybrid", tech: "hybrid", image: "assets/products/acryliclamp.jpg",
    colors: ["#f7f3ea", "#e5c79e"],
    price: { vi: "159.000đ", en: "159,000₫" },
    name: { vi: "Đèn Ngủ Vòm Mica Sóng Uốn Nhiệt", en: "Curved Wave Acrylic Dome Lamp" },
    tagline: { vi: "Ánh sáng dẫn qua mái vòm mica phay sóng uốn cong.", en: "Warm LED light guided along a heat-bent wave acrylic arch." },
    desc: {
      vi: "Tấm Mica Đài Loan dày 4mm được phay CNC rãnh sóng rồi gia nhiệt uốn trên khuôn 3D thành mái vòm chữ U mềm mại, cắm lên đế gỗ thông phát sáng LED vàng ấm dọc theo đường cong.",
      en: "A 4mm cast acrylic sheet CNC-milled with wave grooves and heat-formed into a 3D U-arch dome, glowing with warm LED light from a round CNC-milled pine base."
    },
    material: { vi: "Mica Đài Loan 4mm phay sóng uốn 3D, đế gỗ thông & LED ấm", en: "4mm 3D heat-bent wave acrylic, pine base & warm LED" },
    size: { vi: "Cao khoảng 160 mm", en: "Approx. 160 mm tall" }
  },
  {
    id: "wavelamp", cat: "hybrid", tech: "hybrid", image: "assets/products/wavelamp.jpg",
    colors: ["#f7f3ea", "#e5c79e", "#c89f6a"],
    price: { vi: "169.000đ", en: "169,000₫" },
    name: { vi: "Đèn Ngủ Chao Gân Xoắn Đế Gỗ", en: "Spiral Rib Shade Table Lamp" },
    tagline: { vi: "Ánh sáng vàng dịu lan tỏa qua gân xoắn.", en: "Soft warm light diffused through helical ribs." },
    desc: {
      vi: "Chao đèn hình trụ vòm in 3D gân sóng xoắn xuyên sáng bằng nhựa PLA trắng kem mờ (đồng bộ ngôn ngữ Bình hoa Xoắn), đặt trên chân đế gỗ tự nhiên phay CNC kèm mạch LED ấm.",
      en: "A cylindrical-dome lampshade 3D-printed in warm off-white matte PLA with continuous helical ribs that diffuse a gentle warm glow over a CNC-milled natural wood base."
    },
    material: { vi: "PLA trắng kem xuyên sáng, đế gỗ CNC & LED ấm", en: "Translucent warm white PLA, CNC wood base & warm LED" },
    size: { vi: "Cao khoảng 165 mm", en: "Approx. 165 mm tall" }
  }
];
