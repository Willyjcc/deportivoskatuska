import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmingaleriageneralPage } from './admingaleriageneral.page';

const routes: Routes = [
  {
    path: '',
    component: AdmingaleriageneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmingaleriageneralPageRoutingModule {}
