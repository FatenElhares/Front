/**
 * Created by Abbes on 21/06/2017.
 */
/**
 * Created by Abbes on 16/06/2017.
 */
import {Component, OnInit, AfterContentInit, OnDestroy} from '@angular/core';

import {SharedService} from "../../../shared/services/shared.service";

import {StageService} from "../../../shared/services/stage.service";
import {Stage} from "../../../shared/models/stage";

import {Enseignant} from "../../../shared/models/enseignant";
import {Hopital} from "../../../shared/models/hopital";
import {Service} from "../../../shared/models/service";


import {Subscription} from "rxjs/Rx"
declare var jQuery: any;
@Component({
  templateUrl: 'add-stage.component.html',
  styleUrls: [],

})
export class AddStageComponent implements OnInit, AfterContentInit, OnDestroy {

  hopitaux: Hopital[] = [];
  enseignants: Enseignant [] = [];
  service: Service[] = [];


  stage: Stage = new Stage();

  selectedEnseignants: Enseignant[] = [];

  busy: Subscription;

  ngOnInit() {
    const baseContext = this;
    const selectService = jQuery(".select-service");
    const selectEnseignant = jQuery(".select-enseignant");

    this.getAllServices();
    this.getAllEnseignants();

    selectService.select2();
    selectEnseignant.select2();


    selectEnseignant.on('change', function () {

      const pos = parseInt(selectEnseignant.val());
      baseContext.selectedEnseignants.push(baseContext.enseignants[pos]);
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

  removeSelectedEnseignant(pos) {
    this.selectedEnseignants.splice(pos, 1);
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

  addStage() {
    this.setEnseignant();

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
