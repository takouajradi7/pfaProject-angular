import { Injectable } from '@angular/core';
import { comite } from '../model/comite.model';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  
  comites : comite[];

  constructor() {
    this.comites=[];
    //this.joueurs =[{idjoueur:1,nom:"pfa",prenom:"pfa",date_nais: new Date("01/01/2023"),lieu_nais:"sfax",numero_tele:24216198,sexe:"femme",Handicape:"ha"}] ;
   }

  listeComites():comite[] {
    return this.comites;
    }

  ajouterComite( com: comite){
    this.comites.push(com);
    }
  supprimerComite( com: comite){
      const index = this.comites.indexOf(com, 0);
      if (index > -1) {
      this.comites.splice(index, 1);
      }}
      consulterComite (id:number): comite{
        return this.comites.find(j => j.idcom == id)!;
            
    }
    miseAjourCom(com : comite)
      {
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

