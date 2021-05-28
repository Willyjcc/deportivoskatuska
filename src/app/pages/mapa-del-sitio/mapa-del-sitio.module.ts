import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaDelSitioPageRoutingModule } from './mapa-del-sitio-routing.module';

import { MapaDelSitioPage } from './mapa-del-sitio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaDelSitioPageRoutingModule
  ],
  declarations: [MapaDelSitioPage]
})
export class MapaDelSitioPageModule {}
