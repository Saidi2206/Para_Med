import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {  
   
 
  nom: string = '';
  prenom: string = '';
  dateNaissance: Date = new Date();
  adresse: string = '';
  tel1: string = '';
  tel2: string = '';
  numSecuriteSociale: string = '';
  caisse: string = '';
  taille: string = '';
  poids: string = '';
  profession: string = '';
  medecinNom: string = '';
  specialite: string = '';
  adresseMedecin: string = '';
  telephoneMedecin: string = '';
  dateEnregistrement: Date = new Date();
  iah: string = '';
  datesObservances7Jours: string = '';
  datesObservances1Mois: string = '';
  datesObservances2Mois: string = '';
  datesObservances3Mois: string = '';
  accordCNAM: string = '';
  numBL: string = '';
  dateBL: Date = new Date();
  numFacture: string = '';
  dateFacture: Date = new Date();
  dateInstallationCPAP: Date = new Date(); 


    
}



