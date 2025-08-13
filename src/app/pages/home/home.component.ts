import { Component, Input } from '@angular/core';
import {  PRODUCTS} from '../../data/product';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  products = PRODUCTS;
  constructor(private router: Router) {}
  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }

}
