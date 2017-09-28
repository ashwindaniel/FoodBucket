import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(public http: Http) { }
  getPost(target: string) {
    console.log('Inside fgetpost');
    return this.http.get('http://localhost:3000/' + target)
      .map(res => res.json());
  }
}
