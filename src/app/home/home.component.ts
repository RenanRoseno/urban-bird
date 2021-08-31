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
    this.offers = this.offerService.getOffers();
    console.log(this.offers[0].imagens[0].url)
  }

}
