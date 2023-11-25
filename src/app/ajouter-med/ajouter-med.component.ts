import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-med',
  templateUrl: './ajouter-med.component.html',
  styleUrls: ['./ajouter-med.component.css']
})
export class AjouterMedComponent {
  nouveauNom: string = '';
  nouvelleSpecialite: string = '';
  nouvelleAdresse: string = '';
  nouveauTelephone: string = '';

}
