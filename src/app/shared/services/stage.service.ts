import { Http } from '@angular/http';
import { GenericService } from './generic.service';
import { Config } from '../config';
import { Injectable } from '@angular/core';
import { Credentials } from "../models/credentials";
import { StorageService } from "./storage.service";
import { Stage } from "../models/stage";


@Injectable()
export class StageService extends GenericService {

  constructor(private http: Http, private stoarageService: StorageService) {
    super();
  }


  getListStages() {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/stage";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }




getListEtudiants_Stages() {
  this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
  const url = Config.baseUrl + "/etudiant_stage";
  return this.http.get(url, {
    headers: this.headers
  })
    .map(res => res.json())
    .catch(this.handleErrors);
}

  getListEnseignants() {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/enseignant";
    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }


  getListEtudiants() {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/etudiant";
    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }


  getAllHopital() {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/hopital";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }


  getAllStage() {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/stage";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  getAllService() {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/service";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }


  addStage(stage: Stage) {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/stage/add";
    let rawCommand = stage;
    let command = {
      hopitalId: rawCommand.id_Hopital,
      serviceId: rawCommand.id_Service,
      enseignantId: rawCommand.id_Enseignant,
      startDate: rawCommand.date_debut,
      endDate: rawCommand.date_fin
    };
    return this.http.post(url, JSON.stringify(command),
      {
        headers: this.headers
      }
    )
      .map(res => res.json())
      .catch(this.handleErrors);
  }


  vide() {

  }

  affecterEtudiants(etudiants, stage) {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/etudiant_stage/add";
    return etudiants.map(each => {
      return {
        stageId: stage,
        etudiantId: each.id_Etudiant,
        note: "1",
        motif: "1"
      };
    }).map(each => {
      console.log(each);
      return this.http.post(url, JSON.stringify(each), { headers: this.headers })
        .map(res => res.json())
        .catch(this.handleErrors);
    });
  }

}
