import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoAdminGaleriaGeneralPageRoutingModule } from './todo-admin-galeria-general-routing.module';

import { TodoAdminGaleriaGeneralPage } from './todo-admin-galeria-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoAdminGaleriaGeneralPageRoutingModule
  ],
  declarations: [TodoAdminGaleriaGeneralPage]
})
export class TodoAdminGaleriaGeneralPageModule {}
