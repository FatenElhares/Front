/**
 * Created by Abbes on 16/06/2017.
 */
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {StageEtudiantRoutingModule} from "./Stage-Etudiant.routing";
import {ListStagesComponent} from "app/Stage-Etudiant/stage/list-stages/list-stages.component";
import {CommonModule} from "@angular/common";
import {AffStageComponent} from "./stage/aff-stage/aff-stage.component";
import {DateTimePickerModule} from 'ng-pick-datetime';
import {BusyModule} from 'angular2-busy';


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
    AffStageComponent
  ],
  providers: []
})
export class StageEtudiantModule {
}
