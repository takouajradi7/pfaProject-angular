import { Injectable } from '@angular/core';
import {User} from '../model/users.model';
import { role } from '../model/role.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://localhost:8080/comptes/api';
  users : User[];
  role : role[];  
  constructor(private http : HttpClient) { 
    this.users = [ ];
    this.role = [{idrole:1,nomrole:"role_admin"},
                {idrole:2,nomrole:"role_association"},
                {idrole:3,nomrole:"role_ligue"}];
  }


  listeUsers():Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
    }

  ajouterUser( u: User ) : Observable<User[]> {
    return this.http.post<User[]>(this.apiURL, u, httpOptions);
    }
  supprimerUser(id: number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
      
 consulterUser(id: number): Observable<User>{
          const url = `${this.apiURL}/${id}`;
          return this.http.get<User>(url);
 }
  miseAjour(u : User ) :Observable<User>
   {
    return this.http.put<User>(this.apiURL, u, httpOptions);
      
    }
    /*
    listerole():Observable<role[]> {
      return this.http.get<role[]>(this.apiURL+"/cat");
    }*/
    

    consulterRole(id:number): role{
        return this.role.find(role => role.idrole == id)!;
    }
    listerole():role[] {
      return this.role;
    }
  
  }
    
   
    
      
      
