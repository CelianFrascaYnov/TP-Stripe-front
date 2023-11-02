import {JwtService} from "./service/jwt.service";

import { BrowserModule } from '@angular/platform-browser';
import { FormulaireVoitureComponent } from './components/formulaire-voiture/formulaire-voiture.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from "@angular/core";
import {JwtModule} from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['example.com'],
      },
    }),
  ],
  providers: [JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
