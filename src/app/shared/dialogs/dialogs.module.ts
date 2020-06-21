import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDialogPage } from './view-dialog/view-dialog.page';

@NgModule({
  declarations: [
    ViewDialogPage,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewDialogPage,
  ],
  entryComponents: [
    ViewDialogPage,
  ]
})
export class DialogsModule { }
