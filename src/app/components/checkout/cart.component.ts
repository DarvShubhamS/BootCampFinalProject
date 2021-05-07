import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cart_items
  total_price: number = 0
  final_total_price: number = 0
  shipping_price = 0
  tax_price
  discount_applied
  step: any = 1;
  coupon_code;
  invalid_coupon: boolean = false
  discount_value: number
  pattern_postal = "^[1-9][0-9]{5}$"
  pattern_phone = "[6-9]{1}[0-9]{9}"



  multiStep = new FormGroup({
    cartDetails: new FormGroup({

    }),

    shippingDetails: new FormGroup({
      'firstname': new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'addressOne': new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(20)]),
      'addressTwo': new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(20)]),
      'Country': new FormControl('India', [Validators.required]),
      'City': new FormControl(null, [Validators.required]),
      'postalCode': new FormControl(null, [Validators.required, Validators.pattern(this.pattern_postal)]),
      'Phone': new FormControl(null, [Validators.required, Validators.pattern(this.pattern_phone)]),
      'Delivery': new FormControl('0', Validators.required)
    }),

    PaymentDetails: new FormGroup({
      'PaymentMode': new FormControl('Credit Card', Validators.required),
      'nameOnCard': new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]),
      'cardNumber': new FormControl('', [Validators.required, Validators.minLength(16), Validators.min(1111111111111111), Validators.max(9999999999999999)]),
      'expirationMonth': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(1), Validators.max(12)]),
      'expirationYear': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.min(1111), Validators.max(9999)]),
      'cardCVVNumber': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.min(111), Validators.max(999)])

    })
  })


  //getting shipping form controls
  get shipping_control() { return this.multiStep['controls'].shippingDetails['controls'] }

  //getting payment form controls
  get payment_control() { return this.multiStep['controls'].PaymentDetails['controls'] }


  constructor(private cartService: CartService, private routerService: Router, private httpService: HttpService) { }


  // this function calculates the total amounts user have to pay based on his cart
  cartTotal() {

    //calculating subtotal price
    const total = parseFloat(this.cartService.cartItem.reduce((sum, { product_total }) => sum + product_total, 0)).toFixed(2)

    //setting up subtotal price
    this.total_price = +total
    this.cartService.total_price = this.total_price

    //setting up shipping price
    if (this.cartService.total_price < 10.99) {
      this.cartService.shipping_price = 15
    }
    else {
      this.cartService.shipping_price = 0
    }

    this.shipping_price = this.cartService.shipping_price

    //setting up tax price

    this.tax_price = this.cartService.tax_price

    //calculating the final total price user have to pay

    this.cartService.final_total_price = Math.round(this.cartService.total_price + this.cartService.shipping_price + this.cartService.tax_price)

    //setting up discount if discount is set
    this.discount_applied = this.cartService.coupon_code_applied
    if (this.cartService.coupon_code_applied == true) {
      this.discount_value = Math.round((this.cartService.final_total_price / 100) * 10)
      this.cartService.discount = this.discount_value
      this.cartService.final_total_price = Math.round(this.cartService.final_total_price - (this.cartService.final_total_price / 100) * 10)
    }

    //setting up final price to be rendered 
    this.final_total_price = this.cartService.final_total_price

  }



  ngOnInit(): void {

    this.cart_items = this.cartService.cartItem;
    this.cart_items.map(el => {
      el.product_total = +el.product_price * el.product_quantity
    })


    this.cartTotal();

    this.cartService.hide()


  }


  // form submit function
  submit() {

    // increasing form step count
    this.step = this.step + 1;

    // when all steps are completed storing all checkout information and passing this info to order successful component
    if (this.step == 4) {

      let order = {
        "items_ordered": this.cartService.cartItem,
        "Shipping_details": this.multiStep.value.shippingDetails,
        "Payment_details": this.multiStep.value.PaymentDetails,
        "bill_summary": {
          "subtotal": this.cartService.total_price,
          "shipping": this.cartService.shipping_price,
          "taxes": this.cartService.tax_price,
          "total": this.cartService.final_total_price
        },
        "payment_status": "paid"
      }

      this.cartService.orderSummary = order

      // storing orders made for future reference 

      this.httpService.postOrders(order).subscribe(res => {
        console.log("added data")
      }, err => {
        console.log(err)
      })

      this.cartService.cartItem = []
      this.cart_items = this.cartService.cartItem

      this.total_price = 0
      this.cartService.total_price = this.total_price

      this.cartService.final_total_price = 0;
      this.final_total_price = this.cartService.final_total_price

      this.cartService.coupon_code_applied = false
      this.discount_applied = this.cartService.coupon_code_applied

      this.cartService.setCount(0, 0);



      this.routerService.navigateByUrl('/order-placed')

    }


  }

  // function to go to previous checkout form step
  previous() {
    this.step = this.step - 1;
  }


  // function to update price based on quantity
  modelChanged(val, price, id) {

    let p = this.cartService.cartItem.find(el => el.product_id === id)

    price = val * price
    p.product_total = price;
    console.log(price)

    console.log(this.cartService.cartItem)

    this.cartTotal()



  }

  // function to delete particular cart item
  deleteItem(index) {
    this.cartService.cartItem.splice(index, 1)
    this.cart_items = this.cartService.cartItem
    this.cartService.setCount(this.cartService.cartItem.length, 0)
    this.cartTotal()

    if (this.cartService.cartItem.length === 0) {
      this.cartService.coupon_code_applied = false
    }
  }



  // function to apply coupon code
  applyCode() {
    if (this.coupon_code === "BOOTCAMP_2021") {
      this.cartService.coupon_code_applied = true
      this.discount_value = Math.round((this.cartService.final_total_price / 100) * 10)
      this.cartService.discount = this.discount_value
      this.discount_applied = this.cartService.coupon_code_applied
      this.cartService.final_total_price = Math.round(this.cartService.final_total_price - (this.cartService.final_total_price / 100) * 10)
      this.final_total_price = this.cartService.final_total_price

    }
    else {
      this.coupon_code = ""
      this.invalid_coupon = true
      this.cartService.coupon_code_applied = false
      window.scrollTo(0, 0)
    }
  }

  // functions to set up shipping costs
  set_ShippingNextDay() {
    this.cartService.shipping_price = 20
    this.shipping_price = this.cartService.shipping_price
    this.cartService.final_total_price = Math.round(this.cartService.total_price + this.cartService.shipping_price + this.cartService.tax_price)
    this.final_total_price = this.cartService.final_total_price
  }

  set_ShippingFree() {
    this.cartService.shipping_price = 0
    this.shipping_price = this.cartService.shipping_price
    this.cartService.final_total_price = Math.round(this.cartService.total_price + this.cartService.shipping_price + this.cartService.tax_price)
    this.final_total_price = this.cartService.final_total_price

  }



  ngOnDestroy() {
    // showing cart icon after moving to a new page
    this.cartService.show()
  }

}
