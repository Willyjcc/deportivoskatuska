import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionDeEnvioPageRoutingModule } from './informacion-de-envio-routing.module';

import { InformacionDeEnvioPage } from './informacion-de-envio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionDeEnvioPageRoutingModule
  ],
  declarations: [InformacionDeEnvioPage]
})
export class InformacionDeEnvioPageModule {}
