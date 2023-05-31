import { Component, OnInit } from '@angular/core';
import { comite } from '../model/comite.model';
import { ComiteService } from '../services/comite.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comite',
  templateUrl: './comite.component.html',
})
export class ComiteComponent implements OnInit {
  comites? : comite[];    //un tableau de produits

  constructor(private ComiteService: ComiteService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.comites=this.ComiteService.listeComites();
  }
 
  redirectToForm() {
    this.router.navigate(['add-comite']);
  }
   
  deleteComite(com:comite)
      {
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
          this.ComiteService.supprimerComite(com);
      } 
  
  }
  


