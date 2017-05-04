import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cameras } from './cameras';

@NgModule({
  declarations: [
    Cameras,
  ],
  imports: [
    IonicPageModule.forChild(Cameras),
  ],
  exports: [
    Cameras
  ]
})
export class CamerasModule {}
