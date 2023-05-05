import { Injectable } from '@angular/core';
import { login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  log_user: login[] = [{"username":"admin","password":"123","roles":['ADMIN']},
                    {"username":"pfa","password":"123","roles":['USER']} ];
                    
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


  constructor() { }
}
