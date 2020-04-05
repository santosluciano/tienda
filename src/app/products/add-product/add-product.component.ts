import { Component, OnInit, NgModule } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  public documentId = null;
  public currentStatus = 1;
  public newProductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    id: new FormControl('')
  });

  constructor(private productService: ProductService) {
    this.newProductForm.setValue({
      id: '',
      name: '',
      description: '',
      price: 0,
      stock: 0
    });
   }

  ngOnInit(): void {
  }

  public newProduct(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
      let data = {
        id: documentId,
        name: form.name,
        description: form.description,
        price: form.price,
        stock: form.stock
      }
      this.productService.createProduct(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.newProductForm.setValue({
          name: '',
          description: '',
          price: 0,
          stock: 0,
          id: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        id: documentId,
        name: form.name,
        description: form.description,
        price: form.price,
        stock: form.stock
      }
      this.productService.updateProduct(data).then(() => {
        this.currentStatus = 1;
        this.newProductForm.setValue({
          name: '',
          description: '',
          price: 0,
          stock: 0,
          id: ''
        });
        console.log('Documento editado exitósamente');
      }, (error) => {
        console.log(error);
      });
    }
  }



}
