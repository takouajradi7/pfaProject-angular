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
  role!: role[];
  newidrole! : number;
  newrole! : role;
  

  constructor(private UserService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.UserService.listerole().
          subscribe(r => {this.role = r;
            console.log(r);
        });

  }
  addUser() {
    this.newUser.roleUser = this.role.find(r => r.idrole == this.newidrole)!;
    this.UserService.ajouterUser(this.newUser)
                      .subscribe(u => {
                      console.log(u);
                      this.router.navigate(['users']);
                      }); 
  


}}
