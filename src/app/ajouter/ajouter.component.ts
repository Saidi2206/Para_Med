import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {  
   
  produit={
    nom : 'iheb' ,
    pre: 'saidi',
    prix : 24,  
    quantite : 100
  }

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
