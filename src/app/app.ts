import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Product, ProductService } from './services/product-service';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  productData = signal<Product[]>([]);

  constructor(private productService: ProductService) {}

  loadData(): void {
    this.productData.set(this.productService.getProducts());
  }
}
