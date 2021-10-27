import { Injectable } from "@angular/core";
import { Ad } from "./core/components/adds-list/adds-list.component";

@Injectable({
    providedIn: 'root'
  })
export class AdsService {
    parentAds: Ad[] = [
      {
        title: 'Автомобиль',
        description: 'Самый быстрый',
        // image: 
      },
      {
        title: 'Катер',
        description: 'Белый катер',
       // image: 
      },
      {
        title: 'Квартира',
        description: 'В Москве',
        //image: 
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

function https(https: any): File | undefined {
  throw new Error("Function not implemented.");
}
  