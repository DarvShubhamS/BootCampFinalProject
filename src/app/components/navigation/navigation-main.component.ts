import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.scss']
})
export class NavigationMainComponent implements OnInit {

  items: number = 0;
  subscription;
  inCartPage = false

  constructor(public cartService: CartService, private routerService: Router) { }

  ngOnInit(): void {
    //subscribing to cart item counter
    this.subscription = this.cartService.getCount().subscribe(
      res => {
        this.items = res.value;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  // function to redirect to cart page
  redirectTo() {
    this.routerService.navigateByUrl('/cart')
    this.inCartPage = true
  }

  // function to open side bar on mobile view
  side_open() {
    document.getElementById("ham").style.opacity = "0"
    document.getElementById("sidebar").style.display = "block"
  }

  //function to close side bar on mobile view
  side_close() {
    document.getElementById("sidebar").style.display = "none"
    document.getElementById("ham").style.opacity = "1"
  }


}
