import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EsoPage } from './eso';

@NgModule({
  declarations: [
    EsoPage,
  ],
  imports: [
    IonicPageModule.forChild(EsoPage),
  ],
})
export class EsoPageModule {}
