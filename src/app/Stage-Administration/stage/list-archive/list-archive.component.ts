import {Component, OnInit, AfterContentInit, OnDestroy} from '@angular/core';
import {StageService} from "../../../shared/services/stage.service";
import {Stage} from "../../../shared/models/stage";

import {SharedService} from "../../../shared/services/shared.service";
import {Enseignant} from "../../../shared/models/enseignant";
import {Utils} from "app/shared/utils";



import {Router} from '@angular/router';

import {Subscription} from "rxjs/Rx";

declare var jQuery:any;




@Component({
  templateUrl: 'list-archive.component.html',
  styleUrls: [],

})
export class ArchiveComponent implements OnInit {

  stages: Stage[] = [];
  fixStages: Stage[] = [];

enseignants: Enseignant[] = [];
enseignantss: Enseignant[] = [];
fixEnseignants: Enseignant[] = [];




selectedEnseignants: Enseignant[] = [];





  ngOnInit() {

  const baseContext = this;
    const selectEnseignant = jQuery(".select-enseignant");


  selectEnseignant.select2();
  this.getAllEnseignants();
    this.getListStages();
    this.getListEnseignants();




  }


  constructor(private stageService: StageService,
              private sharedService: SharedService,
            private router: Router) {
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


  getAllEnseignants() {
    this.sharedService.getAllEnseignant()
      .subscribe(
        (data) => {
          this.enseignantss = data.data;
        }
      )
  }

  removeSelectedEnseignant(pos) {
    this.selectedEnseignants.splice(pos, 1);
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
            if (stage.id_Enseignant === +jQuery(this).val() && stage.date_fin < "2") {
              baseContext.fixStages.push(stage);
            }
          });
        }
      //  Utils.reInitializeDataTables(50, 6);
      });
    }





    ngOnDestroy() {
    }

    

}
