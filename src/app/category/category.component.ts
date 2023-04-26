import {Component, OnInit} from '@angular/core';
import {CategoryService} from "./category.service";
import {HomeService} from "../home/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryModel} from "../shared-model/category.model";
import {ProductListService} from "../product-list/product-list.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  category: CategoryModel = new CategoryModel();

  constructor(private categoryService: CategoryService,
              private homeService: HomeService,
              private router: Router,
              private route: ActivatedRoute,
              private productListService: ProductListService) {
  }

  ngOnInit() {
    console.log('ngOnInit in Category Component', this.route.snapshot.params ['categorySlug']);

    this.categoryService.needReloadCategory$.subscribe(() => {
      this.fetchCategory(this.route.snapshot.params ['categorySlug']);
    })

     this.fetchCategory(this.route.snapshot.params ['categorySlug']);
  }


  fetchCategory(slug: string) {
    this.categoryService.fetchCategoryBySlug(slug)
      .subscribe((res ) => {
        console.log("fetched category", res);
        this.category = res;
        console.log(this.category.id)
        this.productListService.defaultFilters.categoryId = this.category.id;
        this.productListService.needToReloadProductList$.next();
      }
    )
  }


  // async getCategoryId() : Promise<number> {
  //   return 1;
  // }




}
