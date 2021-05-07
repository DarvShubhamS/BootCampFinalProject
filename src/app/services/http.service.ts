import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class HttpService {
    constructor(private http: HttpClient) { }


    apiUrlQueries = "http://localhost:3000/queries"
    apiUrlOrders = "http://localhost:3000/orders"

    // storing queries in db.json

    postQuery(query) {
        return this.http.post(this.apiUrlQueries, query)
    }

    // storing orders in db.json

    postOrders(order) {
        return this.http.post(this.apiUrlOrders, order)
    }

    // get all orders 

    getAllOrders() {
        return this.http.get(this.apiUrlOrders)
    }

}