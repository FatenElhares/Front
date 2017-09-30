import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Layouts
import {FullLayoutComponent} from './layouts/full-layout.component';
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'stageadmin',
        loadChildren: "./Stage-Administration/Stage-Administration.module#StageAdministrationModule"
      },
      {
        path: 'stageenseig',
        loadChildren: "./Stage-Enseignant/Stage-Enseignant.module#StageEnseignantModule"
      },
      {
        path: 'stageetudiant',
        loadChildren: "./Stage-Etudiant/Stage-Etudiant.module#StageEtudiantModule"
      }
    ],


    /*canActivate: [
     CanActivateViaAuthGuard
     ]*/
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
