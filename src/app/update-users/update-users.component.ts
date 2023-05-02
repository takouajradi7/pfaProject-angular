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
    this.role = this.UserService.listerole();
    this.currentUser = this.UserService.consulterUser(this.activatedRoute.snapshot.params['id']);
    this.updatedroleid=this.currentUser.roleUser.idrole;
  }

  updateUser() {
    this.currentUser.roleUser = this.UserService.consulterroles(this.updatedroleid!);
    this.UserService.miseAjour(this.currentUser);
    this.router.navigate(['users']);
  }

}
