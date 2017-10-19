import {Etudiant} from "./etudiant";
import {Stage} from "./stage";


export class Etudiant_Stage {
  public id_Etudiant_Stage: number;
  public note: string;
  public motif: string;
  public id_Etudiant: number;

}


export class Etudiant_StageDTO {
  public id_Etudiant_Stage: number;
  public note: string;
  public motif: string;
  public id_Etudiant: number;
  public etudiants: number[] = [];
  public stages: number[] = [];
}
