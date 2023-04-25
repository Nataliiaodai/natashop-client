import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryTreeModel} from "./shared-model/category-tree.model";
import {CategoryService} from "./category/category.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-client-proj';
  categoryTree: CategoryTreeModel = new CategoryTreeModel();
  hideCategoryMenu: boolean = true;
  // visibleCategoryId: number = 50;
  visibleCategoryId: number = 0;


  constructor(public router: Router,
              private categoryService: CategoryService) {
  }


  ngOnInit() {
    this.fetchCategoryTree();
  }

  onMouseOver(id: number) {
    console.log('hovered on category Id: ', id);
    this.visibleCategoryId = id;
    this.hideCategoryMenu = false;
  }

  onMouseLeave() {
    console.log('leaved');
    this.hideCategoryMenu = true;
  }

  fetchCategoryTree() {
    this.categoryService.fetchCategoryList()
      .subscribe((categoryTreeResponse) => {
        console.log(categoryTreeResponse,  ' FROM APP FetchTree');
        this.categoryTree = categoryTreeResponse;
        this.setVisibleCategoryId();
      })
  };

  private setVisibleCategoryId() {
    if (this.router.url !== '/client/home') {
      this.visibleCategoryId = this.categoryTree.data[0]._id;
    }
    console.log('onGetCategoryDetail  NAVIGATE', this.visibleCategoryId);
  }

  onGetCategoryDetail(categorySlug: string) {
    console.log(categorySlug);
    this.router.navigate([`categories/${categorySlug}`])
      .then(() => {


      });

  }

}
