import {Component, OnInit, AfterContentInit, OnDestroy} from '@angular/core';

import {StageService} from "../../../shared/services/stage.service";


import {EtudiantService} from "../../../shared/services/etudiant.service";

import {SharedService} from "../../../shared/services/shared.service";


import {Service} from "../../../shared/models/service";



import {Stage} from "../../../shared/models/stage";
import {Etudiant_StageDTO} from "../../../shared/models/etudiant_stage";

import {Etudiant_Stage} from "../../../shared/models/etudiant_stage";

import {Enseignant} from "../../../shared/models/enseignant";
import {Etudiant} from "../../../shared/models/etudiant";
import {Router} from '@angular/router';

import {Subscription} from "rxjs/Rx";
declare var jQuery: any;
@Component({
  templateUrl: 'edit-stage.component.html',
  styleUrls: [],

})
export class EditStageComponent implements OnInit, AfterContentInit, OnDestroy {


  etudiant_stage: Etudiant_StageDTO = new Etudiant_StageDTO


  etudiants: Etudiant [] = [];
stages: Stage [] = [];
  selectedEnseignants: Enseignant[] = [];
  selectedEtudiants: Etudiant[] = [];

  selectedStages: Stage[] = [];


  busy: Subscription;

  ngOnInit() {
    const baseContext = this;


    const selectEtudiant = jQuery(".select-etudiant");
    const selectStage = jQuery(".select-stage");


    this.getAllEtudiants();
    selectEtudiant.select2();
    this.getAllStages();
    selectStage.select2();




    selectEtudiant.on('change', function () {
      const pos = parseInt(selectEtudiant.val());
      baseContext.selectedEtudiants.push(baseContext.etudiants[pos]);
    });





  selectStage.on('change', function () {
    const pos = parseInt(selectStage.val());
    baseContext.selectedStages.push(baseContext.stages[pos]);
  });

  }



  getAllEtudiants() {
    this.sharedService.getAllEtudiant()
      .subscribe(
        (data) => {
          this.etudiants = data.data;
        }
      )
  }



  getAllStages() {
    this.sharedService.getAllStage()
      .subscribe(
        (data) => {
          this.stages = data.data;
        }
      )
  }


  removeSelectedEtudiant(pos) {
    this.selectedEtudiants.splice(pos, 1);
  }


  removeSelectedStage(pos) {
    this.selectedStages.splice(pos, 1);
  }
  ngAfterContentInit() {
    // Date and time
    // Single picker
    jQuery('.date-df').daterangepicker({
      "singleDatePicker": true,
      "timePicker": false,
      "timePicker24Hour": true,
      "timePickerIncrement": 15,
      "locale": {
        "format": "DD/MM/YYYY"
      }
    });
    jQuery('.date-dfI').daterangepicker({
      "singleDatePicker": true,
      "timePicker": true,
      "timePicker24Hour": true,
      "timePickerIncrement": 15,
      "locale": {
        "format": "DD/MM/YYYY HH:mm"
      }
    });


    // Select with search


  }

  constructor(private stageService: StageService,
              private sharedService: SharedService,
            private router: Router) {

  }


  ngOnDestroy() {
  }




  setEtudiant() {
    this.selectedEtudiants.forEach(item => {
      this.etudiant_stage.etudiants.push(item.id_Etudiant);
    });
  }


  setStage() {
    this.selectedStages.forEach(item => {
      this.etudiant_stage.stages.push(item.id_Stage);
    });
  }
  addStage() {
  //  console.log(JSON.stringify(this.etudiant_stage));

    //this.busy = this.stageService.addStage(this.etudiant_stage)
      //.subscribe(
        //(data) => {
          //console.log(data.id);
            //      this.router.navigate(['/Stage/add/etudiant/' + data.id]);
        //},
        //(error) => {

        //}
      //)
  }


}
