import {JwtService} from "./service/jwt.service";

import { BrowserModule } from '@angular/platform-browser';
import { FormulaireVoitureComponent } from './components/formulaire-voiture/formulaire-voiture.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import { TransactionValideeComponent } from './components/transaction-validee/transaction-validee.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireVoitureComponent,
    TransactionValideeComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
