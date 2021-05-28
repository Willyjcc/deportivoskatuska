import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriageneralPage } from './galeriageneral.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriageneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriageneralPageRoutingModule {}
