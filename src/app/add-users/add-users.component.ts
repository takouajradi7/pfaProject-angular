import { Component, OnInit } from '@angular/core';
import {User} from '../model/users.model';
import { UserService } from '../services/user.service';
import { role } from '../model/role.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  newUser= new User();
  role? : role[];
  newidrole! : number;
  newrole! : role;

  constructor(private UserService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.role = this.UserService.listerole();

  }
  addUser() {
    this.newrole = this.UserService.consulterroles(this.newidrole);
    this.newUser.roleUser = this.newrole;
    this.UserService.ajouterUser(this.newUser);
    this.router.navigate(['users']);

  }


}
