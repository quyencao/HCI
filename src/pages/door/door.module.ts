import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Door } from './door';

@NgModule({
  declarations: [
    Door,
  ],
  imports: [
    IonicPageModule.forChild(Door),
  ],
  exports: [
    Door
  ]
})
export class DoorModule {}
