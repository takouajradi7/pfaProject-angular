import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';

const routes: Routes = [
  {path: "users", component : UsersComponent},
  {path: "add-users", component : AddUsersComponent},
  {path: "", redirectTo: "users", pathMatch: "full" },
  {path: "updateUser/:id", component: UpdateUsersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
