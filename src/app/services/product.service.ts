import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL= 'http://localhost:3000/products'
  constructor(
    private http: HttpClient 
  ) { }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL)
  }
  getDetailProduct(id: any):Observable<Product>{
    return this.http.get<Product>(`${this.URL}/${id}`)
  }
}
