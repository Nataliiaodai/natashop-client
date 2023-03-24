import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path: 'client/catalog', component: ProductListComponent},
   {path: 'client/catalog/detail:productId', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
