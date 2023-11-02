import { Component } from '@angular/core';
import {JwtService} from "../../service/jwt.service";

@Component({
  selector: 'app-formulaire-voiture',
  templateUrl: './formulaire-voiture.component.html',
  styleUrls: ['./formulaire-voiture.component.css']
})
export class FormulaireVoitureComponent {

  constructor(private jwtService: JwtService) {}
  nom: string = '';
  prenom: string = '';
  age: number = 0;
  ville: string = '';
  vehicule: string = '';
  stripeToken: string = '';

  submitForm() {

    const formData = {
      nom: this.nom,
      prenom: this.prenom,
      age: this.age,
      ville: this.ville,
      vehicule: this.vehicule,
      stripeToken: this.stripeToken
    };

    this.stripeToken = this.jwtService.createJWT(formData);
  }
}
