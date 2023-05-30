import { Injectable } from '@angular/core';
import { joueur } from '../model/joueur.model';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  
  joueurs : joueur[];

  constructor() {
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
  
  }

