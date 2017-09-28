import { Injectable } from '@angular/core';
import { TableData } from '../interface/table-data';

@Injectable()
export class CartService {
  cartData: TableData[] = [];
  cartCount = 0;
  constructor() { }

  onUpdate(incoming: TableData) {
    this.cartData.push(incoming);
    this.cartCount = this.cartData.length;
  }
  getCart() {
    return this.cartData;
  }

}
