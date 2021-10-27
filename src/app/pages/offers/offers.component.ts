import { OffersService } from 'src/app/core/services/offer/offers.service';
import { Component, OnInit } from '@angular/core';
import { OfferItemDto } from 'src/app/core/services/offer/contracts/offer-item-dto';

@Component({
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  providers: [OffersService]
})
export class OffersComponent implements OnInit {

  offerItems: OfferItemDto[]=[];

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getOffers().subscribe((data:any) => this.offerItems=data["offersList"]);
  }

}
