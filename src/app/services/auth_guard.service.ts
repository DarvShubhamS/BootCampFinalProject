import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CartService } from "./cart.service";

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private routerService: Router, private cartService: CartService) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


        if (this.cartService.orderSummary !== undefined) {
            return true
        }
        else {
            this.routerService.navigateByUrl('not-found')
            return false
        }
    }


}