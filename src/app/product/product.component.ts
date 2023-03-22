import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MediasObjectModel} from "../shared-model/medias.obect.model";
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared-model/product.model";
import {GlobalVariables} from "../global-variables";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{

  prod: Product = new Product();

  // showId = true;
  id = 0;
  slug: string = '';
  idToGetProduct = this.route.snapshot.params ['productId'];
  currentURL: any = this.router.url;

  constructor(private http: HttpClient,
              public productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    console.log("ngOnInit. this.router.url=" + this.router.url);

    if (this.idToGetProduct) {
      console.log('ngOnInit. idToGetProduct=' + this.idToGetProduct);
      this.productService.getProduct(this.slug, this.idToGetProduct)
        .subscribe((response) => {
          console.log("Done productService.getProduct. old this.prod = " + JSON.stringify(this.prod));
          console.log("Done productService.getProduct. response = " + JSON.stringify(response));
          this.setProduct(response);
          console.log("Done productService.getProduct. new this.prod = " + JSON.stringify(this.prod));

        });
    }

    console.log("ngOnInit. Done.");
  }




  setProduct(updatedProduct: Product) {
    console.log("Setting this.prod = " + JSON.stringify(updatedProduct));
    this.prod = updatedProduct;
  }



  onFileSelected (event: any) {
    console.log(event);
    const selectedImageFile : File = event.target.files[0];
    const formData = new FormData();
    formData.append('image', selectedImageFile, selectedImageFile.name )
    this.http.post<MediasObjectModel>(GlobalVariables.baseURL + 'products/media' , formData)
      .subscribe(response => {
        console.log(response);
        this.prod.medias.push(response);
      });
  }



}
