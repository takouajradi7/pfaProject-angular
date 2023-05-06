import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserGuard } from './user.guard';



const routes: Routes = [
  {path: "users", component : UsersComponent},
  {path: "add-users", component : AddUsersComponent, canActivate:[UserGuard]},
  {path: "", redirectTo: "users", pathMatch: "full" },
  {path: "updateUser/:id", component: UpdateUsersComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
