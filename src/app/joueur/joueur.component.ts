import { Component, OnInit } from '@angular/core';
import { joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {

  

  
  Joueurs? : joueur[];    //un tableau de produits
  constructor(private joueurService: JoueurService,
              public authService: AuthService) {  

  }

  ngOnInit(): void {
    this.Joueurs=this.joueurService.listeJoueurs();
  }
  deleteJoueur(j:joueur)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.joueurService.supprimerJoueur(j);
    } 

}
