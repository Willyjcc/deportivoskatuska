import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaDelSitioPage } from './mapa-del-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: MapaDelSitioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaDelSitioPageRoutingModule {}
