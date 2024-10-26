// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { RentalComponent } from './components/rental/rental.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    FeaturedProductsComponent,
    RentalComponent,
    CategoriesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
}
