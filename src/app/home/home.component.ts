import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryTreeModel} from "../shared-model/category-tree.model";
import {CategoryService} from "../category/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  categoryTree: CategoryTreeModel = new CategoryTreeModel();
  categoryMenu: boolean = false;

  constructor(public categoryService: CategoryService,
              public router: Router,
             ) {
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
    this.categoryMenu = !this.categoryMenu;
    this.router.navigate([`categories/${categorySlug}`])
      .then();
  }


}
