/* ==========================================================
   CẤU HÌNH — thông tin liên hệ & SEO của GiaHao One
   ========================================================== */
window.SITE_CONFIG = {
  brand: "GiaHao One",
  // Các cách viết/đọc khác của thương hiệu — giúp Google hiểu khi người dùng tìm "gia hào one"
  altNames: ["Gia Hào One", "Gia Hao One", "GiaHaoOne", "giahaoone", "Gia Hào"],
  siteUrl: "https://giahao.vn",   // tên miền chính (không có dấu / ở cuối)
  altDomain: "giahaoone.com",

  phone: "0704141237",            // dùng cho link gọi điện
  phoneIntl: "+84704141237",      // dạng quốc tế cho Schema.org
  phoneDisplay: "0704 141 237",
  zalo: "0704141237",

  address: {
    street: "Ấp An Trung",
    locality: "Xã Định An, Huyện Gò Quao",
    region: "Kiên Giang",
    country: "VN"
  },
  mapQuery: "Định An, Gò Quao, Kiên Giang, Việt Nam",

  social: {
    facebook: { url: "https://www.facebook.com/giahaoone", handle: "@giahaoone" },
    instagram: { url: "https://www.instagram.com/giahaoone", handle: "@giahaoone" },
    tiktok: { url: "https://www.tiktok.com/@giahaoone", handle: "@giahaoone" }
  },

  // Thêm link mạng xã hội khi có (Facebook, TikTok, YouTube, Shopee, Google Business...)
  sameAs: [
    "https://www.facebook.com/giahaoone",
    "https://www.instagram.com/giahaoone",
    "https://www.tiktok.com/@giahaoone"
  ],

  // Chế độ hiển thị giá bán & khai báo người bán (Schema.org Offer):
  // - false (mặc định): Ẩn toàn bộ giá bán (Website trưng bày / giới thiệu sản phẩm thuần túy, không cần thông báo Bộ Công Thương).
  // - true: Hiển thị giá bán trên thẻ sản phẩm, cửa sổ chi tiết và bật Google Merchant Listings (bật sau khi đã thông báo Bộ Công Thương).
  showPrices: false,

  // Cấu hình vận chuyển & đổi trả cho Google Merchant Listings (chỉ kích hoạt khi showPrices: true)
  shipping: {
    rateVnd: "30000",           // phí vận chuyển tiêu chuẩn toàn quốc (VNĐ)
    handlingDays: [1, 2],       // thời gian gia công / khắc tên (1–2 ngày)
    transitDays: [2, 4]         // thời gian giao hàng dự kiến (2–4 ngày)
  },
  returnPolicy: {
    days: 7                     // hỗ trợ đổi trả trong 7 ngày nếu lỗi sản xuất
  },

  defaultLang: "vi"
};
