import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private Http : HttpClient) { }

  GetallCustomer() : Observable<any> {
    return this.Http.get<any>('http://localhost:3000/posts')
  }


  // .pipe(map((customer: any) => {
  //   console.log("customers>>", customer);
  // }));
}
