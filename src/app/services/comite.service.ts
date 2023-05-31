import { Injectable } from '@angular/core';
import { comite } from '../model/comite.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ComiteService {
  
  //apiURL: string = 'http://localhost:8080/comptes/apiComite';

  comites: comite[];

  constructor(private http : HttpClient) {
    this.comites = [];
    //this.joueurs =[{idjoueur:1,nom:"pfa",prenom:"pfa",date_nais: new Date("01/01/2023"),lieu_nais:"sfax",numero_tele:24216198,sexe:"femme",Handicape:"ha"}] ;
  }
  /*
  listeComites():Observable<comite[]> {
    return this.http.get<comite[]>(this.apiURL);
    }

    ajouterComite( u: comite ) : Observable<comite[]> {
    return this.http.post<comite[]>(this.apiURL, u, httpOptions);
    }
    supprimerComite(id: number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  miseAjour(u : comite ) :Observable<comite>
  {
   return this.http.put<comite>(this.apiURL, u, httpOptions);
     
   }*/





  
  listeComites(): comite[] {
    return this.comites;
  }

  ajouterComite(com: comite) {
    this.comites.push(com);
  }
  supprimerComite(com: comite) {
    const index = this.comites.indexOf(com, 0);
    if (index > -1) {
      this.comites.splice(index, 1);
    }
  }
  consulterComite(id: number): comite {
    return this.comites.find(j => j.idcom == id)!;

  }
  miseAjourCom(com: comite) {
    this.supprimerComite(com);
    this.ajouterComite(com);

  }
  /*listerole():role[] {
      return this.role;
  }

  consulterroles(id:number): role{
      return this.role.find(role => role.idrole == id)!;
  }*/

}

