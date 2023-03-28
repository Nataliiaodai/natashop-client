import {Component, OnInit} from '@angular/core';
import {ProductListService} from "./product-list.service";
import {ProductListItem} from "../shared-model/product-list-item.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  sortInput: string = '';

  page: number = 1;
  limit: number = 25;
  searchString: string = '';
  sort: string = '_id';
  direction: string = 'desc';

  productList: ProductListItem [] = [];
  pagesTotal = 0;
  itemsTotal = 0;
  itemsFiltered = 0;

  constructor(public productListService: ProductListService,
              public router: Router) {
  }

  ngOnInit() {
    this.fetchAndSaveResponseData();
  }


  onLimitChange() {
    this.page = 1;
    this.fetchAndSaveResponseData();
  }


  fetchAndSaveResponseData() {
    this.productListService.fetchProductPage(this.page, this.limit, this.searchString, this.sort, this.direction)
      .subscribe((productPageResponse) => {
        console.log(productPageResponse);
        this.productList = productPageResponse.data;
        this.pagesTotal = productPageResponse.pagesTotal;
        this.itemsTotal = productPageResponse.itemsTotal;
        this.itemsFiltered = productPageResponse.itemsFiltered;
        this.page = productPageResponse.page;
      })
  }

  onImageError(event: any) {
    event.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }

  onSearch(sortInput: string) {
    this.searchString = sortInput;
    this.page = 1;
    this.fetchAndSaveResponseData();
    // if (this.itemsFiltered === 0) {
      // this.router.navigate(['client/catalog/notFound-404'])
      //   .then();
    // }
  };


  onGettingNextPage() {
      this.page += 1;
      this.fetchAndSaveResponseData();
  }

  onGettingPreviousPage() {
      this.page -= 1;
      this.fetchAndSaveResponseData();
  }

  onGettingPage(totalPages: number) {
    this.page = totalPages;
    this.fetchAndSaveResponseData();
  }

  onGetProductDetail(prodSlug: string) {
    console.log(prodSlug);
    this.router.navigate([`${prodSlug}`])
      .then();
  }

}
