import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SqlProvider } from './../../providers/sql/sql';
import { Platform } from 'ionic-angular/platform/platform';


/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {


  private curso;
  private arr = [];
  private arrFinal = [];
  constructor(public navCtrl: NavController,private platform : Platform, public navParams: NavParams, public sqlP: SqlProvider) {
    // this.arr = sqlP.arr;
  }

  afterLoad(data){
    this.arrFinal = [];
    console.log('aferload');
      for (let i = 0; i < data.rows.length; i++) {
        this.arr[i] = data.rows.item(i);
        // console.log(JSON.stringify(data.rows.item(i)))
      }
      console.log(this.arr);          

    let horas = {};
    this.arr.forEach(element => {
      horas[element.hora] = [];
    });

    for (const hora in horas) {
      let fila = {
        hora : hora,
        LUNES:[],
        MARTES:[],
        MIERCOLES:[],
        JUEVES:[],
        VIERNES:[]
      }

      this.arr.forEach(element => {
        if(element.hora === hora){
            fila[element.dia].push(element.materia);
        }
      });

      this.arrFinal.push(fila);
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioPage');
    this.curso = this.navParams.get('name');
    console.log('curso en Horario: '  +  this.curso);
    this.platform.ready().then(()=>this.sqlP.testDB(this.curso).then((data) => this.afterLoad(data)))
  }

}
