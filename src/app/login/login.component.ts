import { Component, OnInit } from '@angular/core';
import { login } from '../model/login.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  login= new login ();

  erreur: number=0;

  constructor(private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin()
  {
    {
      this.authService.login(this.login).subscribe({
        next: (data) => {
          let jwToken = data.headers.get('Authorization')!;
          this.authService.saveToken(jwToken);
           this.router.navigate(['/']); 
        },
        error: (err: any) => {
        this.erreur = 1; 
        }
        });
}
  }
}

  


