import { Injectable } from '@angular/core';
import { TableData } from '../interface/table-data';

@Injectable()
export class CartService {
  cartData: TableData[] = [];

  constructor() {
    console.log('inside cart');
  }

  onUpdate(incoming: TableData) {
    this.cartData.push(incoming);
  }
  getCart() {
    return this.cartData;
  }

}
