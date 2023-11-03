import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormulaireVoitureComponent} from "./components/formulaire-voiture/formulaire-voiture.component";
import {TransactionValideeComponent} from "./components/transaction-validee/transaction-validee.component";

const routes: Routes = [
  { path: '', redirectTo: '/formulaire', pathMatch: 'full' },
  { path: 'formulaire', component: FormulaireVoitureComponent },
  { path: 'transaction-validee', component: TransactionValideeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
