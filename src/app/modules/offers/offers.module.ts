import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersItemComponent } from './components/offers-item/offers-item.component';


@NgModule({
  declarations: [
    OffersItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    OffersItemComponent
  ]
})
export class OffersModule { }
