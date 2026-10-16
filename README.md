# GiaHao One — Website giới thiệu sản phẩm

Website tĩnh (HTML/CSS/JS thuần), phong cách tối giản lấy cảm hứng từ Apple/Google, hỗ trợ **Tiếng Việt / English**.
Không cần cài đặt hay build — mở trực tiếp `index.html` là chạy.

## Cấu trúc

```
index.html            Trang chính
css/style.css         Giao diện
js/config.js          ⚙️ Số Zalo/điện thoại, địa chỉ bản đồ, ngôn ngữ mặc định
js/i18n.js            🌐 Toàn bộ chữ trên trang theo từng ngôn ngữ
js/products.js        📦 Danh sách sản phẩm (tên, mô tả song ngữ, ảnh, màu...)
js/main.js            Tương tác (đổi ngôn ngữ, lọc, cửa sổ chi tiết...)
js/hero3d.js          Bình hoa 3D ở đầu trang (Three.js)
assets/products/      Ảnh sản phẩm (ảnh vuông, nền sáng, ~900px)
CNAME                 Tên miền chính cho GitHub Pages
```

## Tuỳ chỉnh

- **Ảnh sản phẩm**: ảnh hiện tại là **ảnh minh hoạ tạo bằng AI** — hãy thay bằng ảnh chụp thật,
  giữ nguyên tên file (vd `assets/products/vase.jpg`) hoặc sửa đường dẫn `image` trong `js/products.js`.
  Mẹo chụp: nền trắng/xám nhạt, ánh sáng tản, sản phẩm ở giữa, ảnh vuông.
- **Sản phẩm**: sửa/thêm trong `js/products.js`. Trường `featured: "a"…"e"` quyết định ô nào hiện trong mục *Nổi bật* (a là ô lớn nhất).
- **Thêm ngôn ngữ** (vd tiếng Trung): thêm `{ code: "zh", label: "中文", short: "中" }` vào `LANGS` và một khối `zh: {...}` trong `js/i18n.js`;
  trong `products.js` thêm `zh: "..."` cho từng trường (thiếu thì tự dùng tiếng Việt).
- **Link theo ngôn ngữ**: `https://giahao.vn/?lang=en`

## Đưa lên mạng với giahao.vn & giahaoone.com

### Cloudflare Pages (khuyên dùng — miễn phí, nhanh)
1. Đẩy thư mục này lên một repo GitHub.
2. https://dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git** → chọn repo.
   Build command: *để trống*; Output directory: `/`.
3. **Custom domains** → thêm `giahao.vn`, `www.giahao.vn`, `giahaoone.com`, `www.giahaoone.com`, làm theo hướng dẫn trỏ DNS.
4. (Tuỳ chọn) Redirect Rule: `giahaoone.com/*` → `https://giahao.vn/$1` (301).

### GitHub Pages
1. **Settings → Pages** → Source: `main` / root. File `CNAME` đã đặt `giahao.vn`.
2. DNS của giahao.vn: bản ghi `A` @ → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `CNAME` www → `<tên-github>.github.io`.
3. giahaoone.com: bật chuyển hướng (URL forwarding) về `https://giahao.vn` tại nhà cung cấp tên miền.
