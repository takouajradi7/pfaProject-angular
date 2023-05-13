import { Component, OnInit } from '@angular/core';
import { comite } from '../model/comite.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ComiteService } from '../services/comite.service';

@Component({
  selector: 'app-update-comite',
  templateUrl: './update-comite.component.html',
  styles: [
  ]
})
export class UpdatecomiteComponent implements OnInit {

  currentcomite = new comite();
  //role! : role[];
  //updatedroleid? : number;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private comiteService: ComiteService) { }

  ngOnInit(): void {
    //this.role = this.comiteService.listerole();
    this.currentcomite= this.comiteService.consulterComite(this.activatedRoute.snapshot.params['idcom']);
    //this.updatedroleid=this.currentcomite.roleUser.idrole;
  }

  updatecomite() {
    //this.currentUser.roleUser = this.UserService.consulterroles(this.updatedroleid!);
    this.comiteService.miseAjourCom(this. currentcomite = new comite());
    this.router.navigate(['comite']);
  }

}
