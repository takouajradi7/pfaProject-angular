import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserGuard } from './user.guard';
import { JoueurComponent } from './joueur/joueur.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';



const routes: Routes = [
  {path: "users", component : UsersComponent},
  {path: "add-users", component : AddUsersComponent, canActivate:[UserGuard]},
  {path: "", redirectTo: "users", pathMatch: "full" },
  {path: "updateUser/:id", component: UpdateUsersComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'joueur', component: JoueurComponent},
  {path: 'add-joueur', component: AddJoueurComponent},
  {path: 'equipe', component: EquipeComponent},
  {path: 'add-equipe', component: AddEquipeComponent},
  {path: "updateJoueur/:idJoueur", component: UpdateJoueurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
