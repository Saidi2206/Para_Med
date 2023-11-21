import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-information',
  templateUrl: './liste-information.component.html',
  styleUrls: ['./liste-information.component.css']
})
export class ListeInformationComponent { 
  produit={
    nom : 'iheb' ,
    pre: 'saidi',
    prix : 24,  
    quantite : 100
  } 
  produits: any [] = [];

  nom='' ;
  pre='';
  prix='';  
  quantite=''; 
  save(){ 
    this.nom = this.nom;
    this.pre=this.pre;
    this.prix=this.prix;
    this.quantite=this.quantite;

  }


}
