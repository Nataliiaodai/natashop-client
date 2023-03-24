import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared-model/product.model";
import {ProductService} from "./product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{

  prod: Product = new Product();

  slug = this.route.snapshot.params ['slug'];
  constructor(private http: HttpClient,
              public productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    console.log(this.slug);
    if (this.slug) {
      this.productService.getProduct(this.slug)
        .subscribe((response) => {
          this.setProduct(response);
        });
    }
  }


  onImageError(event: any) {
    event.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }

  setProduct(updatedProduct: Product) {
    console.log("Setting this.prod = " + JSON.stringify(updatedProduct));
    this.prod = updatedProduct;
  }


}
