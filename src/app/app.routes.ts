import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { RestaturantesComponent } from "./restaturantes/restaturantes.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurantes', component: RestaturantesComponent },
    { path: 'diversao', component: DiversaoComponent }
]