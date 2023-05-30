import { Component, OnInit } from '@angular/core';
import { joueur } from '../model/joueur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurService } from '../services/joueur.service';


@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styles: [
  ]
})
export class UpdateJoueurComponent implements OnInit {

  currentJoueur = new joueur();
  //role! : role[];
  //updatedroleid? : number;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private joueurService: JoueurService) { }

  ngOnInit(): void {
    //this.role = this.joueurService.listerole();
    this.currentJoueur = this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params['idJoueur']);
    //this.updatedroleid=this.currentJoueur.roleUser.idrole;
  }

  updateJoueur() {
    //this.currentUser.roleUser = this.UserService.consulterroles(this.updatedroleid!);
    this.joueurService.miseAjour(this. currentJoueur = new joueur());
    this.router.navigate(['joueur']);
  }

}
