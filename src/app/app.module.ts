import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { BarreDeNavigationComponent } from './barre-de-navigation/barre-de-navigation.component';
import { ListeInformationComponent } from './liste-information/liste-information.component';
import { ParametreComponent } from './parametre/parametre.component';
import { MedecinComponent } from './medecin/medecin.component';
import { AjouterComponent } from './ajouter/ajouter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    BarreDeNavigationComponent,
    ListeInformationComponent,
    ParametreComponent,
    MedecinComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
