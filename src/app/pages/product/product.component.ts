import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PRODUCTS} from '../../data/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../../cart/cart.component';
import { MatDialog } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,MatSelectModule,MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  product: any;
  selectedFlavor: any;
  selectedSize: string | null= null;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find(p => p.id === id);
    if (this.product) {
      this.selectedFlavor = this.product.flavors[0];
     
    }
  }

  changeFlavor(flavor: any) {
    this.selectedFlavor = flavor;
  }

  addToCart() {
    //this.selectedSize = this.product.sizes[0];
    this.dialog.open(CartComponent, {
      width: '350px',
      position: { right: '10px', top: '25px' },
      data: {
        product: this.product,
        size: this.selectedSize || this.product.sizes[0],
        flavor: this.selectedFlavor
      }
    });
  }
}