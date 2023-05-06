import { Injectable } from '@angular/core';
import { login } from '../model/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  log_user: login[] = [{"username":"admin","password":"123","roles":['admin']},
                    {"username":"pfa","password":"123","roles":['user']} ];
                    
public loggedUser!:string;

public isloggedIn: Boolean = false;
public roles!:string[];

// verifie si un utilisateur passer en argument 'login'  existe dans le tableau log_user
SignIn(login :login):Boolean{
  let validUser: Boolean = false;
   
  this.log_user.forEach((curUser) => {
  if(login.username== curUser.username && login.password==curUser.password) {
                  validUser = true;   //user trouver

  this.loggedUser = curUser.username;
  this.isloggedIn = true;
  this.roles = curUser.roles;
  localStorage.setItem('loggedUser',this.loggedUser);
  localStorage.setItem('isloggedIn',String(this.isloggedIn));  // caster pour permettre son stockage dans localStorage car isloggedIn est un boolean
  }
  });
  return validUser;
}


  

isAdmin():Boolean{
  if (!this.roles) //this.roles== undefiened on n'a pas de role
      return false;
  return (this.roles.indexOf('admin') >-1);  // si la chaine admin appartient au tableau role 
}

logout() {
  this.isloggedIn= false;
  this.loggedUser = undefined!;
  this.roles = undefined!;
  localStorage.removeItem('loggedUser');
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
}

setLoggedUserFromLocalStorage(login: string) {
  this.loggedUser = login;
  this.isloggedIn = true;
  this.getUserRoles(login);
}

getUserRoles(username: string) {
  this.log_user.forEach((curUser) => {
    if (curUser.username == username) {
      this.roles = curUser.roles;
    }
  });
}

}
