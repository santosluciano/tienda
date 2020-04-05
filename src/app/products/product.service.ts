import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private fireStore: AngularFirestore) { }
 
  getAllProducts() {
    return this.fireStore.collection('products').snapshotChanges();
  }

  createProduct(product: Product){
    return this.fireStore.collection('products').add(product);
  }

  updateProduct(product: Product){
    return this.fireStore.doc('products/' + product.id).update(product);
  }

  deletePolicy(productId: string){
    this.fireStore.doc('products/' + productId).delete();
  }

}
