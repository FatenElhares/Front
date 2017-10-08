import {Component, OnInit} from '@angular/core';
import {StageService} from "../../../shared/services/stage.service";
import {Stage} from "../../../shared/models/stage";


import {Enseignant} from "../../../shared/models/enseignant";
import {Utils} from "app/shared/utils";
declare var jQuery:any;

@Component({
  templateUrl: 'list-archive.component.html',
  styleUrls: [],

})
export class ArchiveComponent implements OnInit {

  stages: Stage[] = [];
  fixStages: Stage[] = [];

enseignants: Enseignant[] = [];
fixEnseignants: Enseignant[] = [];


  ngOnInit() {
    this.getListStages();
    this.getListEnseignants();
  }

  constructor(private stageService: StageService) {
    this.initializeSelectEnseig();

  }

  getListStages() {

    this.stageService.getListStages()
      .subscribe(
        (stages) => {
          this.fixStages = stages.data;
          this.fixStages.forEach(stage => {
            if (stage.date_fin <"3") {
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


//  evaluateurs: Admin[] = [];
  private initializeSelectEnseig() {
      const selectEnseig = jQuery(".select-enseignant");
      const baseContext = this;
      selectEnseig.select2();

      selectEnseig.on("change", function () {
        baseContext.fixStages = [];
        if (+jQuery(this).val() == 0) {
          baseContext.fixStages = baseContext.stages;
        } else {
          baseContext.fixStages.forEach(stage => {
            if (stage.id_Enseignant === +jQuery(this).val()) {
              baseContext.fixStages.push(stage);
            }
          });
        }
      //  Utils.reInitializeDataTables(50, 6);
      });
    }



}
