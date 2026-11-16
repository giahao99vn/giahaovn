# GiaHao One — Website giới thiệu sản phẩm (`giahao.vn` · `giahaoone.com`)

Website tĩnh (HTML/CSS/JS thuần), phong cách tối giản lấy cảm hứng từ Apple/Google, hỗ trợ song ngữ **Tiếng Việt** (`giahao.vn/`) và **English** (`giahao.vn/en/`), tối ưu chuẩn SEO.

## Cấu trúc thư mục tinh gọn (đẩy lên GitHub)

```
index.html               Trang chính Tiếng Việt (sinh tự động từ scripts/build.js)
en/index.html            Trang Tiếng Anh (sinh tự động từ scripts/build.js)
404.html                 Trang báo lỗi 404
src/index.template.html  Bản mẫu HTML gốc (sửa bố cục HTML tại đây)
css/style.css            Giao diện
js/config.js             ⚙️ Số Zalo/điện thoại, mạng xã hội, địa chỉ, cấu hình SEO
js/i18n.js               🌐 Toàn bộ chữ trên trang theo từng ngôn ngữ
js/products.js           📦 Danh sách 17 sản phẩm (tên, giá, mô tả song ngữ, ảnh, màu...)
js/render.js             Hàm dựng Bento & lưới sản phẩm dùng chung
js/main.js               Tương tác (đổi ngôn ngữ tức thì, lọc, cửa sổ chi tiết, deep-link...)
js/hero3d.js             Mô hình 3D Ví Cơ Khí Quạt Thẻ ở đầu trang (Three.js)
scripts/build.js         Script tạo lại index.html, en/index.html và sitemap.xml
scripts/make-assets.js   Script tạo bộ logo, icon các cỡ và ảnh chia sẻ og-image.jpg
assets/                  Logo (logo.png, logo-mark.png), icon, og-image.jpg & 17 ảnh sản phẩm (900×900px)
sitemap.xml, robots.txt  Sơ đồ trang & chỉ dẫn cho công cụ tìm kiếm
site.webmanifest         Cấu hình PWA / biểu tượng khi lưu ra màn hình chính
_headers                 Cấu hình cache tăng tốc độ tải trang & bảo mật
CNAME                    Tên miền chính (giahao.vn) cho GitHub Pages
```

> **Lưu ý:** Thư mục `giahaoone_com/` (chứa kế hoạch kinh doanh, bảng giá vốn và G-code nội bộ) đã được chặn tự động trong `.gitignore` để không bị đẩy lên GitHub công khai. Nếu bạn kéo-thả thủ công lên web GitHub, **không kéo thư mục `giahaoone_com`**.

## Quy trình sửa sản phẩm / nội dung

Khi bạn sửa `js/products.js`, `js/i18n.js` hoặc `js/config.js`, hãy chạy lệnh sau trong Terminal để cập nhật lại HTML tĩnh phục vụ Google SEO và `sitemap.xml`:

```bash
osascript -l JavaScript scripts/build.js
```

## Những điểm đã tối ưu SEO

- **Pre-render HTML tĩnh 100%:** Toàn bộ chữ và 17 sản phẩm có sẵn trong mã nguồn `index.html` và `en/index.html`, giúp Googlebot, Bing và Cốc Cốc thu thập dữ liệu ngay lập tức không cần chờ JavaScript.
- **Đa ngôn ngữ chuẩn Quốc tế (`hreflang` + `canonical`):** Tách URL riêng cho Tiếng Việt (`/`) và Tiếng Anh (`/en/`) kèm liên kết chéo `hreflang="vi"`, `hreflang="en"`, `hreflang="x-default"`.
- **Dữ liệu có cấu trúc Schema.org (`JSON-LD`):**
  - `LocalBusiness` (đầy đủ tên thương hiệu + các biến thể *"Gia Hào One"*, logo, SĐT, địa chỉ, tọa độ `GeoCoordinates`, giờ mở cửa, khoảng giá và mạng xã hội `sameAs`).
  - `WebSite`, `WebPage`, `BreadcrumbList`.
  - `ItemList` + `Product` + `Offer` / `AggregateOffer` (có giá bán `VND` và trạng thái `InStock` cho cả 17 sản phẩm để hiển thị Rich Snippets giá trên Google).
- **Tối ưu tốc độ & Core Web Vitals (LCP / CLS):**
  - `preload` ảnh chính, `fetchpriority="high"` cho ô Bento đầu tiên, `loading="lazy"` và khai báo sẵn `width="900" height="900"` cho toàn bộ ảnh sản phẩm.
  - Tổng dung lượng toàn bộ website (kể cả 17 ảnh sản phẩm, logo, icon, HTML/CSS/JS) chỉ **~2.6 MB**.
