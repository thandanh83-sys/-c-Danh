# Neurox Finance

Neurox Finance là ứng dụng quản lý chi tiêu 1 file HTML theo phong cách **Modern Zen + Logic + Glow**.

## Chạy nhanh

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Mở: `http://localhost:4173`

## Tính năng chính

- Tiêu đề trung tâm + thông điệp Neuro/X + slogan.
- 4 màu nền chủ đạo nổi bật: đen/trắng/xanh da trời/hồng sáng, phối thêm màu nổi để UI sáng tạo.
- Danh mục khoản chi dạng wheel 1-mục-hiển-thị (cuộn hoặc bấm trái/phải).
- Chỉ hiện ô **Mặt khác** khi chọn danh mục **✍️ Mặt khác**.
- Thêm / sửa / xoá khoản chi.
- Thu nhập độc lập (đổi bất kỳ lúc nào).
- Biểu đồ cột / tròn với chú thích màu cho từng danh mục.
- Cảnh báo AI theo thuật toán:
  - `idealBudgetPerCategory = income / existingCategoryCount`
  - Cảnh báo hồng (vượt ngưỡng danh mục)
  - Cảnh báo đỏ (tổng chi vượt thu nhập)
- Ô **Giao diện NeuroX** đặt cuối trang với bố cục:
  - Sáng tối | Âm thanh
  - Mặc định, Đại dương, Hoàng hôn
  - Rừng xanh, Tím hồng, Zen
  - Tự tùy chỉnh màu
  - Xóa toàn bộ dữ liệu
- Âm thanh phản hồi cho các thao tác chính và trạng thái cảnh báo/thành công.
