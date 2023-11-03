import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'; // Assurez-vous d'importer le package JWT

@Component({
  selector: 'app-transaction-validee',
  templateUrl: './transaction-validee.component.html',
  styleUrls: ['./transaction-validee.component.css']
})
export class TransactionValideeComponent implements OnInit {
  transactionId: string = '';
  jwt: string = '';
  decodedJwt: any; // Définissez le type approprié pour vos données JWT

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.transactionId = params['transaction_id'];
      this.jwt = params['jwt'];

      // Utilisez un service JWT pour décoder le JWT
      const jwtHelper = new JwtHelperService();
      this.decodedJwt = jwtHelper.decodeToken(this.jwt);
    });
  }
}
