import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductPage} from "../shared-model/product-page.model";
import {Observable, Subject} from "rxjs";
import {GlobalVariables} from "../global-variables";

@Injectable({
  providedIn: 'root'
})
export class ProductListService  {

 public defaultFilters: any = {}

  needToReloadProductList$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  public fetchProductPage(page: number, limit: number, searchString: string, sort: string, direction: string): Observable<ProductPage> {

    let url = `${GlobalVariables.baseURL}products?page=${page}&limit=${limit}&searchString=${searchString}&sort=${sort}&direction=${direction}`;
    if (this.defaultFilters['categoryId']) {
      url = url + `&categoryId=${this.defaultFilters['categoryId']}`;
    }

    return this.http.get<ProductPage>(url);
  }

}

