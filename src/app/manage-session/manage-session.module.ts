/**
 * Created by Abbes on 16/06/2017.
 */
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ManageSessionRoutingModule} from "./manage-session.routing";
import {ListSessionsComponent} from "app/manage-session/session/list-sessions/list-session.component";
import {ListExamensComponent} from "app/manage-session/examen/list-examens/list-examens.component";
import {ListStagesComponent} from "app/manage-session/stage/list-stages/list-stages.component";
import {CommonModule} from "@angular/common";
import {ListStationsComponent} from "./station/list-stations/list-stations.component";
import {AddSessionComponent} from "./session/add-session/add-session.component";
import {DateTimePickerModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';
import {AddExamenComponent} from "./examen/add-examen/add-examen.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DateTimePickerModule,
    ManageSessionRoutingModule,
    BusyModule
  ],
  declarations: [
    ListSessionsComponent,
    ListExamensComponent,
    ListStationsComponent,
    ListStagesComponent,
    AddSessionComponent,
    AddExamenComponent,
    EtudiantComponent
  ],
  providers: []
})
export class ManageSessionModule {
}