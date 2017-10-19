import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';

import { StageService } from "../../../shared/services/stage.service";
import { SharedService } from "../../../shared/services/shared.service";


import { Niveau } from "../../../shared/models/niveau";
import { Competences } from "../../../shared/models/competences";


import { Stage } from "../../../shared/models/stage";
import { StageDTO } from "../../../shared/models/stage";

import { Etudiant } from "../../../shared/models/etudiant";

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from "rxjs/Rx";
declare var jQuery: any;
@Component({
  templateUrl: 'add-stage-etudiant.component.html',
  selector: 'add-stage-etudiant.component',

})

export class AddStageEtudiantComponent implements OnInit {

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  etudiants: Etudiant[] = [];
  fixEtudiants: Etudiant[] = [];

  candidates: Etudiant[] = [];

  ngOnInit() {
    this.getListEtudiants();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stageService: StageService) { }

  onchange(etudiant, isChecked) {
    if (isChecked) {
      this.candidates.push(etudiant);
    } else {
      this.candidates = this.candidates.filter(each => etudiant.id_Etudiant !== each.id_Etudiant);
    }
  }

  getListEtudiants() {
    this.stageService.getListEtudiants()
      .subscribe(
      (etudiants) => {
        this.fixEtudiants = etudiants.data;
        this.fixEtudiants.forEach(etudiant => {
          if (etudiant.id_Etudiant < 10) {
            this.etudiants.push(etudiant);
          }
        });
      },
      (error) => {

      }
      )
  }

  addStage() {
      let id = this.route.snapshot.paramMap.get('id');
    console.log(this.candidates);
    this.stageService.affecterEtudiants(this.candidates, id)
      .map(each => {
        each
          .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {

          }
          )
      });
  }


}
