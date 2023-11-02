import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken'
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor() {}

  createJWT(formData: any): string {
    var token = jwt.sign(formData, 'LatreeTeam');
    return token;
  }
}
