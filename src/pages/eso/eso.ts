import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from './../horario/horario';

/**
 * Generated class for the EsoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eso',
  templateUrl: 'eso.html',
})
export class EsoPage {

  
  private lists = [];
  private curso;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // this.navParams.get(this.curso);
    
    this.lists.push({
      name: 'Primero',
      clases: [{ nombre: 'e1a' }, { nombre: 'e1b' }, { nombre: 'e1c' }, { nombre: 'e1d' }]
    });
    this.lists.push({
      name: 'Segundo',
      clases: [{ nombre: 'e2a' }, { nombre: 'e2b' }, { nombre: 'e2c' }, { nombre: 'e2d' }]
    });
    this.lists.push({
      name: 'Tercero',
      clases: [{ nombre: '3a' }, { nombre: '3b' }, { nombre: '3c' }, { nombre: '3d' }]
    });
    this.lists.push({
      name: 'Cuarto',
      clases: [{ nombre: '4a' }, { nombre: '4b' }, { nombre: '4c' }]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsoPage');
  }

  
  gotoHorarioEsoPages(clase) {
  
     this.navCtrl.push(HorarioPage, { name : clase.nombre })
  }

}