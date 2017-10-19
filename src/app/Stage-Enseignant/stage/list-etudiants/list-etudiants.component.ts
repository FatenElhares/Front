import {Component, OnInit} from '@angular/core';
import {StageService} from "../../../shared/services/stage.service";
import {Etudiant_Stage} from "../../../shared/models/etudiant_stage";


import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Utils} from "app/shared/utils";
declare var jQuery:any;

@Component({
  templateUrl: 'list-etudiants.component.html',
  styleUrls: [],

})
export class ListEtudiantsComponent implements OnInit {

  etudiants_stages: Etudiant_Stage[] = [];
  fix: Etudiant_Stage[] = [];


  ngOnInit() {
    this.getListEtudiants_Stages();
  }

  constructor(  private route: ActivatedRoute,
    private router: Router,private stageService: StageService) {
  }

  getListEtudiants_Stages() {
    //let id = this.route.snapshot.paramMap.get('id');
    this.stageService.getListEtudiants_Stages()
      .subscribe(
        (etudiants_stages) => {
          this.fix = etudiants_stages.data;
          this.fix.forEach(etudiant_stage => {

                this.etudiants_stages.push(etudiant_stage);

          });
          Utils.initializeDataTables(300, 7, 5);
        },
        (error) => {

        }
      )
  }


}
