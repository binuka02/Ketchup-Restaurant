interface Item {
  name:string,
  price:number,
  quantity:number
}

export interface Order {
  _id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  amount: number;
  items: Item[];
}
