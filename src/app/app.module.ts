import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {IonicStorageModule} from '@ionic/storage'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { StorageProvider } from '../providers/storage/storage';
import { DatabaseProvider } from '../providers/database/database';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { InformacoesPage } from '../pages/informacoes/informacoes';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { InserirDenunciaPage } from '../pages/inserir-denuncia/inserir-denuncia';
import { Camera } from '@ionic-native/camera';
import { DetalhesAdminPage } from '../pages/detalhes-admin/detalhes-admin';

var config = {
  apiKey: "AIzaSyDMq6Vnmv9_fySO9BaFlfzYLcr11z-jPf0",
  authDomain: "tccapp-92629.firebaseapp.com",
  databaseURL: "https://tccapp-92629.firebaseio.com",
  projectId: "tccapp-92629",
  storageBucket: "",
  messagingSenderId: "791096113899"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    LoginPage,
    InformacoesPage,
    DetalhesPage,
    DenunciaPage,
    InserirDenunciaPage,
    DetalhesAdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot({
      name: 'TCC',
      storeName:'usuario',
      driverOrder: ['indexeddb','sqlite', 'websql']
    }), 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    LoginPage,
    InformacoesPage,
    DetalhesPage,
    DenunciaPage,
    InserirDenunciaPage,
    DetalhesAdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    DatabaseProvider,
    Camera
  ]
})
export class AppModule {}
