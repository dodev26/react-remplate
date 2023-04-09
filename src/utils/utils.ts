export const getNamePropertyVi = (key: string) => {
  switch (key) {
    case 'Humidity':
      return 'Độ ẩm'
    case 'Impurities':
      return 'Tạp chất'
    case 'Size':
      return 'Kích thước'
    case 'Thickness':
      return 'Độ dày'
    case 'Color':
      return 'Màu sắc'
    case 'Packing':
      return 'Đóng gói'
    case 'Origin':
      return 'Xuất xứ'
    case 'DeliveryPort':
      return 'Cảng giao hàng'
    default:
      return key
  }
}
