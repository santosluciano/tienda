import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    
    items = [];
    private cartQty: BehaviorSubject<number>;

    constructor(
        private http: HttpClient
    ){
        this.cartQty = new BehaviorSubject<number>(0);
    }

    addToCart(product) {
        this.incrementQty();
        this.items.push(product);
    }
    
    getItems() {
        return this.items;
    }
    
    clearCart() {
        this.items = [];
        this.clearQty();
        return this.items;
    }    

    getShippingPrices() {
        return this.http.get('/assets/shipping.json');
    }

    incrementQty(): void {
        this.cartQty.next(this.cartQty.value+1);
    }

    decrementQty(): void {
        this.cartQty.next(this.cartQty.value+1);
    }

    clearQty(): void {
        this.cartQty.next(0);
    }

    getQty(): Observable<number> {
        return this.cartQty.asObservable();
    }
}