import { Component, OnInit } from '@angular/core';
import { equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  newEquipe= new equipe();

  constructor(private equipeService: EquipeService, private router : Router) { }

  ngOnInit(): void {
  }
  
    addEquipe(){
      console.log(this.newEquipe);
      this.equipeService.ajouterEquipe(this.newEquipe);
      this.router.navigate(['equipe']);
    }
  }
  


