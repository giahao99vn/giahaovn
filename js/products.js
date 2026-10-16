/* ==========================================================
   DANH SÁCH SẢN PHẨM — GiaHao One
   - cat:   "print" (in 3D) | "wood" (gỗ CNC)
   - tech:  "max4" (Qidi Max 4) | "u1" (Snapmaker U1) | "cnc" (CNC 3 trục)
   - image: ảnh sản phẩm trong assets/products/ (nên dùng ảnh vuông, nền sáng)
   - featured: "a".."e" để hiện trong khối "Nổi bật" (a = ô lớn nhất)
   - Văn bản viết theo dạng { vi: "...", en: "..." }
   ========================================================== */
window.PRODUCTS = [
  {
    id: "vase", cat: "print", tech: "max4", image: "assets/products/vase.jpg", featured: "a",
    colors: ["#c8643b", "#f2efe9", "#9caf88", "#2b2b2e"],
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
    colors: ["#f7f3ea"],
    name: { vi: "Đèn Lithophane", en: "Lithophane Lamp" },
    tagline: { vi: "Hình ảnh hiện lên khi ánh sáng bật.", en: "An image that appears in the light." },
    desc: {
      vi: "Hình ảnh được tạo nên từ độ dày khác nhau của lớp nhựa — chỉ hiện rõ khi đèn sáng. Ánh sáng ấm, dịu mắt.",
      en: "The image is formed by varying wall thickness — revealed only when lit. Warm, gentle light."
    },
    material: { vi: "PLA trắng, đế gỗ", en: "White PLA, wooden base" },
    size: { vi: "Cao khoảng 150 mm", en: "Approx. 150 mm tall" }
  },
  {
    id: "figure", cat: "print", tech: "u1", image: "assets/products/figure.jpg", featured: "c",
    colors: ["#ff6b3d", "#ffffff", "#2f6fd6", "#ffd23f"],
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
    colors: ["#5a3a22", "#c89f6a"],
    name: { vi: "Bộ lót ly Gỗ", en: "Wood Coaster Set" },
    tagline: { vi: "Hoa văn khắc trên vân gỗ tự nhiên.", en: "Patterns carved into natural grain." },
    desc: {
      vi: "Bộ lót ly gỗ óc chó và sồi, hoa văn hình học được phay CNC chính xác và hoàn thiện thủ công.",
      en: "Walnut and oak coasters with geometric patterns precisely CNC-milled and hand finished."
    },
    material: { vi: "Gỗ óc chó, gỗ sồi", en: "Walnut, oak" },
    size: { vi: "Đường kính khoảng 95 mm", en: "Approx. 95 mm diameter" }
  },
  {
    id: "organizer", cat: "wood", tech: "cnc", image: "assets/products/organizer.jpg", featured: "e",
    colors: ["#5a3a22"],
    name: { vi: "Khay Bàn Làm Việc", en: "Desk Tray" },
    tagline: { vi: "Gọn gàng, từ một khối gỗ.", en: "Order, carved from a single block." },
    desc: {
      vi: "Khay chia ngăn phay từ gỗ nguyên khối, giữ bút, thẻ và những vật dụng nhỏ luôn ngăn nắp.",
      en: "A compartment tray milled from solid wood to keep pens, cards and small things in order."
    },
    material: { vi: "Gỗ óc chó nguyên khối", en: "Solid walnut" },
    size: { vi: "Khoảng 240 × 120 mm", en: "Approx. 240 × 120 mm" }
  },
  {
    id: "stand", cat: "print", tech: "u1", image: "assets/products/stand.jpg",
    colors: ["#f2efe9", "#9caf88", "#2b2b2e"],
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
    colors: ["#c89f6a"],
    name: { vi: "Bảng gỗ Sóng", en: "Wave Wood Panel" },
    tagline: { vi: "Những con sóng trên vân gỗ.", en: "Waves across the grain." },
    desc: {
      vi: "Tấm gỗ sồi với hoa văn sóng nổi được phay CNC — điểm nhấn trang trí cho bàn làm việc hoặc kệ sách.",
      en: "An oak panel with raised CNC-milled waves — a decorative accent for desks and shelves."
    },
    material: { vi: "Gỗ sồi", en: "Oak" },
    size: { vi: "Khoảng 200 × 80 mm", en: "Approx. 200 × 80 mm" }
  }
];
