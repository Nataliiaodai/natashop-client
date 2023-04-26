import {AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductListService} from "./product-list.service";
import {ProductListItem} from "../shared-model/product-list-item.model";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CategoryService} from "../category/category.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
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

  subscription: Subscription;

  constructor(public productListService: ProductListService,
              public router: Router,) {

    console.log('subscribed');
    this.subscription = this.productListService.needToReloadProductList$.subscribe(() => {
      console.log('fetchProductList from SUBSC');
      this.fetchProductList();
    })

  }

  ngOnInit() {
    // this.subscription = this.productListService.needToReloadProductList$.subscribe(() => {
    //    console.log('fetchProductList from SUBSC')
    //    this.fetchProductList();
    //  })
    console.log('ngOnInit from PRODList');

    if (this.router.url === '/client/catalog') {
      this.productListService.defaultFilters['categoryId'] = undefined;
      console.log('fetchProductList from ngOnInit')
      this.fetchProductList();
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('unsubscribed');
  }


  onLimitChange() {
    this.page = 1;
    console.log('fetchProductList from onLimitChange')
    this.fetchProductList();
  }


  fetchProductList() {
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
    console.log('fetchProductList from onSearch')
    this.fetchProductList();
    // if (this.itemsFiltered === 0) {
    // this.router.navigate(['client/catalog/notFound-404'])
    //   .then();
    // }
  };


  onGettingNextPage() {
    this.page += 1;
    console.log('fetchProductList from onGettingNextPage')
    this.fetchProductList();
  }

  onGettingPreviousPage() {
    this.page -= 1;
    console.log('fetchProductList from onGettingPreviousPage')
    this.fetchProductList();
  }

  onGettingPage(totalPages: number) {
    this.page = totalPages;
    console.log('fetchProductList from onGettingPage')
    this.fetchProductList();
  }

  onGetProductDetail(prodSlug: string) {
    console.log(prodSlug);
    this.router.navigate([`${prodSlug}`])
      .then(

      );
  }

}
