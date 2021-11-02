//angular
import { Component, Injectable } from '@angular/core';
//primeng
import { PrimeNGConfig } from 'primeng/api';
//сервисы
import { AdsService } from './ads.service';
//компоненты
import { Ad } from './core/components/adds-list/adds-list.component';


//декоратор
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//експортируем 
//компонет приложения
export class AppComponent {
  title = 'announcements'; 


  constructor(public adsService: AdsService, private primengConfig: PrimeNGConfig) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  deleteAd(index: number) {
    this.adsService.deleteAd(index);
  }

  addAd(ad: Ad) {
    this.adsService.addAd(ad);
  }

}
