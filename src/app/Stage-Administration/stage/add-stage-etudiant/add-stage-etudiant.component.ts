import {Component, OnInit, AfterContentInit, OnDestroy} from '@angular/core';

import {StageService} from "../../../shared/services/stage.service";
import {SharedService} from "../../../shared/services/shared.service";


import {Niveau} from "../../../shared/models/niveau";
import {Competences} from "../../../shared/models/competences";


import {Stage} from "../../../shared/models/stage";
import {StageDTO} from "../../../shared/models/stage";

import {Etudiant} from "../../../shared/models/etudiant";


import {Subscription} from "rxjs/Rx";
declare var jQuery: any;
@Component({
  templateUrl: 'add-stage-etudiant.component.html',
  selector: 'add-stage-etudiant.component',
  styleUrls: ['checkbox-configurable-example.css'],

})

export class AddStageEtudiantComponent implements OnInit {

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  etudiants: Etudiant[] = [];
  fixEtudiants: Etudiant[] = [];

    ngOnInit() {
      this.getListEtudiants();
    }

    constructor(private stageService: StageService) {}

    getListEtudiants() {
      this.stageService.getListEtudiants()
        .subscribe(
          (etudiants) => {
            this.fixEtudiants = etudiants.data;
            this.fixEtudiants.forEach(etudiant => {
              if (etudiant.id_Etudiant <10) {
                  this.etudiants.push(etudiant);
              }
            });
          },
          (error) => {

          }
        )
    }


  }
