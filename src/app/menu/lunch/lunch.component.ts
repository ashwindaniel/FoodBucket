import { Component, OnInit } from '@angular/core';
import { TableData } from '../../interface/table-data';

import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  public tableData: TableData[];
  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.dataService.getPost('lunch').subscribe(tableData => {
      this.tableData = tableData;
    });
  }
  addCart(selectedItem: TableData) {
    this.cartService.onUpdate(selectedItem);
  }
}
