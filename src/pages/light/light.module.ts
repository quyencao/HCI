import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Light } from './light';

@NgModule({
  declarations: [
    Light,
  ],
  imports: [
    IonicPageModule.forChild(Light),
  ],
  exports: [
    Light
  ]
})
export class LightModule {}
