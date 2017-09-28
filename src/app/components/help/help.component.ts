import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  obj: any = {};
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  posting() {
    console.log('posting');
    this.obj = {
      'name': 'Rava',
      'Description': 'Breakfast Rava Description',
      'Price': 45
    };
    this.dataService.sendPost('breakfast', this.obj);
  }
}
