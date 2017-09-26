/**
 * Created by Abbes on 16/06/2017.
 */
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {StageEtudiantRoutingModule} from "./Stage-Etudiant.routing";
import {ListStagesComponent} from "app/manage-session/stage/list-stages/list-stages.component";
import {CommonModule} from "@angular/common";

import {DateTimePickerModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';

import {EtudiantComponent} from "./etudiant/etudiant.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DateTimePickerModule,
    StageEtudiantRoutingModule,
    BusyModule
  ],
  declarations: [

    ListStagesComponent,
    EtudiantComponent
  ],
  providers: []
})
export class StageEtudiantModule {
}
