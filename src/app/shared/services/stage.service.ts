import {Http} from '@angular/http';
import {GenericService} from './generic.service';
import {Config} from '../config';
import {Injectable} from '@angular/core';
import {Credentials} from "../models/credentials";
import {StorageService} from "./storage.service";
import {Stage} from "../models/stage";


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


  addStage(stage: Stage) {
    this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));
    const url = Config.baseUrl + "/stage";

    return this.http.post(url, JSON.stringify(stage),
      {
        headers: this.headers
      }
    )
      .map(res => res.json())
      .catch(this.handleErrors);
  }

}
