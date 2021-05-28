import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionDeEnvioPage } from './informacion-de-envio.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionDeEnvioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionDeEnvioPageRoutingModule {}
