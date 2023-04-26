import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryTreeModel} from "./shared-model/category-tree.model";
import {CategoryService} from "./category/category.service";
import {CategoryModel} from "./shared-model/category.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-client-proj';
  categoryTree: CategoryTreeModel = new CategoryTreeModel();
  hideCategoryMenu: boolean = true;
  visibleCategoryId: number = 0;
  category: CategoryModel = new CategoryModel();

  // categorySlug: string = this.route.snapshot.params ['categorySlug'];



  constructor(public router: Router,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              ) {
  }


  ngOnInit() {
    this.fetchCategoryTree();
  }

  onMouseOver(id: number) {
    // console.log('hovered on category Id: ', id);
    this.visibleCategoryId = id;
    this.hideCategoryMenu = false;
  }

  onMouseLeave() {
    // console.log('leaved');
    this.hideCategoryMenu = true;
  }

  fetchCategoryTree() {
    this.categoryService.fetchCategoryList()
      .subscribe((categoryTreeResponse) => {
        console.log(categoryTreeResponse, ' FROM APP FetchTree');
        this.categoryTree = categoryTreeResponse;
        this.setVisibleCategoryId();
      })
  };

  private setVisibleCategoryId() {
    if (this.router.url !== '/client/home') {
      this.visibleCategoryId = this.categoryTree.data[0]._id;
    }
    console.log('setVisibleCategoryId ', this.visibleCategoryId);
  }

  onGetCategoryDetail(categorySlug: string) {
    console.log(categorySlug);
    this.router.navigate([`categories/${categorySlug}`])
      .then(() => {
        // this.setVisibleCategoryId();
        this.categoryService.needReloadCategory$.next();
      });

  }


  //
  // onGetCategoryDetail(categorySlug: string) {
  //   console.log(categorySlug);
  //   this.categoryMenu = !this.categoryMenu;
  //   // this.router.navigate([`categories/${categorySlug}`])
  //   this.categoryService.getCategoryDetail(categorySlug)
  // }

}
