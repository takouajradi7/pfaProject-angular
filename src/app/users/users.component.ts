import { Component, OnInit } from '@angular/core';
import {User} from '../model/users.model';
import { UserService } from '../services/user.service';
import { role } from '../model/role.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  User? : User[];
  constructor(private UserService: UserService ) {  
  }

  ngOnInit(): void {
    this.User=this.UserService.listeUsers();
  }
  deleteUser(p:User)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.UserService.supprimerUser(p);
    } 

}
