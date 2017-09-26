/**
 * Created by Abbes on 16/06/2017.
 */
import {Component, OnInit} from '@angular/core';
import {StageService} from "../../../shared/services/stage.service";
import {Stage} from "../../../shared/models/stage";
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
        },
        (error) => {

        }
      )
  }


}
