import {Component, OnInit, AfterContentInit, OnDestroy} from '@angular/core';

import {StageService} from "../../../shared/services/stage.service";
import {SharedService} from "../../../shared/services/shared.service";


import {Service} from "../../../shared/models/service";
import {Hopital} from "../../../shared/models/hopital";


import {Stage} from "../../../shared/models/stage";
import {StageDTO} from "../../../shared/models/stage";

import {Enseignant} from "../../../shared/models/enseignant";
import {Etudiant} from "../../../shared/models/etudiant";


import {Subscription} from "rxjs/Rx";
declare var jQuery: any;
@Component({
  templateUrl: 'edit-stage.component.html',
  styleUrls: [],

})
export class EditStageComponent implements OnInit, AfterContentInit, OnDestroy {

  services: Service[] = [];
  hopitaux: Hopital[] = [];
  stage: StageDTO = new StageDTO();
  enseignants: Enseignant [] = [];

  etudiants: Etudiant [] = [];

  selectedEnseignants: Enseignant[] = [];
  selectedEtudiants: Etudiant[] = [];


  busy: Subscription;

  ngOnInit() {
    const baseContext = this;
    const selectService = jQuery(".select-service");
    const selectEnseignant = jQuery(".select-enseignant");
    const selectEtudiant = jQuery(".select-etudiant");


    this.getAllServices();
    this.getAllEnseignants();
    this.getAllEtudiants();

    selectService.select2();
    selectEnseignant.select2();

    selectEtudiant.select2();


    selectEnseignant.on('change', function () {

      const pos = parseInt(selectEnseignant.val());
      baseContext.selectedEnseignants.push(baseContext.enseignants[pos]);
    });

    selectEtudiant.on('change', function () {

      const pos = parseInt(selectEtudiant.val());
      baseContext.selectedEtudiants.push(baseContext.etudiants[pos]);
    });


    selectService.on("change", function () {
      baseContext.stage.id_Service = parseInt(selectService.val());
    });

    jQuery(".date-debut").on("change", function () {
      baseContext.stage.date_debut = jQuery(".date-debut").val();
    });
    jQuery(".date-fin").on("change", function () {
      baseContext.stage.date_fin = jQuery(".date-fin").val();
    })
  }

  getAllServices() {
    this.sharedService.getServices()
      .subscribe((data) => {
          this.services = data;
          console.log(this.services);
        },
        (error) => {

        });
  }

  getAllEnseignants() {
    this.sharedService.getAllEnseignant()
      .subscribe(
        (data) => {
          this.enseignants = data;
        }
      )
  }


  getAllEtudiants() {
    this.sharedService.getAllEtudiant()
      .subscribe(
        (data) => {
          this.etudiants = data;
        }
      )
  }


  removeSelectedEnseignant(pos) {
    this.selectedEnseignants.splice(pos, 1);
  }


  removeSelectedEtudiant(pos) {
    this.selectedEtudiants.splice(pos, 1);
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
              private sharedService: SharedService) {

  }


  ngOnDestroy() {
  }

  setEnseignant() {
    this.selectedEnseignants.forEach(item => {
      this.stage.enseignants.push(item.id_Enseignant);
    });
  }


  setEtudiant() {
    this.selectedEtudiants.forEach(item => {
      this.stage.etudiants.push(item.id_Etudiant);
    });
  }

  editStage() {
    this.setEnseignant();
    this.setEtudiant();
    console.log(JSON.stringify(this.stage));

    this.busy = this.stageService.addStage(this.stage)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {

        }
      )
  }


}
