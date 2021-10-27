import { OfferDetailedDto } from './../../core/services/offer/contracts/offer-detailed-dto';
import { OffersService } from 'src/app/core/services/offer/offers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './offer-description.component.html',
  styleUrls: ['./offer-description.component.scss'],
  providers: [OffersService]
})
export class OfferDescriptionComponent implements OnInit {

  offerItems: OfferDetailedDto[] = [];
  offer: OfferDetailedDto | undefined;
  id: number = 1;

  constructor(private activateRoute: ActivatedRoute, private offersService: OffersService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.id);
    this.offersService.getDetailedOffers().subscribe((data: any) => {
      this.offerItems = data["detailedOffersList"];
      this.offer = this.offerItems.find(o=>o.id == this.id);
    });
    //
    console.log(this.offer);
  }
}
