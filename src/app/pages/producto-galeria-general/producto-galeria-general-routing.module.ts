import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoGaleriaGeneralPage } from './producto-galeria-general.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoGaleriaGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoGaleriaGeneralPageRoutingModule {}
