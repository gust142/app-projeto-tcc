import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { StorageProvider } from '../../providers/storage/storage';

import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DenunciaPage } from '../denuncia/denuncia';




declare var google:any
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  @ViewChild("heatmap") heatMapRef:ElementRef
  
  
  denuncias: FirebaseListObservable<any[]>
  constructor(public navCtrl: NavController,public navParams:NavParams, public menu:MenuController,public firebase:DatabaseProvider,
  public storage:StorageProvider) {
    this.menu.swipeEnable(true);
  }
  ionViewDidLoad(){
    
    this.denuncias = this.firebase.getItems()
    // console.log(this.denuncias.valueChanges())
    this.denuncias.forEach(element=>{
      console.log(element)
    })
    
    // this.showMap()
    this.showHeatMap()
  }
  

  showHeatMap(){
    
    let dados = []
    var gradient = [
      'rgba(102, 225,0,0)',
      'rgb(102, 225,0)',
      'rgb(102, 225,0)',
      


      
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',


    ]
    const location = new google.maps.LatLng(-2.542765, -44.235024)
    const options = {
      center:location,
      zoom:11,
      streetViewControl:false,
      mapType: 'roadmap',
      disableDefaultUI: true
    }
    const map = new google.maps.Map(this.heatMapRef.nativeElement,options)
    this.denuncias.forEach((element:any)=>{
      for(var n = 0;n<element.length;n++){
        // console.log(element[n].lat)
        dados[n] = new google.maps.LatLng(element[n].lat,element[n].lng) 
      }
      var heatmap = new google.maps.visualization.HeatmapLayer({
      data: dados,
      map:map
      });
     heatmap.set('gradient',gradient);
    })
    
    
  }


  
  trocar_operacao(){
    this.navCtrl.push(DenunciaPage,{
      email:this.navParams.get('email')
    })
  }
  
  }
  



