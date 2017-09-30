import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListStagesComponent} from "./stage/list-stages/list-stages.component";
import {EditStageComponent} from "./stage/edit-stage/edit-stage.component";


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListStagesComponent
      },
      {
        path: 'edit',
        component: EditStageComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageEnseignantRoutingModule {
}
