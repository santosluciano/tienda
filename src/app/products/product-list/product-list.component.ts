import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(response => {
      this.productList = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}  
        } as Product;
      })
    });
  }

  share() {
    window.alert('Producto compartido!');
  }

  onNotify() {
    window.alert('Sera notificado cuando el producto este en stock!');
  }

}
