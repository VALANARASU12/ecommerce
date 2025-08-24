import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,NgForm, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {



  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert
        ("thank you for the valuable order")
      }
      this.router.navigate(['/home'])
  }
}