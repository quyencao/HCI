import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirconditionerPage } from './airconditioner/airconditioner';

@NgModule({
  declarations: [
    AirconditionerPage,
  ],
  imports: [
    IonicPageModule.forChild(AirconditionerPage),
  ],
  exports: [
    AirconditionerPage
  ]
})
export class AirconditionerModule {}
