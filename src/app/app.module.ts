import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { JoueurComponent } from './joueur/joueur.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
>>>>>>> 70d525109bd4eb17425ce57104037ec135306e00

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUsersComponent,
    UpdateUsersComponent,
    LoginComponent,
    ForbiddenComponent,
    AddJoueurComponent,
    JoueurComponent,
    EquipeComponent,
    AddEquipeComponent,
    UpdateJoueurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
