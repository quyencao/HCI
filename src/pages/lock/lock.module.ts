import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lock } from './lock';

@NgModule({
  declarations: [
    Lock,
  ],
  imports: [
    IonicPageModule.forChild(Lock),
  ],
  exports: [
    Lock
  ]
})
export class LockModule {}
