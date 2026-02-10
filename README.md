# NeuroX Finance

NeuroX Finance là trang **1 file HTML duy nhất** chứa đầy đủ:
- Prompt chuyên nghiệp (Claude-friendly, không phụ thuộc @github).
- Code ứng dụng quản lý chi tiêu hiện đại (Zen + Glow + Logic).

## Chạy nhanh

```bash
python3 -m http.server 4173
```

Mở: `http://localhost:4173`

## Tính năng

- Picker View danh mục chi tiêu:
  - 🍱 Ăn uống, ☕ Cafe, 🛍️ Mua sắm, 🚗 Di chuyển, 🎮 Giải trí,
  - 📚 Học tập, 💊 Sức khỏe, 🏠 Nhà cửa, ✍️ Mục khác.
- Thêm/sửa/xóa khoản chi.
- Đổi thu nhập bất kỳ lúc nào.
- Lưu dữ liệu bằng `localStorage`.
- Biểu đồ cột/tròn để so sánh và phân tích.
- Cảnh báo AI theo thuật toán:
  - `idealBudgetPerCategory = income / existingCategoryCount`
  - Cảnh báo hồng khi danh mục vượt ngưỡng.
  - Cảnh báo đỏ khi tổng chi vượt thu nhập.
- Viền sáng + glow đồng bộ cho card/input/button/toggle.
