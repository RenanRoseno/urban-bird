import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private offerService: OfertasService
  ) { }

  ngOnInit(): void {
    console.log(this.offerService.getOffers())
  }

}
