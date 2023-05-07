import { Component, OnInit } from '@angular/core';
import { joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  newJoueur = new joueur();

  constructor(private joueurService: JoueurService, private router : Router) { }

  ngOnInit(): void {
  }

  addJoueur(){
    console.log(this.newJoueur);
    this.joueurService.ajouterJoueur(this.newJoueur);
    this.router.navigate(['joueur']);
  }
}
