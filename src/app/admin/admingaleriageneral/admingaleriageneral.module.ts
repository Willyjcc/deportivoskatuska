import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmingaleriageneralPageRoutingModule } from './admingaleriageneral-routing.module';

import { AdmingaleriageneralPage } from './admingaleriageneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmingaleriageneralPageRoutingModule
  ],
  declarations: [AdmingaleriageneralPage]
})
export class AdmingaleriageneralPageModule {}
