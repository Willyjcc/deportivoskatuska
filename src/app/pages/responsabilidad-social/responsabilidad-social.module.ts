import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsabilidadSocialPageRoutingModule } from './responsabilidad-social-routing.module';

import { ResponsabilidadSocialPage } from './responsabilidad-social.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsabilidadSocialPageRoutingModule
  ],
  declarations: [ResponsabilidadSocialPage]
})
export class ResponsabilidadSocialPageModule {}
