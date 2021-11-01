import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = 'https://otocar-price-predict.herokuapp.com/';

  constructor(private http: HttpClient) { }
  
  test(data){
    return this.http.post(this.endpoint+ 'prediction',data);
  }

}
