import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {path: 'client/catalog', component: ProductListComponent},
  {path: 'client/home', component: HomeComponent},
  {path: ':slug', component: ProductComponent},
  {path: 'categories/:categorySlug', component: CategoryComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
