export class Etudiant {
  public id_Etudiant: number;
  public nom: string;
  public prenom: string;
  public cin: string ;
  public carte_Etudiant:number;
  public present:boolean;

//  public email: string;
//  public active: string;
//  public confirmation_code: string;
//  public qr_code: string;
//  public id_Niveau: number;
//  public id_Competences: number;



  constructor(id_Etudiant: number,nom: string,prenom: string,cin: string ,carte_Etudiant:number,present)
{ this.id_Etudiant=id_Etudiant;
  this.nom=nom;
  this.prenom=prenom;
  this.cin=cin;
  this.carte_Etudiant=carte_Etudiant;
  this.present=present;

}
}
