import { Component, OnInit } from '@angular/core';
import { equipe } from '../model/equipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styles: [
  ]
})
export class UpdateEquipeComponent implements OnInit {

  currentEquipe = new equipe();
  //role! : role[];
  //updatedroleid? : number;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private EquipeService: EquipeService) { }

  ngOnInit(): void {
    //this.role = this.joueurService.listerole();
    this.currentEquipe= this.EquipeService.consulterEquipe(this.activatedRoute.snapshot.params['ideq']);
    //this.updatedroleid=this.currentJoueur.roleUser.idrole;
  }

  updateJoueur() {
    //this.currentUser.roleUser = this.UserService.consulterroles(this.updatedroleid!);
    this.EquipeService.miseAjourEq(this. currentEquipe = new equipe());
    this.router.navigate(['equipe']);
  }

}
