import {Component, OnInit} from '@angular/core';
import {StageService} from "../../../shared/services/stage.service";
import {Stage} from "../../../shared/models/stage";
import {Utils} from "app/shared/utils";
@Component({
  templateUrl: 'list-stages.component.html',
  styleUrls: [],

})
export class ListStagesComponent implements OnInit {

  stages: Stage[] = [];

  ngOnInit() {
    this.getListStages();
  }

  constructor(private stageService: StageService) {
  }

  getListStages() {
    this.stageService.getListStages()
      .subscribe(
        (stages) => {
          this.stages = stages.data;
          Utils.initializeDataTables(300, 7, 5);
        },
        (error) => {

        }
      )
  }


}
