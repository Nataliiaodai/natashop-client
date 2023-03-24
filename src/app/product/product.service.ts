import { Injectable } from '@angular/core';
import {Product} from "../shared-model/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GlobalVariables} from "../global-variables";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getProduct(slug: string):Observable<Product> {
    return this.http.get<Product>(GlobalVariables.baseURL + '/slug/' + slug);
  }

  // http://localhost:3000/api/v1/products/slug/holst-na-podramnike-20h30-sm-hlopok-akril-srednee-zerno-rosa-gallery
}
