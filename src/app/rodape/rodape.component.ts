import { Component, OnInit } from '@angular/core';
import { Oferta } from '../models/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor(
    private offersService: OfertasService
  ) { }

  ngOnInit(): void {
    this.offersService.getOffersByCategory('restaurante')
    .then((res : Array<Oferta>) => {
      console.log(res);
    })
  }

}
