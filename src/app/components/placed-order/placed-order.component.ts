import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-placed-order',
  templateUrl: './placed-order.component.html',
  styleUrls: ['./placed-order.component.scss']
})
export class PlacedOrderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  orderReciept
  products_ordered
  shipping_details
  payment_details
  payment_details_mode
  bill_details

  ngOnInit(): void {
    this.orderReciept = this.cartService.orderSummary
    this.products_ordered = this.orderReciept.items_ordered
    this.shipping_details = this.orderReciept.Shipping_details
    this.payment_details = this.orderReciept.Payment_details
    this.bill_details = this.orderReciept.bill_summary
    this.payment_details_mode = this.payment_details.PaymentMode
  }

}
