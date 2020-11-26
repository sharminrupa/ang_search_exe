import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { ProductService } from './service/product.service';
import { FormsModule } from '@angular/forms';
import { FinddisctrictComponent } from "./finddisctrict/FinddisctrictComponent";
import { DevisionService } from './service/division.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsearchComponent,
    FinddisctrictComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, DevisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
