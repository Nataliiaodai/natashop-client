import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryModel} from "../shared-model/category.model";
import {GlobalVariables} from "../global-variables";
import {CategoryTreeModel} from "../shared-model/category-tree.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

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


  // setCategory(updatedCategory: CategoryModel) {
  //   console.log("Setting this.category = " + JSON.stringify(updatedCategory));
  //   this.category = updatedCategory;
  // }


}
