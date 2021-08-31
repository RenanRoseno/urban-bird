import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor() { }

  public getOffers(): Array<String> {
    const offers = ['Oferta1', 'Oferta2', 'Oferta3'];
    return offers;
  }
}
