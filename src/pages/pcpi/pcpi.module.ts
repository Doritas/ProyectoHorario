import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PcpiPage } from './pcpi';

@NgModule({
  declarations: [
    PcpiPage,
  ],
  imports: [
    IonicPageModule.forChild(PcpiPage),
  ],
})
export class PcpiPageModule {}
