import { Component, OnInit } from '@angular/core';
import { TableData } from '../../interface/table-data';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: TableData[];
  public sum = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    // console.log(this.cart[0].Price);
    // console.log(this.cart[0].Price);
    // for (let i = 0; i < this.cart.length; ++i) {
    //   this.sum += this.cart[i].Price;
    // }
  }

}
