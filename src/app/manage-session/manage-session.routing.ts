import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSessionsComponent } from "./session/list-sessions/list-session.component";
import { ListExamensComponent } from "./examen/list-examens/list-examens.component";
import { ListStationsComponent } from "./station/list-stations/list-stations.component";
import { AddSessionComponent } from "./session/add-session/add-session.component";
import { AddExamenComponent } from "./examen/add-examen/add-examen.component";
import { EtudiantComponent } from "./etudiant/etudiant.component";
import { ListStagesComponent } from "./stage/list-stages/list-stages.component";


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListSessionsComponent
      },
      {
        path: 'stage/list',
        component: ListStagesComponent
      },
      {
        path: ':sessionId/examen',
        children: [
          {
            path: "",
            component: ListExamensComponent
          },
          {
            path: "add",
            component: AddExamenComponent
          }
        ]

      },
      {
        path: 'examen/:examenId/station',
        component: ListStationsComponent
      },
      {
        path: 'examen/:examenId/etudiant',
        component: EtudiantComponent
      },
      {
        path: 'add',
        component: AddSessionComponent
      }/*,
       {
       path: 'add',
       component: AddSessionComponent
       }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSessionRoutingModule {
}
