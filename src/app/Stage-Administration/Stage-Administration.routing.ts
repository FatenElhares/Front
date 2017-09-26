import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListStagesComponent} from "./stage/list-stages/list-stages.component";
import {AddStageComponent} from "./stage/add-stage/add-stage.component";


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListStagesComponent
      },
      {
        path: 'add',
        component: AddStageComponent
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
