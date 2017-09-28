import { Component, OnInit } from '@angular/core';
import { TableData } from '../../interface/table-data';

import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {

  public tableData: TableData[];
  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.dataService.getPost('dinner').subscribe(tableData => {
      this.tableData = tableData;
    });
  }
  addCart(selectedItem: TableData) {
    this.cartService.onUpdate(selectedItem);
  }
}
