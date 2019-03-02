import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {PostDemandClass , DemandClass } from './../classes/demand-class'

@Injectable()
export class DemandService{

    constructor(private httpclient : HttpClient,
        private PostDemandClass : PostDemandClass ) {}

        
    getDemand() : Observable <any> {
        return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://shielded-refuge-93317.herokuapp.com");
    }
    postDemand(year : PostDemandClass ) : Observable <any> {
         return this.httpclient.post("https://cors-anywhere.herokuapp.com/https://shielded-refuge-93317.herokuapp.com", year)
    }

// getSkfOrders() : Observable<any> {
//    return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/place-order");
// }

// postSkfOrder(data : SkfOrderClass) : Observable<any> {
//     return this.httpclient.post("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/place-order",data);
// }


}