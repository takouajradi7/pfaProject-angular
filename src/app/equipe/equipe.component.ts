import { Component, OnInit } from '@angular/core';
import { equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipes? : equipe[];    //un tableau de produits

  constructor(private equipeService: EquipeService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.equipes=this.equipeService.listeEquipes();
  }
 
  
   
  deleteJoueur(eq:equipe)
      {
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
          this.equipeService.supprimerEquipe(eq);
      } 
  
  }
  


