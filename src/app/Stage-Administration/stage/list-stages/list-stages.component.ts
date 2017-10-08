import {Component, OnInit} from '@angular/core';
import {StageService} from "../../../shared/services/stage.service";
import {Stage} from "../../../shared/models/stage";
import {Utils} from "app/shared/utils";
declare var jQuery:any;

@Component({
  templateUrl: 'list-stages.component.html',
  styleUrls: [],

})
export class ListStagesComponent implements OnInit {

  stages: Stage[] = [];

  fixStages: Stage[] = [];

  ngOnInit() {
    this.getListStages();
  }

  constructor(private stageService: StageService) {
    this.initializeSelectAdmin();
    }

  getListStages() {

    this.stageService.getListStages()
      .subscribe(
        (stages) => {
          this.fixStages = stages.data;
          this.fixStages.forEach(stage => {
            if (stage.date_fin >"2") {
                this.stages.push(stage);
            }
          });
        },
        (error) => {

        }
      )
  }

  private initializeSelectAdmin() {
      const selectEnseignant = jQuery(".select-enseignant");
      const baseContext = this;
      selectEnseignant.select2();

      selectEnseignant.on("change", function () {
        baseContext.stages = [];
        if (+jQuery(this).val() == 0) {
          baseContext.stages = baseContext.fixStages;
        } else {
          baseContext.fixStages.forEach(stage => {
            if (stage.id_Enseignant === +jQuery(this).val()) {
                baseContext.stages.push(stage);
            }
          });
        }
      //  Utils.reInitializeDataTables(50, 6);
      });
    }

}
