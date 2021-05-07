import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private httpService: HttpService, private routerService: Router) { }

  showAlert: boolean = false;

  ngOnInit(): void {
  }

  submitQuery(formData) {
    this.httpService.postQuery(formData.value).subscribe(res => {
      formData.reset()
      this.showAlert = true

    }, err => {
      console.log(err)
    })
  }

}
