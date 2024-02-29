import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Mesa escritorio',
      description: 'Excelente mesa para escribir',
      price: 500
    },
    {
      id: 2,
      name: 'Teclado inalambrico',
      description: 'Tecaldo de bajo consumo',
      price: 110
    }
  ];

  constructor() { }

  findAll(): Observable<Product[]> {
    return of(this.products)
  }

}
