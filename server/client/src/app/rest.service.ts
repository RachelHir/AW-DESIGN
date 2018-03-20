import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";




@Injectable()
export class RestService implements RestService {
  private url:string = 'http://localhost:3000/api';
  private refreshRate:number = 60000;
  
 

  constructor(private http:Http) { }
  

    showProduct(group):Observable<any> {
    return this.http.get(this.url +'/new?group='+ group )
      .map(res=>res.json());
  }
   showProductdetails(_id):Observable<any> {
    return this.http.get(this.url +'/new/product-details?_id='+ _id )
      .map(res=>res.json());
  }

admin(data:Object){
    return this.http.post(this.url + '/admin', data);

  }



}
