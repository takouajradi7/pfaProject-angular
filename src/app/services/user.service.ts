import { Injectable } from '@angular/core';
import {User} from '../model/users.model';
import { role } from '../model/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : User[];
  role : role[];  
  constructor() { 
    this.users = [ ];
    this.role = [
      {idrole : 1, nomrole : "PC"},
      {idrole : 2, nomrole : "Imprimante"}
    ];
  
}


  listeUsers():User[] {
    return this.users;
    }

  ajouterUser( u: User){
    this.users.push(u);
    }
  supprimerUser( u: User){
      const index = this.users.indexOf(u, 0);
      if (index > -1) {
      this.users.splice(index, 1);
      }}
      consulterUser (id:number): User{
        return this.users.find(u => u.idUser == id)!;
            
    }
    miseAjour(u : User)
      {
        this.supprimerUser(u);
        this.ajouterUser(u);
      
      }
    listerole():role[] {
        return this.role;
    }

    consulterroles(id:number): role{
        return this.role.find(role => role.idrole == id)!;
    }
  
  }
    
   
    
      
      
