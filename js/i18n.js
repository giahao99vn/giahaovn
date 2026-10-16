/* ==========================================================
   ĐA NGÔN NGỮ — thêm ngôn ngữ mới bằng cách thêm một khối
   giống "en" bên dưới (vd "zh", "ko") và khai báo trong LANGS.
   ========================================================== */
window.LANGS = [
  { code: "vi", label: "Tiếng Việt", short: "VI" },
  { code: "en", label: "English", short: "EN" }
];

window.I18N = {
  vi: {
    "meta.title": "GiaHao One — Thiết kế & chế tác tại Việt Nam",
    "nav.highlights": "Nổi bật",
    "nav.products": "Sản phẩm",
    "nav.craft": "Chế tác",
    "nav.about": "Giới thiệu",
    "nav.contact": "Liên hệ",

    "hero.eyebrow": "Thiết kế & chế tác tại Việt Nam",
    "hero.sub": "Những vật dụng nhỏ, được làm ra với sự chăm chút lớn.",
    "hero.cta1": "Khám phá sản phẩm",
    "hero.cta2": "Liên hệ",
    "hero.hint": "Kéo để xoay",
    "color.terracotta": "Cam đất",
    "color.porcelain": "Trắng sứ",
    "color.sage": "Xanh xô thơm",
    "color.midnight": "Đen nửa đêm",
    "color.ocean": "Xanh biển",

    "hl.title": "Nổi bật.",
    "col.title": "Bộ sưu tập.",
    "col.sub": "Đồ trang trí, quà tặng và vật dụng bàn làm việc — in 3D và gỗ phay CNC.",
    "filter.all": "Tất cả",
    "filter.print": "In 3D",
    "filter.wood": "Gỗ CNC",
    "card.more": "Tìm hiểu thêm",
    "tag.max4": "In 3D",
    "tag.u1": "In 3D đa màu",
    "tag.cnc": "Gỗ phay CNC",

    "craft.eyebrow": "Chế tác",
    "craft.title": "Ba công nghệ.<br />Một tiêu chuẩn.",
    "craft.sub": "Mỗi sản phẩm được làm ra bằng công cụ phù hợp nhất với nó.",
    "craft.c1.label": "In 3D khổ lớn",
    "craft.c1.text": "Dành cho những sản phẩm kích thước lớn như bình hoa, đèn — bề mặt mịn, đường nét liền mạch.",
    "craft.c2.label": "In 3D đa màu",
    "craft.c2.text": "Nhiều đầu in hoạt động cùng nhau, tạo nên sản phẩm nhiều màu sắc ngay trong một lần in — sống động, không cần sơn.",
    "craft.c3.label": "Phay gỗ CNC",
    "craft.c3.title": "CNC 3 trục",
    "craft.c3.text": "Gỗ tự nhiên được phay và khắc chính xác, sau đó hoàn thiện thủ công từng chi tiết.",

    "about.title": "Vì sao là GiaHao One.",
    "about.v1.t": "Thiết kế tinh gọn",
    "about.v1.d": "Bớt đi chi tiết thừa, tập trung vào công năng và vẻ đẹp tự nhiên của vật liệu.",
    "about.v2.t": "Vật liệu thân thiện",
    "about.v2.d": "Nhựa PLA có nguồn gốc từ thực vật và gỗ tự nhiên được lựa chọn kỹ.",
    "about.v3.t": "Làm ra tại Việt Nam",
    "about.v3.d": "Từng sản phẩm được thiết kế và hoàn thiện tại Gò Quao, Kiên Giang.",

    "contact.title": "Liên hệ.",
    "contact.sub": "Bạn quan tâm đến một sản phẩm? Nhắn cho chúng tôi qua Zalo để được phản hồi nhanh nhất.",
    "contact.zalo": "Nhắn tin Zalo",
    "contact.zaloCta": "Mở Zalo",
    "contact.phone": "Điện thoại",
    "contact.call": "Gọi ngay",
    "contact.address": "Địa chỉ",
    "contact.addr": "Ấp An Trung, xã Định An, huyện Gò Quao, tỉnh Kiên Giang",
    "contact.map": "Mở trong Google Maps",

    "sheet.made": "Chế tác",
    "sheet.material": "Chất liệu",
    "sheet.size": "Kích thước",
    "sheet.colors": "Màu sắc",
    "sheet.ask": "Hỏi qua Zalo",
    "sheet.call": "Gọi điện",

    "footer.rights": "Bản quyền ©",
    "footer.made": "Thiết kế và chế tác tại Việt Nam."
  },

  en: {
    "meta.title": "GiaHao One — Designed & crafted in Vietnam",
    "nav.highlights": "Highlights",
    "nav.products": "Products",
    "nav.craft": "Craft",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.eyebrow": "Designed & crafted in Vietnam",
    "hero.sub": "Small objects. Made with great care.",
    "hero.cta1": "Explore products",
    "hero.cta2": "Contact us",
    "hero.hint": "Drag to rotate",
    "color.terracotta": "Terracotta",
    "color.porcelain": "Porcelain",
    "color.sage": "Sage",
    "color.midnight": "Midnight",
    "color.ocean": "Ocean",

    "hl.title": "Highlights.",
    "col.title": "The collection.",
    "col.sub": "Home décor, gifts and desk essentials — 3D printed and CNC-milled wood.",
    "filter.all": "All",
    "filter.print": "3D printed",
    "filter.wood": "CNC wood",
    "card.more": "Learn more",
    "tag.max4": "3D printed",
    "tag.u1": "Multicolor 3D print",
    "tag.cnc": "CNC-milled wood",

    "craft.eyebrow": "Craft",
    "craft.title": "Three technologies.<br />One standard.",
    "craft.sub": "Every product is made with the tool best suited to it.",
    "craft.c1.label": "Large-format 3D printing",
    "craft.c1.text": "For larger pieces such as vases and lamps — smooth surfaces and seamless lines.",
    "craft.c2.label": "Multicolor 3D printing",
    "craft.c2.text": "Multiple toolheads work together to create vibrant, multicolor objects in a single print — no painting required.",
    "craft.c3.label": "CNC wood milling",
    "craft.c3.title": "3-axis CNC",
    "craft.c3.text": "Natural wood is precisely milled and engraved, then finished by hand, detail by detail.",

    "about.title": "Why GiaHao One.",
    "about.v1.t": "Thoughtfully minimal",
    "about.v1.d": "Nothing unnecessary — just function and the natural beauty of the material.",
    "about.v2.t": "Considered materials",
    "about.v2.d": "Plant-based PLA and carefully selected natural wood.",
    "about.v3.t": "Made in Vietnam",
    "about.v3.d": "Every piece is designed and finished in Go Quao, Kien Giang.",

    "contact.title": "Get in touch.",
    "contact.sub": "Interested in a product? Message us on Zalo for the fastest reply.",
    "contact.zalo": "Message on Zalo",
    "contact.zaloCta": "Open Zalo",
    "contact.phone": "Phone",
    "contact.call": "Call now",
    "contact.address": "Address",
    "contact.addr": "An Trung Hamlet, Dinh An Commune, Go Quao District, Kien Giang Province, Vietnam",
    "contact.map": "Open in Google Maps",

    "sheet.made": "Made with",
    "sheet.material": "Material",
    "sheet.size": "Size",
    "sheet.colors": "Colors",
    "sheet.ask": "Ask on Zalo",
    "sheet.call": "Call",

    "footer.rights": "Copyright ©",
    "footer.made": "Designed and crafted in Vietnam."
  }
};
