import { Component, OnInit } from '@angular/core';
import { User } from '../model/users.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { role } from '../model/role.model';

@Component({
  selector: 'app-update-users',
  templateUrl:'./update-users.component.html',
  styles: [
  ]
})
export class UpdateUsersComponent implements OnInit {

  currentUser = new User();
  role! : role[];
  updatedroleid? : number;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.listerole().
    subscribe(r => {this.role = r;
    console.log(r);
    });
    this.UserService.consulterUser(this.activatedRoute.snapshot.params['id']).
    subscribe( u =>{ this.currentUser = u; 
      this.updatedroleid =   this.currentUser.roleUser.idrole;
    
    } ) ;
    
  }

  updateUser() {
    this.currentUser.roleUser = this.role.find(cat => cat.idrole == this.updatedroleid)!;
         this.UserService.miseAjour(this.currentUser).subscribe(u => {
      this.router.navigate(['users']); }
      );
  }

}
