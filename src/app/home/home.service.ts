import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GlobalVariables} from "../global-variables";
import {CategoryTreeModel} from "../shared-model/category-tree.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  public fetchCategoryList(): Observable<CategoryTreeModel> {
    let url = `${GlobalVariables.baseURL}categories/tree`;
    console.log("GET " + url)
    return this.http.get<CategoryTreeModel>(url);
  };


}
