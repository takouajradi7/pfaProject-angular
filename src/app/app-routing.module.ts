import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: "users", component : UsersComponent},
  {path: "add-users", component : AddUsersComponent},
  {path: "", redirectTo: "app", pathMatch: "full" },
  {path: "updateUser/:id", component: UpdateUsersComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
