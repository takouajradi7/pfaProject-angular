import { Component, OnInit } from '@angular/core';
import { login } from '../model/login.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  login = new login();

  erreur=0;

  constructor(private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin()
  {
    console.log(this.login);
    // let pour declarer des variables locales dans la methode
    let isValidUser: Boolean = this.authService.SignIn(this.login); // contient le resultat de la methode SignIn 'de la classe AuthService'
    if (isValidUser)
      this.router.navigate(['/']); 
    else
     // alert('Login ou mot de passe incorrecte!');
     this.erreur =1;

}

  

}
