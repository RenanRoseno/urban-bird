import { Injectable } from '@angular/core';
import { Oferta } from '../models/oferta.model';
import { offers } from '../utils/utils';
@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private offers: Array<Oferta> = offers;

  constructor() { }

  public getOffers(): Array<Oferta> {
    return this.offers;
  }

  public getOffersPromise(): Promise<Array<Oferta>> {
    return new Promise((resolve, reject) => {
      let success = false;
      if(success)
        resolve(this.offers)
      else
        reject({erro: 500 , message: "NullPointerException"})
    });
  }

  public getOffersPromiseAsync(): Promise<Array<Oferta>> {
    return new Promise((resolve, reject) => {
      let success = true;
      if(success)
        setTimeout(() => resolve(this.offers), 3000)
      else
        reject({erro: 500 , message: "NullPointerException"})
    });
  }
}
