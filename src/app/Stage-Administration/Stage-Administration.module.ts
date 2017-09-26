/**
 * Created by Abbes on 16/06/2017.
 */
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {StageAdministrationRoutingModule} from "./Stage-Administration.routing";
import {ListStagesComponent} from "app/Stage-Administration/stage/list-stages/list-stages.component";
import {CommonModule} from "@angular/common";


import {AddStageComponent} from "./stage/add-stage/add-stage.component";


import {DateTimePickerModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';

import {EtudiantComponent} from "./etudiant/etudiant.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DateTimePickerModule,
    StageAdministrationRoutingModule,
    BusyModule
  ],
  declarations: [

    ListStagesComponent,
    AddStageComponent,
    EtudiantComponent
  ],
  providers: []
})
export class StageAdministrationModule {
}
