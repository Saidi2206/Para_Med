import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeInformationComponent } from './liste-information/liste-information.component';
import { ParametreComponent } from './parametre/parametre.component';
import { MedecinComponent } from './medecin/medecin.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AjouterMedComponent } from './ajouter-med/ajouter-med.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';


const routes: Routes = [
  {path:'liste_information',component: ListeInformationComponent},
  {path:'parametre', component:ParametreComponent}, 
  {path:'medecin', component:MedecinComponent}, 
  {path:'ajouter',component:AjouterComponent},
  {path:'Ajoutermed',component:AjouterMedComponent},
  {path:'DetailPatient',component:DetailPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
