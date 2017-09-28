import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TableData } from '../interface/table-data';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(public http: Http, public headers: Headers) { }

  getPost(target: string) {
    return this.http.get('http://localhost:3000/' + target)
      .map(res => res.json());
  }
  sendPost(target: string, sendData: TableData) {
    console.log(target);
    // headers: RequestOptionsArgs = ('Content-Type: application/json');
    this.headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/' + target, JSON.stringify(sendData), this.headers)
      .subscribe(
      () => { },
      err => console.error(err)
      );
  }
}
