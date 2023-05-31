import { Injectable } from '@angular/core';
import { equipe } from '../model/equipe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  //apiURL: string = 'http://localhost:8080/comptes/apiEquipe';
  equipes : equipe[];

  constructor(private http : HttpClient) {
    this.equipes=[];
    //this.joueurs =[{idjoueur:1,nom:"pfa",prenom:"pfa",date_nais: new Date("01/01/2023"),lieu_nais:"sfax",numero_tele:24216198,sexe:"femme",Handicape:"ha"}] ;
   }


   listeEquipes():equipe[] {
    return this.equipes;
    }

  ajouterEquipe( eq: equipe){
    this.equipes.push(eq);
    }
  supprimerEquipe( eq: equipe){
      const index = this.equipes.indexOf(eq, 0);
      if (index > -1) {
      this.equipes.splice(index, 1);
      }}
      consulterEquipe (id:number): equipe{
        return this.equipes.find(j => j.ideq == id)!;
            
    }
    miseAjourEq(eq : equipe)
      {
        this.supprimerEquipe(eq);
        this.ajouterEquipe(eq);
      
      }
    /*listerole():role[] {
        return this.role;
    }

    consulterroles(id:number): role{
        return this.role.find(role => role.idrole == id)!;
    }*/




 /*
   listeEquipes():Observable<equipe[]> {
    return this.http.get<equipe[]>(this.apiURL);
    }

    ajouterEquipe( u: equipe ) : Observable<equipe[]> {
    return this.http.post<equipe[]>(this.apiURL, u, httpOptions);
    }
    supprimerEquipe(id: number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  miseAjour(u : equipe ) :Observable<equipe>
  {
   return this.http.put<equipe>(this.apiURL, u, httpOptions);
     
   }*/




   
  
  
  }

