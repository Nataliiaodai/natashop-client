import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryTreeModel} from "./shared-model/category-tree.model";
import {CategoryService} from "./category/category.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-client-proj';
  categoryTree: CategoryTreeModel = new CategoryTreeModel();
  hideCategoryMenu: boolean = false;


  constructor(public router: Router,
              private categoryService: CategoryService) {
  }


  ngOnInit() {
    this.fetchCategoryTree();
  }


  fetchCategoryTree() {
    this.categoryService.fetchCategoryList()
      .subscribe((categoryTreeResponse) => {
        console.log(categoryTreeResponse);
        this.categoryTree = categoryTreeResponse;

      })
  };

  onGetCategoryDetail(categorySlug: string) {
    console.log(categorySlug);
    // this.categoryMenu = !this.categoryMenu;

    this.router.navigate([`categories/${categorySlug}`])
      .then();
    // console.log(this.router.url);
  }

}
