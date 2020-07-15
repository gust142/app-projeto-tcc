import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the DetalhesAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-admin',
  templateUrl: 'detalhes-admin.html',
})
export class DetalhesAdminPage {
  public titulo = this.navParams.get('item').titulo
  public descricao = this.navParams.get('item').descricao
  constructor(public navCtrl: NavController, public navParams: NavParams,public database:DatabaseProvider,
  public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesAdminPage');
  }

  salvar(str){
    // console.log(this.navParams.get('item').$key)
    this.database.remove_denuncia(this.navParams.get('item').$key)
    let toast = this.toastCtrl.create({
      message: str,
      duration: 3000
    })
    toast.present()
    this.navCtrl.pop()
  }
}
