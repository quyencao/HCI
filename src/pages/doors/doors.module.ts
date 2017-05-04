import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Doors } from './doors';

@NgModule({
  declarations: [
    Doors,
  ],
  imports: [
    IonicPageModule.forChild(Doors),
  ],
  exports: [
    Doors
  ]
})
export class DoorsModule {}
