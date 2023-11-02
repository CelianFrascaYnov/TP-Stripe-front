import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private secretKey = 'votre_clé_secrète'; // Remplacez par votre clé secrète

  constructor() {}

  createJWT(formData: any): string {
    const jwtPayload = {
      name: formData.name, // Exemple : récupérez le nom du formulaire
      email: formData.email, // Exemple : récupérez l'e-mail du formulaire
      // Ajoutez d'autres claims au besoin
    };

    // Créez le JWT en utilisant la bibliothèque jsonwebtoken
    const token = jwt.sign(jwtPayload, this.secretKey, { expiresIn: '1h' }); // Vous pouvez ajuster la durée de validité (expiresIn) selon vos besoins

    return token;
  }
}
