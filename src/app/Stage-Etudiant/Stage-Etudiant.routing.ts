/**
 * Created by Abbes on 16/06/2017.
 */
/**
 * Created by Abbes on 13/06/2017.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtudiantComponent } from "./etudiant/etudiant.component";
import { ListStagesComponent } from "./stage/list-stages/list-stages.component";


export const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'list',
        component: ListStagesComponent
      },

     /*,
       {
       path: 'add',
       component: AddSessionComponent
       }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageEtudiantRoutingModule {
}
