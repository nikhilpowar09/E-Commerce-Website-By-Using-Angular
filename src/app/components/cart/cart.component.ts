import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],  
  template: `
    <h2>Your Cart</h2>
    <ul *ngIf="cart.length > 0; else emptyCart">
      <li *ngFor="let product of cart">
        {{ product.name }} - {{ product.price | currency }} x {{ product.quantity }}
        <button (click)="removeFromCart(product.id)">Remove</button>
      </li>
    </ul>
    <ng-template #emptyCart>
      <p>Your cart is empty.</p>
    </ng-template>
    <div *ngIf="cart.length > 0">
      <h3>Total: {{ totalPrice() | currency }}</h3>
      <button (click)="checkout()">Checkout</button>
    </div>
  `,
})
export class CartComponent {
  cart: Product[] = [];

  constructor() {
    this.cart = [
      { id: 1, name: 'Product 1', price: 10, quantity: 1 },
      { id: 2, name: 'Product 2', price: 15, quantity: 2 },
    ];
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(product => product.id !== productId);
  }

  totalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  checkout() {
    alert('Proceeding to checkout...');
  }
}
