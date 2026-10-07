import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return [
      { id: 1, name: 'Mouse', price: 1000 },
      { id: 2, name: 'Keyboard', price: 4000 },
      { id: 3, name: 'Screen', price: 10000 },
      { id: 4, name: 'Headphones', price: 2500 },
      { id: 5, name: 'Webcam', price: 3500 },
      { id: 6, name: 'Microphone', price: 4200 },
      { id: 7, name: 'Speakers', price: 3000 },
      { id: 8, name: 'USB Hub', price: 1200 },
      { id: 9, name: 'Laptop Stand', price: 1800 },
    ];
  }
}
