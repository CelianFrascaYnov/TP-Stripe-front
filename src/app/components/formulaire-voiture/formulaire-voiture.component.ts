import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-voiture',
  templateUrl: './formulaire-voiture.component.html',
  styleUrls: ['./formulaire-voiture.component.css']
})
export class FormulaireVoitureComponent {
  nom: string = '';
  prenom: string = '';
  age: number = 0;
  ville: string = '';
  vehicule: string = '';
  stripeToken: string = '';

  submitForm() {
    // Ici, vous pouvez envoyer les données du formulaire à votre backend,
    // puis utiliser Stripe et SendinBlue pour effectuer les opérations nécessaires.
    console.log('Données du formulaire :', {
      nom: this.nom,
      prenom: this.prenom,
      age: this.age,
      ville: this.ville,
      vehicule: this.vehicule,
      stripeToken: this.stripeToken
    });
  }
}
