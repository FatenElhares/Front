/**
 * Created by Abbes on 16/06/2017.
 */
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {StageAdministrationRoutingModule} from "./Stage-Administration.routing";
import {ListStagesComponent} from "app/Stage-Administration/stage/list-stages/list-stages.component";


import {ArchiveComponent} from "app/Stage-Administration/stage/list-archive/list-archive.component";


import {CommonModule} from "@angular/common";
import {AddStageComponent} from "./stage/add-stage/add-stage.component";
import {DateTimePickerModule} from 'ng-pick-datetime';
import {BusyModule} from 'angular2-busy';


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
    ArchiveComponent,
  ],
  providers: []
})
export class StageAdministrationModule {
}
