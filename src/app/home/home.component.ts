import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryTreeModel} from "../shared-model/category-tree.model";
import {CategoryModel} from "../shared-model/category.model";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  categoryTree: CategoryTreeModel = new CategoryTreeModel();
  category: CategoryModel = new CategoryModel();

  constructor(public homeService: HomeService,
              public router: Router,
             ) {
  }

  ngOnInit() {
    this.fetchCategoryTree();
  }


  fetchCategoryTree() {
    this.homeService.fetchCategoryList()
      .subscribe((categoryTreeResponse) => {
        console.log(categoryTreeResponse);
        this.categoryTree = categoryTreeResponse;
        for (let mainCategory of this.categoryTree.data) {
          console.log(mainCategory.name);
        }

      })
  };

  // fetchCategory(id: number) {
  //   this.categoryService.fetchCategory(id)
  //     .subscribe((categoryResponse) => {
  //       console.log(`fetchCategory id=${id} categoryResponse=${categoryResponse}`);
  //       this.setCategory(categoryResponse);
  //     });
  // };

  // setCategory(updatedCategory: CategoryModel) {
  //   console.log("Setting this.category = " + JSON.stringify(updatedCategory));
  //   this.category = updatedCategory;
  // }


}
