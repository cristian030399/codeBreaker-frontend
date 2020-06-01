import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const codeBreakerURL = 'http://localhost:3000';
// const codeBreakerURL = 'https://dojo-codebreaker.herokuapp.com';
// const codeBreakerURL = '/guessCharacterGenericException';
// https://dojo-codebreaker.herokuapp.com/

@Injectable({
  providedIn: 'root'
})
export class CodeBreakerService {

  constructor(private http: HttpClient) {
   }

  guessCharacter(characterToGuess, character): Observable<any> {
    return this.http.get(codeBreakerURL + '/guessCharacterGenericException?characterToGuess='
      + characterToGuess + '&character=' + character);
  }
}
