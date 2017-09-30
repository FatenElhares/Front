/**
 * Created by Abbes on 16/06/2017.
 */
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {StageEnseignantRoutingModule} from "./Stage-Enseignant.routing";
import {ListStagesComponent} from "app/Stage-Enseignant/stage/list-stages/list-stages.component";
import {CommonModule} from "@angular/common";
import {EditStageComponent} from "./stage/edit-stage/edit-stage.component";
import {DateTimePickerModule} from 'ng-pick-datetime';
import {BusyModule} from 'angular2-busy';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DateTimePickerModule,
    StageEnseignantRoutingModule,
    BusyModule
  ],
  declarations: [
    ListStagesComponent,
    EditStageComponent
  ],
  providers: []
})
export class StageEnseignantModule {
}
