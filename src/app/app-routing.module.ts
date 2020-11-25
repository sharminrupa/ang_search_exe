import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsearchComponent } from './productsearch/productsearch.component';

const routes: Routes = [
  { path: '', component: ProductsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
