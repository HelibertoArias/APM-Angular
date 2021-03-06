import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";

import { FormsModule } from "@angular/forms";
import { ConvertToSpaces } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from "./products/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./products/product-detail.guard";
import { ProductModule } from "./products/product.module";
import { AppRountingModule } from './products/app-routing.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,

    HttpClientModule,

    ProductModule,
    AppRountingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
