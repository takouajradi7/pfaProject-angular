import { Injectable } from '@angular/core';
import { equipe } from '../model/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  
  equipes : equipe[];

  constructor() {
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
  
  }

