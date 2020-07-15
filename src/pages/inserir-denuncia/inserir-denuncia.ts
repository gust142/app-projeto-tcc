import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheet, ActionSheetController, ToastController } from 'ionic-angular';
import { PictureSourceType, Camera } from '@ionic-native/camera';
import { DatabaseProvider } from '../../providers/database/database';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the InserirDenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserir-denuncia',
  templateUrl: 'inserir-denuncia.html',
})
export class InserirDenunciaPage {
  // public selectedImage:string = "assets/imgs/qualquer.jpg";
  public titulo = ""
  public descricao = ""
  public selectedImage:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public camera:Camera,
  public actionsheet:ActionSheetController,public storage:StorageProvider,public database:DatabaseProvider,
public toastCtrl:ToastController) {
    console.log(this.navParams.get('latitude'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InserirDenunciaPage');
  }


  buscarImagem(){
    let action =  this.actionsheet.create({
       buttons:[
         {
           text:'Galeria',
           handler:()=>{
             this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY)
           }
         },{
           text:'Camera',
           handler:()=>{
             this.getPicture(this.camera.PictureSourceType.CAMERA)
           }
         },{
           text:'Cancelar',
           role: 'cancel'
         }
       ]
     })
    action.present()

 }

  getPicture(sourceType:PictureSourceType){

    this.camera.getPicture({
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:sourceType,
      allowEdit:true,
      saveToPhotoAlbum:false,
      correctOrientation:true, 
    }).then(imageData =>{
      this.selectedImage = `data:image/jpeg;base64,${imageData}`;
    })

  }

  salvar(){
    this.storage.buscar_token('credenciais').then(success=>{
      console.log(success)
        this.database.add_denuncia(success,this.navParams.get('latitude'),this.navParams.get('longitude'),this.titulo,this.descricao)
        console.log('denuncia salva')
        this.navCtrl.pop()
    })
    let toast = this.toastCtrl.create({
      message: 'Denúncia feita com sucesso',
      duration: 3000
    })
    toast.present()
  }

}
