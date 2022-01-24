import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http: HttpClient) { }

  getCep(cep:string): Observable<any> {
    const url: string = `https://viacep.com.br/ws/${cep}/json`;
    return this.http.get(url);
  }

}

export interface Adress{
  logradouro:string;
  bairro:string;
  localidade:string;
  uf:string;
}
