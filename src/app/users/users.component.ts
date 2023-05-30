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
    //this.Users=this.UserService.listeUsers();
    this.chargerUsers();

  }
  chargerUsers(){
    this.UserService.listeUsers().subscribe(u => {
      console.log(u);
      this.Users = u;
      });
  }

  deleteUser(u:User)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf){}
      this.UserService.supprimerUser(u.id).subscribe(() => {
        console.log("produit supprimé");
        this.chargerUsers();    ;
    } )
  }

}
