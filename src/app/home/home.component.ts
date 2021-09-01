import { Component, OnInit } from '@angular/core';
import { Oferta } from '../models/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public offers: Array<Oferta> = [];

  constructor(
    private offerService: OfertasService
  ) { }

  ngOnInit(): void {
    this.offerService.getOffersPromise()
      .then(
        (offers: Array<Oferta>) => this.offers = offers,
      )
      .catch(
        (param => console.log(param.message))
      )


    this.offerService.getOffersPromiseAsync()
      .then(
        (offers: Array<Oferta>) => {
          this.offers = offers;
          console.log("3 seg após foi executada")
        })
      .catch(
        (param => console.log(param.message))
      )
  }

}
