import { Component, OnInit } from '@angular/core';
import { equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipes? : equipe[];    //un tableau de produits

  constructor(private equipeService: EquipeService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.equipes=this.equipeService.listeEquipes();
  }
 
  
  redirectToForm() {
    this.router.navigate(['add-equipe']);
  }
  
   
  deleteEquipe(eq:equipe)
      {
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
          this.equipeService.supprimerEquipe(eq);
      } 
  
  }



  
  





  


