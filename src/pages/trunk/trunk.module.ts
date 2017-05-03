import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrunkPage } from './trunk';

@NgModule({
  declarations: [
    TrunkPage,
  ],
  imports: [
    IonicPageModule.forChild(TrunkPage),
  ],
  exports: [
    TrunkPage
  ]
})
export class TrunkModule {}
