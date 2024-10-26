import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getCategories(): Observable<any[]> {
    // Mock data - replace with actual API call
    const categories = [
      {
        name: 'Homemade Food Products',
        imageUrl: 'assets/homemade-product.jpg',
        link: '/categories/homemade-food',
      },
      {
        name: 'Sewing Cloths',
        imageUrl: 'assets/set-of-sewing-accessories-picjumbo-com.jpg',
        link: '/categories/sewing-cloths',
      },
      {
        name: 'Home Decor Products',
        imageUrl: 'assets/home-decor.jpg',
        link: '/categories/home-decor',
      },
      {
        name: 'Festival Cloths',
        imageUrl: 'assets/festival-cloths.jpg',
        link: '/categories/festival-cloths',
      },
    ];
    return of(categories); // Return as an observable
  }
}
