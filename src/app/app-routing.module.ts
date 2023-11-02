import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormulaireVoitureComponent} from "./components/formulaire-voiture/formulaire-voiture.component";

const routes: Routes = [
  { path: '', redirectTo: '/formulaire', pathMatch: 'full' },
  { path: 'formulaire', component: FormulaireVoitureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
