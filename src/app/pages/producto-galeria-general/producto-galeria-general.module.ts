import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoGaleriaGeneralPageRoutingModule } from './producto-galeria-general-routing.module';

import { ProductoGaleriaGeneralPage } from './producto-galeria-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoGaleriaGeneralPageRoutingModule
  ],
  declarations: [ProductoGaleriaGeneralPage]
})
export class ProductoGaleriaGeneralPageModule {}
