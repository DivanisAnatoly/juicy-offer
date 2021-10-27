import { Component, OnInit, Input } from '@angular/core';
import { OfferItemDto } from 'src/app/core/services/offer/contracts/offer-item-dto';

@Component({
  selector: 'app-offers-item',
  templateUrl: './offers-item.component.html',
  styleUrls: ['./offers-item.component.scss']
})
export class OffersItemComponent implements OnInit {
  @Input() offersItem: OfferItemDto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
