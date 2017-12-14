import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from './../horario/horario';

/**
 * Generated class for the ModuloMedioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modulo-medio',
  templateUrl: 'modulo-medio.html',
})
export class ModuloMedioPage {

    
  private lists = [];
  private curso;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lists.push({
      name: 'Primero',
      clase: '1ga(loe)' 
    });
    this.lists.push({
      name: 'Segundo',
      clase:  '2ga' 
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModuloMedioPage');
  }

  gotoHorarioModuloMedioPage(clase) {
    
       this.navCtrl.push(HorarioPage, { name : clase })
    }

}
