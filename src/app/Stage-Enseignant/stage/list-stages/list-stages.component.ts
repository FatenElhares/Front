import {Component, OnInit} from '@angular/core';
import {StageService} from "../../../shared/services/stage.service";
import {Stage} from "../../../shared/models/stage";

import {Subscription} from "rxjs/Rx";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Utils} from "app/shared/utils";
declare var jQuery:any;

@Component({
  templateUrl: 'list-stages.component.html',
  styleUrls: [],

})
export class ListStagesComponent implements OnInit {

  stages: Stage[] = [];
  fixStages: Stage[] = [];
  id=1;

  busy: Subscription;
  ngOnInit() {
    this.getListStages();
  }

  constructor(  private route: ActivatedRoute,
    private router: Router,private stageService: StageService) {
  }

  getListStages() {
    //let id = this.route.snapshot.paramMap.get('id');
    this.stageService.getListStages()
      .subscribe(
        (stages) => {
          this.fixStages = stages.data;
          this.fixStages.forEach(stage => {
            if (stage.id_Enseignant == 3) {
                this.stages.push(stage);
            }
          });
          Utils.initializeDataTables(300, 7, 5);
        },
        (error) => {

        }
      )
  }



  ListeEtudiant(stage: Stage) {
  //  console.log(JSON.stringify(this.stage));


    this.router.navigate(['/stageenseig/listetudiant' + stage.id_Stage]);


  }

}
