import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public nome = ''
  public email = ''
  public senha = ''
  public csenha = ''
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  cadastrar(){
      let toast = this.toastCtrl.create({
        message: 'Cadastro concluído',
        duration:3000
      })
      toast.present()
      this.navCtrl.pop()
  }
}
