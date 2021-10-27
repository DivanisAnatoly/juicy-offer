import { UserDto } from './../../core/services/user/contracts/user-dto';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfferItemDto } from 'src/app/core/services/offer/contracts/offer-item-dto';
import { UserService } from 'src/app/core/services/user/user.service';
import { OffersService } from 'src/app/core/services/offer/offers.service';

@Component({
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.scss'],
  providers: [UserService, OffersService]
})
export class MyOffersComponent implements OnInit {

  offerItems: OfferItemDto[]=[];
  user: UserDto | undefined;
  users: UserDto[]=[];

  constructor(private userService: UserService,private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getOffers().subscribe((data:any) => this.offerItems=data["offersList"]);
    this.userService.getUser().subscribe((data:any) => this.user=new UserDto(data.name, data.age));
    this.userService.getUsers().subscribe((data: any) => this.users=data["userList"]);
  }

}
