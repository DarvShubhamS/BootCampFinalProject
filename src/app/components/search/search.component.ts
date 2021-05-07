import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchValue: string;
  val: [];
  searchValueChanged = new Subject<string>();
  searchResult$: Observable<[]>;
  res;
  notFound;
  loading;
  setDisabled;



  constructor(private productService: ProductsService) {

  }

  // function binded to input field to detect input field changes

  changed(val) {

    // passing all characters typed in input box via subject
    this.searchValueChanged.next(val);

    //setting loading to true to show spinner until ietm not found and setting input field disable to false 
    this.loading = true
    this.setDisabled = false
  }



  ngOnInit(): void {

    //performing debouncing of 2 seconds duration to find the item specified in the search box

    this.searchValueChanged.pipe(debounceTime(2000)).subscribe(() => {

      this.loading = false
      this.setDisabled = true

      // finding the item searched
      this.res = this.productService.products.find(el => el.name.toLowerCase().includes(this.searchValue))
      if (this.res === undefined) {
        this.notFound = true
      }
    })
  }

  // function to clear search result

  clear() {
    this.res = "";
    this.searchValue = "";
    this.setDisabled = false

  }

  // function to hide item not found section

  hideNotFound() {
    this.notFound = false;
    this.searchValue = "";
    this.setDisabled = false
  }


}
