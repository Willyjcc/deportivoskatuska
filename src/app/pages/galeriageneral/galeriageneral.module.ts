import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriageneralPageRoutingModule } from './galeriageneral-routing.module';

import { GaleriageneralPage } from './galeriageneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriageneralPageRoutingModule
  ],
  declarations: [GaleriageneralPage]
})
export class GaleriageneralPageModule {}
