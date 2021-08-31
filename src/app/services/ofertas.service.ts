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
}
