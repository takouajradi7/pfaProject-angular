import { Component, OnInit } from '@angular/core';
import { comite } from '../model/comite.model';
import { ComiteService } from '../services/comite.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-add-comite',
  templateUrl: './add-comite.component.html',
})
export class AddcomiteComponent implements OnInit {
  newcomite= new comite();

  constructor(private comiteService: ComiteService, private router : Router) { }

  ngOnInit(): void {
  }
  
  addcomite(){
    console.log(this.newcomite);
    this.comiteService.ajouterComite(this.newcomite);
    this.router.navigate(['comite']);
  }
}
  


