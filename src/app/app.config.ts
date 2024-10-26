import { provideRouter, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// Define your routes
const routes: Routes = [
  { path: '', component: BannerComponent }, // Homepage
  { path: 'categories', component: CategoriesComponent }, // Categories listing
  { path: 'products', component: FeaturedProductsComponent }, // Product details
  { path: 'rentals', component: FooterComponent }, // Rental listings
  { path: 'login', component: HeaderComponent }, // Login page
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes
];

// Create your appConfig
export const appConfig = {
  providers: [
    provideRouter(routes) // Provide the router here
  ]
};
