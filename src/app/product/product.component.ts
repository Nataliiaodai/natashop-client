import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared-model/product.model";
import {ProductService} from "./product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryModel} from "../shared-model/category.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{

  prod: Product = new Product();

  mainImage: string = '';
  mainAltImageText: string = '';
  category: CategoryModel = new CategoryModel();

  slug: string = this.route.snapshot.params ['slug'];
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

  onGalleryItemSelected(selectedImage: string) {
      console.log(selectedImage);
      console.log(this.mainImage);
    this.mainImage = selectedImage;
  }

  onImageError(event: any) {
    event.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }

  setProduct(updatedProduct: Product) {
    this.prod = updatedProduct;
    console.log(this.prod);
    this.mainImage = this.prod.medias[0]?.variantsUrls?.large;
    this.mainAltImageText = this.prod.medias[0]?.altText.uk;
  }


}
