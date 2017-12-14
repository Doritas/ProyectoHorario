import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EsoPage } from './../pages/eso/eso';
import { BachilleratoPage } from './../pages/bachillerato/bachillerato';
import { ModuloSuperiorPage } from './../pages/modulo-superior/modulo-superior';
import { HorarioPage } from './../pages/horario/horario';
import { SqlProvider } from '../providers/sql/sql';
import { ModuloMedioPage } from './../pages/modulo-medio/modulo-medio';
import { DiversificacionPage } from '../pages/diversificacion/diversificacion';
import { PcpiPage } from './../pages/pcpi/pcpi';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EsoPage,
    BachilleratoPage,
    ModuloSuperiorPage,
    HorarioPage,
    ModuloMedioPage,
    PcpiPage,
    DiversificacionPage
  ],
  imports: [



  BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EsoPage,
    BachilleratoPage,
    ModuloSuperiorPage,
    HorarioPage,
    ModuloMedioPage,
    PcpiPage,
    DiversificacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    SqlProvider
  ]
})
export class AppModule {}
