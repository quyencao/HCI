import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seat } from './seat';

@NgModule({
  declarations: [
    Seat,
  ],
  imports: [
    IonicPageModule.forChild(Seat),
  ],
  exports: [
    Seat
  ]
})
export class SeatModule {}
