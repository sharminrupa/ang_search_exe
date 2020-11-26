import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinddisctrictComponent } from "./finddisctrict/FinddisctrictComponent";
import { ProductsearchComponent } from './productsearch/productsearch.component';

const routes: Routes = [
  { path: '', component: ProductsearchComponent},
  { path: 'find', component: FinddisctrictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
