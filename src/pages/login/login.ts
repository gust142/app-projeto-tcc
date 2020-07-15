import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { StorageProvider } from '../../providers/storage/storage';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email = ''
  public password = ''
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth,public menu:MenuController,
  public storage:StorageProvider,public toast:ToastController) {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.email == 'admin@gmail.com'&&this.password =='123456'){
      this.navCtrl.setRoot(HomePage,{
        email:this.email
      })
    }else{
      this.auth.auth.signInWithEmailAndPassword(this.email,this.password).then(response=>{
        console.log(response.uid) // pegar o token de acesso 
        this.storage.salvar_token(response.uid).then(token=>{
          this.navCtrl.setRoot(HomePage,{
            email:this.email
          })
        })
        
      }).catch(err=>{
        let toast = this.toast.create({
          message:'Login e/ou Senha incorretos',
          duration:3000
        })
        toast.present()
      })
    }
  }
  cadastrar(){
    this.navCtrl.push(CadastroPage)
  }

}
