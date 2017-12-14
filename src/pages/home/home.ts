import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SqlProvider } from './../../providers/sql/sql';
import { BachilleratoPage } from '../bachillerato/bachillerato';
import { EsoPage } from './../eso/eso';
import { ModuloSuperiorPage } from '../modulo-superior/modulo-superior';
import { ModuloMedioPage } from '../modulo-medio/modulo-medio';
import { DiversificacionPage } from '../diversificacion/diversificacion';
import { PcpiPage } from './../pcpi/pcpi';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lists: any[] = [];

  constructor(public navCtrl: NavController, public sql:SqlProvider) {

    this.lists.push({
      name: 'Eso'
    });
    this.lists.push({
      name: 'Bachillerato'
    });
    this.lists.push({
      name: 'Modulo Superior'
    });
    this.lists.push({
      name: 'Modulo Medio'
    });
    this.lists.push({
      name: 'Diversificacion'
    });
    this.lists.push({
      name: 'PCPI'
    });
  }

  gotoEsoPages() {
    this.navCtrl.push(EsoPage, { name: 'hola' })
    
  }

  gotoBachilleratoPages() {
    this.navCtrl.push(BachilleratoPage, { name: 'hola' })

  }

  gotoModuloSuperior() {
    this.navCtrl.push(ModuloSuperiorPage, { name: 'hola' })

  }

  gotoModuloMedio() {
    this.navCtrl.push(ModuloMedioPage, { name: 'hola' })

  }
  gotoDiversificacion() {
    this.navCtrl.push(DiversificacionPage, { name: 'hola' })

  }
  gotoPCPI() {
    this.navCtrl.push(PcpiPage, { name: 'hola' })

  }
  testDB(){
    //this.sql.testDB();
  }

}
