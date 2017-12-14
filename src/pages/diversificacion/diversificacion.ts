import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from '../horario/horario';

/**
 * Generated class for the DiversificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diversificacion',
  templateUrl: 'diversificacion.html',
})
export class DiversificacionPage {

  private lists = [];
  private curso;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lists.push({
      name: 'Tercero',
      clase: '3div' 
    });
    this.lists.push({
      name: 'Cuarto',
      clase:  '4div' 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiversificacionPage');
  }

  gotoHorarioDiversificacionPage(clase) {
    
       this.navCtrl.push(HorarioPage, { name : clase })
    }

}
