import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
type Flavour = { name: string; color: string };
type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  sizes: string[];
  flavours: Flavour[];
};

type CartItem = {
  product: Product;
  size: string;
  flavour: string;
  quantity: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}


