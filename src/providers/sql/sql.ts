import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the SqlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SqlProvider {
  public  arr=[];
  public db = null;
  public consultaJoin="SELECT diaSemana.nombre as dia, estudios.nombre as estudio, materia.nombre as materia, horasSemana.descripcion as hora FROM estudios, grupo NATURAL JOIN diaClase NATURAL JOIN horaClase NATURAL JOIN materiahoraclase INNER JOIN materia ON materiahoraclase.idMateria = materia.idMateria, diaSemana, horasSemana WHERE diaClase.idDiaSemana = diaSemana.idDiaSemana AND horaClase.idHorasSemana = horasSemana.idHorasSemana AND estudios.idEstudios = grupo.idEstudios AND horaClase.idHoraClase = materiahoraclase.idHoraClase AND grupo.nombre = '";
  constructor(public http: HttpClient, public sqlite: SQLite) {
    console.log('Hello SqlProvider Provider');
    this.sqlite.create({
      name: 'horario16.db',
      location: 'default',
      createFromLocation: 1
    }).then((db: SQLiteObject) => {
      this.db = db;
    }).catch(() => console.log("error no fuciona")).catch((e) => console.log(JSON.stringify(e)));
  }

  // testDB(clase) {
  //   this.sqlite.create({
  //     name: 'horario16.db',
  //     location: 'default',
  //     createFromLocation: 1
  //   }).then((db: SQLiteObject) => {
  //     console.log(this.consultaJoin + clase + "'");
  //     db.executeSql(this.consultaJoin + clase + "'", [])
    
  //       .then((data) => {
  //         for (let i = 0; i < data.rows.length; i++) {
  //           this.arr[i] = data.rows.item(i);
  //           // console.log(JSON.stringify(data.rows.item(i)))
  //         }
  //         console.log(this.arr);          
  //       })
  //       .catch((e) => console.log(JSON.stringify(e)))
  //   }).catch(() => console.log("error no fuciona")).catch((e) => console.log(JSON.stringify(e)));
  // }

  testDB(clase) {
    console.log("testdb: " + clase);
      return this.db.executeSql(this.consultaJoin + clase + "'", []);
  }
}
