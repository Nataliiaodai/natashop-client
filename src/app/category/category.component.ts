import {Component, OnInit} from '@angular/core';
import {ProductListItem} from "../shared-model/product-list-item.model";
import {CategoryService} from "./category.service";
import {HomeService} from "../home/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryModel} from "../shared-model/category.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  sortInput: string = '';

  category: CategoryModel = new CategoryModel();
  categorySlug: string = this.route.snapshot.params ['categorySlug'];

  page: number = 1;
  limit: number = 25;
  searchString: string = '';
  sort: string = '_id';
  direction: string = 'desc';

  productList: ProductListItem [] = [];
  pagesTotal = 0;
  itemsTotal = 0;
  itemsFiltered = 0;

  constructor(private categoryService: CategoryService,
              private homeService: HomeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('ngOnInit in Category Component');
    console.log(this.categorySlug);
    this.fetchCategory(this.categorySlug);
    // this.fetchAndSaveCategoryResponse();
  }

  fetchCategory(slug: string) {
    this.categoryService.fetchCategoryBySlug(slug)
      .subscribe((res ) => {
        console.log(res);
        this.category = res;
         this.fetchAndSaveCategoryResponse(res.id);
        console.log(this.category)
      }
    )
  }

  fetchAndSaveCategoryResponse(categoryId: number) {
    this.categoryService.fetchCategoryPage(this.page, this.limit, this.searchString, this.sort, this.direction, categoryId)
      .subscribe((categoryPageResponse) => {
        console.log(categoryPageResponse);
        console.log(this.category.id);
        this.productList = categoryPageResponse.data;
        this.pagesTotal = categoryPageResponse.pagesTotal;
        this.itemsTotal = categoryPageResponse.itemsTotal;
        this.itemsFiltered = categoryPageResponse.itemsFiltered;
        this.page = categoryPageResponse.page;
      })
  }



  onImageError(event: any) {
    event.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }


  onGettingNextPage() {
    this.page += 1;
    this.fetchAndSaveCategoryResponse(this.category.id);
  }

  onGettingPreviousPage() {
    this.page -= 1;
    this.fetchAndSaveCategoryResponse(this.category.id);
  }

  onGettingPage(totalPages: number) {
    this.page = totalPages;
    this.fetchAndSaveCategoryResponse(this.category.id);
  }

  onSearch(sortInput: string) {
    this.searchString = sortInput;
    this.page = 1;
    this.fetchAndSaveCategoryResponse(this.category.id);
    // if (this.itemsFiltered === 0) {
    // this.router.navigate(['client/catalog/notFound-404'])
    //   .then();
    // }
  };

  onLimitChange() {
    this.page = 1;
    this.fetchAndSaveCategoryResponse(this.category.id);
  }


  onGetProductDetail(prodSlug: string) {
    console.log(prodSlug);
    this.router.navigate([`${prodSlug}`])
      .then();
  }

}
