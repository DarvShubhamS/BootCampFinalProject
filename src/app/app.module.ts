import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavigationMainComponent } from './components/navigation/navigation-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/checkout/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpService } from './services/http.service';
import { ProductsService } from './services/products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './services/auth_guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlacedOrderComponent } from './components/placed-order/placed-order.component';
import { HelpComponent } from './components/help/help.component';


const appRoutes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'order-placed', canActivate: [AuthGuard], component: PlacedOrderComponent
  },
  {
    path: 'about-us', component: AboutComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: 'help', component: HelpComponent
  },
  {
    path: '**', redirectTo: 'not-found'
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavigationMainComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent,
    CartComponent,
    AboutComponent,
    NotFoundComponent,
    PlacedOrderComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, ProductsService, CartService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
