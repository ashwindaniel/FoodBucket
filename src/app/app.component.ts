import { Component, OnInit } from '@angular/core';
import { TableData } from './interface/table-data';

import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Food Bucket';
  cartCount = 0;
  public cart: TableData[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartCount = CartService.length;
  }
}
