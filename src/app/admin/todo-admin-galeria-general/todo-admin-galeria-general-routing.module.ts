import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAdminGaleriaGeneralPage } from './todo-admin-galeria-general.page';

const routes: Routes = [
  {
    path: '',
    component: TodoAdminGaleriaGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoAdminGaleriaGeneralPageRoutingModule {}
