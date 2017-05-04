import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sideviewmirror } from './sideviewmirror';

@NgModule({
  declarations: [
    Sideviewmirror,
  ],
  imports: [
    IonicPageModule.forChild(Sideviewmirror),
  ],
  exports: [
    Sideviewmirror
  ]
})
export class SideviewmirrorModule {}
