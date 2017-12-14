import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorarioPage } from './../horario/horario';


/**
 * Generated class for the PcpiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pcpi',
  templateUrl: 'pcpi.html',
})
export class PcpiPage {

  private lists = [];
  private curso;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lists.push({
      name: 'Primero',
      clase: '1pcpi' 
    });
    this.lists.push({
      name: 'Segundo',
      clase:  '2pcpi' 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PcpiPage');
  }


  gotoHorarioPcpiPage(clase) {
    
       this.navCtrl.push(HorarioPage, { name : clase })
    }

}
