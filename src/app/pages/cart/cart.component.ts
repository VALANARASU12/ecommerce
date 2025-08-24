import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, output, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatSelectModule,FormsModule,MatButtonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  total:number | undefined;
  product: any;
  selectedSize: string | undefined;
  selectedFlavor: string;
  quantity = 1;
  totalPrice = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private dialogRef: MatDialogRef<CartComponent>,
    private router: Router
  ) {
    this.product = data.product;
    this.selectedSize = data.size;
    this.selectedFlavor = data.flavor;
    this.total=this.data.product.price * this.data.product.quantity;
  }
  Increase(){
    this.data.product.quantity++;
    this.updateTotal();
  }
  decrease(){
    if(this.data.product.quantity>1){
      this.data.product.quantity--;
      this.updateTotal();
    }
    
  }
  updateTotal(){
    this.total=this.data.product.price*this.data.product.quantity;
  }

  checkout() {
    this.dialogRef.close();
    this.router.navigate(['/checkout']);
  }
  billing(){
    this.dialogRef.close();
    this.router.navigate(['/billing']);
  }
}

