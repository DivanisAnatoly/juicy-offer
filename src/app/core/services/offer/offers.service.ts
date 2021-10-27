import { OfferDetailedDto } from './contracts/offer-detailed-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers() {
    return this.http.get('assets/fakebackend/offer-items.json')
  }

  getDetailedOffers(){
    return this.http.get('assets/fakebackend/detailed-offers.json');
  }
}