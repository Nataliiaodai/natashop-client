import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CarouselModule} from "ngx-owl-carousel-o";
import { HomeComponent } from './home/home.component';
import {TransCategSlugToNamePipe} from "./pipes/transCategIdToName.pipe";
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    TransCategSlugToNamePipe,
    CategoryComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
