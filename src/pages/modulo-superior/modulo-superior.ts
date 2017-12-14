import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from './../horario/horario';


/**
 * Generated class for the ModuloSuperiorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modulo-superior',
  templateUrl: 'modulo-superior.html',
})
export class ModuloSuperiorPage {

  lists: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lists.push({
        name: 'Administacion y Finanza' ,
        clases: [{ nombre: '1af' }, { nombre: '2af' }]
      });
      this.lists.push({
        name: 'DAM' ,
        clases: [ { nombre: '1inf' }, { nombre: '2inf' }]
      });
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModuloSuperiorPage');
  }

  goToHorarioModuloSuperiorPage(clase){
      this.navCtrl.push(HorarioPage, { name: clase.nombre })
  }
}
