import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

interface Count {
    value: number;
}


@Injectable()

export class CartService {


    constructor() { }

    //setting up counter for maintaing cart items count on navbar

    private initialCount: Count = { value: 0 };
    private countTracker = new BehaviorSubject<Count>(this.initialCount);


    curr_product = []
    cartItem = []
    orderSummary

    total_price: number = 0
    shipping_price: number = 0
    tax_price: number = 12
    final_total_price: number = 0
    discount: number
    coupon_code_applied: boolean = false

    // setting up variable to hide cart icon from navbar
    visiblity: boolean = true

    // hiding the cart icon from navbar

    hide() {
        this.visiblity = false
    }

    // showing the cart icon from navbar

    show() {
        this.visiblity = true
    }

    // getting current count of cart items counter

    getCount(): Observable<Count> {
        return this.countTracker.asObservable();
    }


    // setting up counter value 

    setCount(val: number, delta: number): void {
        this.countTracker.next({ value: (val + delta) });
    }



}