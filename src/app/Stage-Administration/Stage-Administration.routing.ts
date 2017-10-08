import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListStagesComponent} from "./stage/list-stages/list-stages.component";

import {ArchiveComponent} from "./stage/list-archive/list-archive.component";


import {AddStageComponent} from "./stage/add-stage/add-stage.component";


import {AddStageEtudiantComponent} from "./stage/add-stage-etudiant/add-stage-etudiant.component";





export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListStagesComponent
      },


      {
        path: 'archive',
        component: ArchiveComponent
      },

      {
        path: 'add',
        component: AddStageComponent
      },

      {

      path: 'add/etudiant',
      component: AddStageEtudiantComponent
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageAdministrationRoutingModule {
}
