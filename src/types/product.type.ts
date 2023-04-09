export interface Product {
  id: string
  name: string
  img: string
  desc: string
  detail: {
    Humidity: string
    Impurities: string
    Size: string
    Thickness?: string
    Color: string
    Packing: string
    Origin: string
    DeliveryPort: string
  }
}
