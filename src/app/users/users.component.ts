import { Component, OnInit } from '@angular/core';
import {User} from '../model/users.model';
import { UserService } from '../services/user.service';
import { role } from '../model/role.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users? : User[];    //un tableau de produits
  constructor(private UserService: UserService,
              public authService: AuthService) {  
  }

  ngOnInit(): void {
    this.Users=this.UserService.listeUsers();
  }
  deleteUser(p:User)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.UserService.supprimerUser(p);
    } 

}
