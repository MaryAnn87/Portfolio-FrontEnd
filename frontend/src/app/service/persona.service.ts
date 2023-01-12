import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  getPersona() {
    throw new Error('Method not implemented.');
  }
  persURL = 'https://portfolioweb-maryann87.koyeb.app/personas/';

  constructor(private httpClient: HttpClient) { }
  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.persURL +`detail/${id}`);
  }

 /* public save(persona:Persona): Observable<any>{
    return this.httpClient.post<any>(this.persURL + 'create', persona);
  }*/

  public update(id:number, persona:Persona): Observable<any>{
    return this.httpClient.put<any>(this.persURL +`update/${id}`, persona);
  }

  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.persURL + `delete/${id}`);
  }*/

}
