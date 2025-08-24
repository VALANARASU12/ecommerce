import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addItem(item: any) {
    const items = this.cart.value;
    items.push(item);
    this.cart.next(items);
  }

  clear() {
    this.cart.next([]);
  }

  getItems() {
    return this.cart.value;
  }
}
