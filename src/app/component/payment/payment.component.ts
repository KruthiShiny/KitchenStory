import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  firstname: string =" "
  phone: string =" "
  email: string =" "
  address: string =" "
  
  


  constructor() { }

  ngOnInit(): void {
  }

}
