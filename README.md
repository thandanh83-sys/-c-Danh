# NeuroX Finance

NeuroX Finance là ứng dụng quản lý chi tiêu 1 file HTML theo phong cách **Modern Zen + Logic + Glow**.

## Chạy nhanh

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Mở: `http://localhost:4173`

## Tính năng chính

- Signature thương hiệu: **NeuroX** (Neuro + X = tư duy vượt giới hạn).
- 4 màu chủ đạo nền được nhấn mạnh và phối sáng tạo: xanh dương, hồng, vàng, mint.
- Picker View danh mục chi tiêu gọn trang:
  - 🍱 Ăn uống, ☕ Cafe, 🛍️ Mua sắm, 🚗 Di chuyển, 🎮 Giải trí,
  - 📚 Học tập, 💊 Sức khỏe, 🏠 Nhà cửa, ✍️ Mục khác.
- Thêm / sửa / xoá khoản chi.
- Cập nhật thu nhập linh hoạt.
- Lưu dữ liệu vào `localStorage`.
- Biểu đồ 2 chế độ:
  - 1️⃣ Cột
  - 2️⃣ Tròn
- AI Auditor bằng thuật toán:
  - `idealBudgetPerCategory = income / existingCategoryCount`
  - Cảnh báo hồng khi danh mục vượt chuẩn.
  - Cảnh báo đỏ khi tổng chi vượt thu nhập.
- Âm thanh cho toàn bộ hành động quan trọng:
  - thao tác thường,
  - cảnh báo,
  - thành công,
  - vượt mức chi tiêu.
- Theme Engine “🎨 GIAO DIỆN NeuroX”:
  - preset màu,
  - tùy chỉnh color picker,
  - module âm thanh riêng,
  - toggle sáng/tối dạng nút cố định góc phải trên.
