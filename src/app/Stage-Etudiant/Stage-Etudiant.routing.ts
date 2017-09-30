import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListStagesComponent} from "./stage/list-stages/list-stages.component";
import {AffStageComponent} from "./stage/aff-stage/aff-stage.component";


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListStagesComponent
      },
      {
        path: 'aff',
        component: AffStageComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageEtudiantRoutingModule {
}
