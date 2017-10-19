import {Component, OnInit} from '@angular/core';
import {StageService} from "../../../shared/services/stage.service";
import {Stage} from "../../../shared/models/stage";

import {Enseignant} from "../../../shared/models/enseignant";


import {Utils} from "app/shared/utils";
declare var jQuery:any;

@Component({
  templateUrl: 'list-stages.component.html',
  styleUrls: [],

})
export class ListStagesComponent implements OnInit {

  stages: Stage[] = [];

  fixStages: Stage[] = [];
  enseignants: Enseignant[] = [];

  fixed: Stage[] = [];
  fixEnseignants: Enseignant[] = [];

  ngOnInit() {
    this.getListStages();
    this.getListEnseignants();
  }

  constructor(private stageService: StageService) {
    this.initializeSelectEnseig();
  }

  onchange(id) {
    const selectEnseig = jQuery(".select-enseignant").val();
    this.stages = [];
    this.fixStages.forEach(stage => {
      if ((stage.id_Enseignant == selectEnseig) || (selectEnseig == 0)) {
          this.stages.push(stage);
      }
    });
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

  getListEnseignants() {
    this.stageService.getListEnseignants()
      .subscribe(
        (enseignants) => {
          this.enseignants = enseignants.data;
          this.fixEnseignants = enseignants.data;
          Utils.initializeDataTables(300, 7, 5);

        },
        (error) => {

        }
      )
  }



  private initializeSelectEnseig() {


      const selectEnseig = jQuery(".select-enseignant");
      const baseContext = this;
      selectEnseig.select2();

      selectEnseig.on("change", function () {
        baseContext.fixed = [];
        if (+jQuery(this).val() == 0) {
          baseContext.fixed = baseContext.fixStages;
        } else {
          baseContext.fixed.forEach(stage => {
            if (stage.id_Enseignant === +jQuery(this).val() && stage.date_fin >"2") {
              baseContext.fixed.push(stage);
            }
          });
        }
      //  Utils.reInitializeDataTables(50, 6);
      });
    }

}
