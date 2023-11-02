import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // Importez les clés d'API depuis votre environnement
import { HttpClient } from '@angular/common/http';
import { Stripe, StripeOptions } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  private stripe: Stripe;

  constructor(private http: HttpClient) {
    // Initialisez Stripe.js avec vos clés d'API depuis l'environnement
    this.initializeStripe();
  }

  private async initializeStripe() {
    // Utilisez les options pour configurer Stripe, si nécessaire
    const options: StripeOptions = {};
    this.stripe = await Stripe.create(environment.stripePublicKey, options);
  }

  async createCheckoutSession(priceId: string) {
    try {
      // Assurez-vous que Stripe est correctement initialisé avant d'utiliser ses fonctionnalités
      if (!this.stripe) {
        await this.initializeStripe();
      }

      const session = await this.http.post('/create-checkout-session', { priceId }).toPromise() as any;

      // Redirigez l'utilisateur vers la page de paiement Stripe Checkout
      await this.stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error(error);
    }
  }
}
