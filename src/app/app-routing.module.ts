import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AllUsersComponent} from "./all-users/all-users.component";
import {AnketaComponent} from "./anketa/anketa.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {DialogComponent} from "./dialog/dialog.component";


const routes: Routes = [
  {
    path:'', component:MainLayoutComponent, children: [
      {path: '', redirectTo: 'anketa', pathMatch: 'full'},
      {path:'anketa', component:AnketaComponent},
      {path:'all-users', component:AllUsersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
