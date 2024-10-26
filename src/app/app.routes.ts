// app.routes.ts
import { Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: BannerComponent }, // Homepage
  { path: 'categories', component: CategoriesComponent }, // Categories listing
  { path: 'products', component: FeaturedProductsComponent }, // Product details
  { path: 'rental', component: RentalComponent }, // Rental listings
  { path: 'login', component: LoginComponent }, // Login page
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes
];
