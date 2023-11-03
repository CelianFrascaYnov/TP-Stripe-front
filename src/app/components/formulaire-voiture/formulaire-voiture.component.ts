import { Component } from '@angular/core';
import { JwtService } from "../../service/jwt.service";
import { HttpErrorResponse } from "@angular/common/http";

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

    this.jwtService.createCheckoutSession(formData).subscribe(
      (response: any) => {
        if (response.sessionId) {
          console.log('Session créée avec succès :', response);

          // Redirigez l'utilisateur vers l'URL retournée par l'API
          window.location.href = response.sessionUrl;
        } else {
          console.error('Réponse inattendue de l\'API :', response);
        }
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          console.error('Erreur HTTP lors de la création de la session :', error);
        } else {
          console.error('Erreur métier lors de la création de la session :', error);
        }
      }
    );

  }
}
