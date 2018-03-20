import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestService } from './rest.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderAwComponent } from './header-aw/header-aw.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './new/new.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderAwComponent,
    FooterComponent,
    AboutComponent,
    NewComponent,
    AdminComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([

    {path : 'home' ,component : HomeComponent},
    {path : 'new' ,component : NewComponent, data: {group:1},},
    {path : 'sale' ,component : NewComponent, data: {group:2},},
    {path : 'men',component : NewComponent, data: {group:3},},
    {path : 'women' ,component : NewComponent,data: {group:5},},
    {path : 'dresses' ,component : NewComponent,data: {group:11},},
    {path : 'skirts' ,component : NewComponent, data: {group:6},},
    {path : 'pants' , component : NewComponent,data: {group:7}},
    {path : 'jackets' , component : NewComponent,data: {group:8},},
    {path : 'shirts' ,component : NewComponent,data: {group:9},},
    {path : 'accessories',component : NewComponent,data: {group:10},},
    {path : 'product-details',component : ProductDetailsComponent,data: {group:10},},
    {path : 'admin',component : AdminComponent,},
    {path : 'new/product-details/:id',component : ProductDetailsComponent},
    {path : '**', redirectTo: 'home', pathMatch: 'full' }
     ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
