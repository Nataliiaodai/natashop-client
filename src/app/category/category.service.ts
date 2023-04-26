import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {CategoryModel} from "../shared-model/category.model";
import {GlobalVariables} from "../global-variables";
import {CategoryTreeModel} from "../shared-model/category-tree.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  needReloadCategory$ = new Subject<void>();

  constructor(private http: HttpClient,
              public router: Router,) { }

  public fetchCategoryList(): Observable<CategoryTreeModel> {
    let url = `${GlobalVariables.baseURL}categories/tree`;
    console.log("GET " + url)
    return this.http.get<CategoryTreeModel>(url);
  };

  public fetchCategoryBySlug(slug: string): Observable<CategoryModel> {
    let url = `${GlobalVariables.baseURL}categories/` + slug;
    console.log("GET " + url)
    return this.http.get<CategoryModel>(url);

  };


  // public fetchCategoryPage(page: number, limit: number, searchString: string, sort: string, direction: string, categoryId: number)
  //   : Observable<ProductPage> {
  //   let url = `${GlobalVariables.baseURL}products?page=${page}&limit=${limit}
  //   &searchString=${searchString}&sort=${sort}&direction=${direction}&categoryId=${categoryId}`;
  //   console.log("GET" + url);
  //   console.log(categoryId);
  //   return this.http.get<ProductPage>(url);
  // }



}
