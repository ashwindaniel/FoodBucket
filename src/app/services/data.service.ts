import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TableData } from '../interface/table-data';
import { AppConfig } from '../interface/app-config';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(public http: Http, private appConfig: AppConfig) { }

  getFood(target: string) {
    return this.http.get('http://localhost:3000' + target)
      .map(res => res.json());
  }
  // sendPost(target: string, sendData: TableData) {
  //   console.log(target);
  //   // headers: RequestOptionsArgs = ('Content-Type: application/json');
  //   this.headers.append('Content-Type', 'application/json');
  //   this.http.post('http://localhost:3000/' + target, JSON.stringify(sendData), this.headers)
  //     .subscribe(
  //     () => { },
  //     err => console.error(err)
  //     );
  // }
}
