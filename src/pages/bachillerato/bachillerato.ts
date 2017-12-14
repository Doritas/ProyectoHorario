import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from '../horario/horario';

/**
 * Generated class for the BachilleratoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bachillerato',
  templateUrl: 'bachillerato.html',
})
export class BachilleratoPage {

  lists: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lists.push({
      name: 'Primero',
      clases: [{ nombre: '1a' }, { nombre: '1b' },{ nombre: '1c' }]
    });
    this.lists.push({
      name: 'Segundo',
      clases: [{ nombre: '2a' }, { nombre: '2b' },{ nombre: '2c' }]
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BachilleratoPage');
  }

  gotoHorarioBachilleratoPages(clase) {  
    // this.navCtrl.push(BachilleratoPage, { name: 'hola' })
    this.navCtrl.push(HorarioPage, { name: clase.nombre })

  }
}
