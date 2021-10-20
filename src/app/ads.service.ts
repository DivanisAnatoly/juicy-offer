import { Injectable } from "@angular/core";
import { Ad } from "./core/components/adds-list/adds-list.component";

@Injectable({
    providedIn: 'root'
  })
export class AdsService {
    parentAds: Ad[] = [
      {
        title: 'Автомобиль',
        description: 'Самый быстрый'
      },
      {
        title: 'Катер',
        description: 'Белый катер'
      },
      {
        title: 'Квартира',
        description: 'В Москве'
      }
    ];
  
    deleteAd(index: number) {
      if (index > -1) {
        this.parentAds.splice(index, 1);
      }  
    }
  
    addAd(newAd: Ad) {
      this.parentAds.push(newAd);  
    }
  }
  