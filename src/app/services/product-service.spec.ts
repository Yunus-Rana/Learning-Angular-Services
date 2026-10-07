import { TestBed } from '@angular/core/testing';
import { ProductService } from './product-service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the seeded products', () => {
    const products = service.getProducts();

    expect(products).toHaveLength(9);
    expect(products.slice(0, 3).map(({ name }) => name)).toEqual([
      'Mouse',
      'Keyboard',
      'Screen',
    ]);
    expect(products[3]).toEqual({ id: 4, name: 'Headphones', price: 2500 });
  });
});
