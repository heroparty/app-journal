import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DialogsModule } from './dialogs/dialogs.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    DialogsModule,
  ],
  exports: [
    ComponentsModule,
    DialogsModule,
  ]
})
export class SharedModule { }
