import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsabilidadSocialPage } from './responsabilidad-social.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsabilidadSocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsabilidadSocialPageRoutingModule {}
