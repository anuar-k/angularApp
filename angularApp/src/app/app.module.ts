import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CategoriesComponent} from "./views/categories/categories.component";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CategoriesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
