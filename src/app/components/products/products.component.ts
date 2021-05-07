import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products;
  model_called: boolean = false
  currentCount: number;
  subscription


  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {

    //initilizing products variable with products from product service
    this.products = this.productsService.products

    //setting up subscription for cart items counter
    this.subscription = this.cartService.getCount().subscribe(
      res => {
        this.currentCount = res.value;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  // function add items to cart from home page
  addCart(id) {
    let product = this.productsService.products.find(el => el.id === id)

    // checking if product exists
    let product_exists = this.cartService.cartItem.find(el => el.product_id === product.id)

    // if product exists increasing product quantity count
    if (product_exists) {

      let index = this.cartService.cartItem.indexOf(product_exists)
      this.cartService.cartItem[index].product_quantity += 1

    }

    // if product doesnt exists adding that item to cart 

    else {
      this.cartService.cartItem.push({
        product_name: product.name,
        product_model: product.models[0],
        product_price: product.price,
        product_description: product.description,
        product_quantity: 1,
        product_id: product.id,
        product_total: 0
      },


      )
    }

    //incrementing cart item count by one whenever we add new item to cart

    this.cartService.setCount(this.currentCount, 1);

  }

}
