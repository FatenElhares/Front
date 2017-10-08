import {Niveau} from "./niveau";
import {Competences} from "./competences";

export class Etudiant {
  public id_Etudiant: number;
  public nom: string;
  public prenom: string;
  public CIN: number ;
  public carte_Etudiant:number;
 public email: string;
 public active: boolean;
 public confirmation_code: string;
 public qr_code: string;
  public id_Niveau: number;
  public id_Competences: number;

}
