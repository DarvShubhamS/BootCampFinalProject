import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product_id: string
  product
  productReviewLength: number
  product_models
  product_review
  currentCount: number;
  subscription;




  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService,
    private routeService: Router
  ) {

    // subscribing and getting cart item count

    this.subscription = this.cartService.getCount().subscribe(
      res => {
        this.currentCount = res.value;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );


  }


  ngOnInit(): void {

    // finding particular product with its id and initializing the product 

    this.product_id = this.route.snapshot.params['id']
    this.product = this.productService.products.find(el => el.id === this.product_id)
    this.productReviewLength = this.product.reviews.length
    this.product_models = this.product.models
    this.product_review = this.product.reviews

  }


  // function for adding to cart logic
  cartItemAdd(val) {

    // adding the item to cart
    this.cartService.cartItem.push({
      product_name: this.product.name,
      product_model: val.value.model,
      product_price: this.product.price,
      product_description: this.product.description,
      product_quantity: 1,
      product_id: this.product_id,
      product_total: 0
    })

    // incrementing cart item count

    this.cartService.setCount(this.currentCount, 1);

    // setting up subtotal price

    this.cartService.total_price = this.cartService.total_price + parseFloat(this.product.price)

    // after adding item to cart redirecting to cart page

    this.routeService.navigateByUrl('/cart')
  }




  // function for adding item to cart
  addToCart(values) {

    // finding if item  already exists in cart 

    let res = this.cartService.cartItem.find(el => el.product_model === values.value.model)

    if (res) {
      let index = this.cartService.cartItem.indexOf(res)

      // if item with same model exists , increasing it quantity value

      if (this.cartService.cartItem[index].product_model === values.value.model) {
        this.cartService.cartItem[index].product_quantity += 1;
        this.cartService.setCount(this.currentCount, 1);
        this.routeService.navigateByUrl('/cart')
      }

      // if item already exists in cart and doesnt have same model , adding that item to cart

      else {
        this.cartItemAdd(values)

      }

    }

    // if item doesnt exist in cart adding that item in cart

    else {
      this.cartItemAdd(values)
    }

  }

}
