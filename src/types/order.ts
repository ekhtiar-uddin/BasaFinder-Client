export interface IOrder {
  properties: IOrderProperty[];
  coupon?: string;
  shippingAddress: string;
  paymentMethod: string;
}

export interface IOrderProperty {
  property: string;
  quantity: number;
  color: string;
}
