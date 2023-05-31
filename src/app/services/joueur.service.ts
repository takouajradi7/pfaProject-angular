import { Injectable } from '@angular/core';
import { joueur } from '../model/joueur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
 
  
  joueurs : joueur[];
 // apiURL: string = 'http://localhost:8080/comptes/apiJoueur';
  constructor(private http : HttpClient) {
    this.joueurs=[];
    //this.joueurs =[{idjoueur:1,nom:"pfa",prenom:"pfa",date_nais: new Date("01/01/2023"),lieu_nais:"sfax",numero_tele:24216198,sexe:"femme",Handicape:"ha"}] ;
   }


   listeJoueurs():joueur[] {
    return this.joueurs;
    }

  ajouterJoueur( j: joueur){
    this.joueurs.push(j);
    }
  supprimerJoueur( j: joueur){
      const index = this.joueurs.indexOf(j, 0);
      if (index > -1) {
      this.joueurs.splice(index, 1);
    }}


    consulterJoueur (id:number): joueur{
      return this.joueurs.find(j => j.idjoueur == id)!;
            
    }
    
    miseAjour(j : joueur)
      {
        this.supprimerJoueur(j);
        this.ajouterJoueur(j);
      
      }
    /*listerole():role[] {
        return this.role;
    }

    consulterroles(id:number): role{
        return this.role.find(role => role.idrole == id)!;
    }*/
   /*
   listeJoueurs():Observable<joueur[]> {
    return this.http.get<joueur[]>(this.apiURL);
    }

    ajouterJoueur( u: joueur ) : Observable<joueur[]> {
    return this.http.post<joueur[]>(this.apiURL, u, httpOptions);
    }
    supprimerJoueur(id: number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  miseAjour(u : joueur ) :Observable<joueur>
  {
   return this.http.put<joueur>(this.apiURL, u, httpOptions);
     
   }*/

   

  
  }

