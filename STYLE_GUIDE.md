# QUY CHUẨN SẢN PHẨM, VẬT LIỆU & HÌNH ẢNH — GIAHAO ONE (`giahao.vn`)

Tài liệu này định hình chiến lược vật liệu thực tế (vốn thấp, dễ tìm mua tại Việt Nam, ứng dụng cao, giá hợp lý) và quy chuẩn hình ảnh chuẩn Studio dựa trên bộ 9 ảnh gốc trong `assets/reference/`.

---

## 1. Nguyên Tắc Cốt Lõi Khi Phát Triển Sản Phẩm (Giai Đoạn Khởi Nghiệp)

1. **Vật liệu quen thuộc, sẵn có tại Việt Nam, vốn nhập thấp:**
   - Ưu tiên các vật liệu có thể mua lẻ từng tấm/thanh/mét dễ dàng với giá tốt mà không cần tồn kho lớn.
2. **Chi phí sản xuất thấp — Giá bán dễ tiếp cận:**
   - Tối ưu thiết kế để thời gian chạy máy CNC mini (dưới 25 phút/món) và máy in 3D (dưới 2 giờ/món) ngắn, ít hao vật tư, giúp sản phẩm có mức giá hợp lý để khách hàng mới dễ dàng mua trải nghiệm lần đầu.
3. **Ứng dụng thực tế cao & Hoàn thiện kỹ lưỡng để xây dựng lòng tin:**
   - Giải quyết các nhu cầu thiết thực hàng ngày (gọn bàn làm việc, đỡ điện thoại/laptop, giữ dây cáp, hộp đựng đồ nhỏ, đèn ngủ, quà tặng bàn học).
   - Sản phẩm tuy làm từ vật liệu phổ thông (gỗ thông, gỗ sồi, nhựa PLA mờ, vải bố) nhưng ăn điểm ở **sự chỉn chu**: gỗ chà nhám mịn tới P400 lau dầu kỹ, nhựa in 3D dày dặn chắc tay, mặt đáy luôn dán lót nỉ/gỗ bần để không làm trầy bàn của khách.

---

## 2. Hệ Vật Liệu Thực Tế & Dễ Tìm Mua tại Việt Nam

1. **Gỗ tự nhiên phổ thông (Phay CNC 3 trục mini):**
   - **Gỗ thông (Pine loại AA không mắt):** Sáng màu (`#e5c79e`), nhẹ, mềm, rất dễ phay trên CNC mini mà không hại mũi dao, giá thành cực kỳ kinh tế.
   - **Gỗ sồi (Oak) & Gỗ dẻ gai (Beech):** Phổ biến tại Việt Nam (`#c89f6a`), cứng cáp, thớ gỗ đẹp, phù hợp làm khay bút, lót ly, đế đèn, giá đỡ.
2. **Nhựa in 3D (Qidi Max 4 & Snapmaker U1):**
   - **PLA mờ (Matte PLA) & PETG:** Dễ mua sẵn tại Việt Nam, bề mặt nhám lì sang trọng, che vân lớp in tốt, bền màu.
3. **Vải & Vật liệu lót phổ thông (Thủ công hoàn thiện):**
   - **Vải bố (Canvas mộc) & Vải nỉ ép (Felt 2–3mm):** Rẻ, bền, dễ cắt dán thủ công làm lớp lót êm chống trầy hoặc túi/khay đựng.
   - **Gỗ bần (Cork tấm mỏng):** Dán đáy lót ly, đáy khay gỗ giúp chống trượt và cách nhiệt tốt.
4. **Mica & Phụ kiện kim loại nhỏ dễ mua lẻ:**
   - **Mica Đài Loan (trong suốt / trắng sữa 2–5mm):** Dễ mua lẻ khổ A4/A3, phay CNC không bị chảy nhựa.
   - **Nhôm tấm mỏng (1–3mm), thanh/ống đồng thau nhỏ, nam châm trắng Neodymium, khoen inox:** Chi phí chỉ vài nghìn đồng/chi tiết nhưng giúp sản phẩm thông minh và bền bỉ hơn hẳn.

---

## 3. Quy Chuẩn Kỹ Thuật Ảnh Sản Phẩm (Chuẩn Bộ 9 Ảnh Gốc)

- **Độ phân giải & Tỉ lệ:** `900 × 900 px` (Vuông `1:1`), chủ thể chiếm `55% – 65%` ở trung tâm khung hình.
- **Phông nền (Seamless Studio Cyclorama):**
  - Phông vô cực liền mạch màu xám trắng trung tính (`#dfe3e8` ở trên chuyển nhẹ xuống `#ebeef3` ở dưới).
  - Với đèn phát sáng: nền dìm tối xuống `#c3c3c5` → `#cbcfd2`.
- **Ánh sáng & Góc chụp:**
  - Softbox tản sáng góc `40°` trên-trái (`5600K`), bóng đổ tiếp xúc ngắn và mềm ngay dưới đáy.
  - Tiêu cự `85mm` không méo phối cảnh; góc máy `10°–15°` (vật thể đứng) hoặc `25°–30°` (vật thể nằm ngang).
- **Quy tắc Đạo cụ:** Không dùng đạo cụ trang trí thừa; chỉ dùng tối đa 1 vật dụng quen thuộc (bút đen, điện thoại, kẹp giấy, sen đá) khi cần minh họa công năng.

---

## 4. Công thức Prompt Chuẩn cho AI Image Generation

```text
Studio product photography of [MÔ TẢ SẢN PHẨM VỚI VẬT LIỆU THỰC TẾ: GỖ THÔNG / GỖ SỒI / PLA MỜ / VẢI BỐ / VẢI NỈ / MICA / NHÔM MỎNG], shot at a [15-degree / 25-degree] angle, centered alone on a seamless cool neutral light-gray studio cyclorama background (#e2e5ea top to #edeff3 bottom). Strictly zero extra props, no table edges, generous negative space (subject occupying 60% of the 1:1 square frame). Soft diffused 5600K studio softbox lighting from top-left casting a short, soft contact shadow underneath. Authentic tactile material textures (natural light pine or oak wood grain, visible fine 3D-printed matte PLA layer lines, natural cotton canvas or felt fabric). Shot on 85mm studio lens, f/8, zero perspective distortion, no text, no watermarks.
```
