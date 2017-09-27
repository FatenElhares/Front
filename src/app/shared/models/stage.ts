import {Enseignant} from "./enseignant";
import {Etudiant} from "./etudiant";
export class Stage {
  public id_Stage: number;
  public date_debut: string;
  public date_fin: string;
  public id_Enseignant: number;
  public id_Hopital: number;
  public id_Service: number;
}


export class StageDTO {
public id_Stage: number;
  public date_debut: string;
  public date_fin: string;
  public id_Enseignant: number;
  public id_Hopital: number;
  public id_Service: number;

  public enseignants: number[] = [];
  public etudiants: number[] = [];

}
