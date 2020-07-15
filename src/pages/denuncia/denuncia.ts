import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseProvider } from '../../providers/database/database';
import { StorageProvider } from '../../providers/storage/storage';
import { InserirDenunciaPage } from '../inserir-denuncia/inserir-denuncia';
import { DetalhesAdminPage } from '../detalhes-admin/detalhes-admin';
declare var google: any
/**
 * Generated class for the DenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html',
})
export class DenunciaPage {
  @ViewChild("map") mapRef:ElementRef
  
  denuncias: FirebaseListObservable<any[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:DatabaseProvider,
  public storage:StorageProvider) {
  }

  ionViewDidEnter() {
    this.denuncias = this.firebase.getItems()
    // console.log(this.denuncias.valueChanges())
    this.denuncias.forEach(element=>{
      console.log(element)
    })
    
     this.showMap()
  }
  showMap(){
    const location = new google.maps.LatLng(-2.532307, -44.292334)
    const options = {
      center:location,
      zoom:15,
      streetViewControl:false,
      mapType: 'roadmap',
      disableDefaultUI: true
    }
    const map = new google.maps.Map(this.mapRef.nativeElement,options)
    var marker = new google.maps.Marker({
      position: google.maps.LatLng(61.844882, -46.406637),
      map: map
    });
    // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.denuncias.forEach((element:any)=>{
      console.log(element)
      
    // marker = element.map(function(location, i) {
    //     return new google.maps.Marker({
    //       position: new google.maps.LatLng(element[i].lat,element[i].lng),
    //       label: labels[i % labels.length]
    //     });
    //   });
    //   // console.log(marker)
    //   var markerCluster = new google.maps.MarkerCluster(map, marker,
    //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

      for(var n = 0;n<element.length;n++){
        // console.log(element[n].lat)
        this.add_marker(new google.maps.LatLng(element[n].lat,element[n].lng),map,marker,element[n])
      }
      
    })

    if(!(this.navParams.get('email') == 'admin@gmail.com')){
      
      map.addListener('click', success=> {
        // console.log(success.latLng.lat().toFixed(6))
        // this.storage.buscar_token('credenciais').then(token=>{
        //   this.firebase.add_denuncia(token,success.latLng.lat().toFixed(6),success.latLng.lng().toFixed(6))
        //   // console.log(success.latLng.lat().toFixed(6)+","+success.latLng.lng().toFixed(6));
          
        //    this.add_marker(new google.maps.LatLng(success.latLng.lat().toFixed(6),success.latLng.lng().toFixed(6)),map)
        // })
        this.navCtrl.push(InserirDenunciaPage,{
          latitude: success.latLng.lat().toFixed(6),
          longitude: success.latLng.lng().toFixed(6)
        })
        
      });
    }
    

  }
  add_marker(latLng,map,marker,item){
    marker = new google.maps.Marker({
       position: latLng,
       map: map
     });
     if((this.navParams.get('email') == 'admin@gmail.com')){
      marker.addListener('click', (success) => {
        //Call run function to set the data within angular zone to trigger change detection.
        console.log(item)
        this.navCtrl.push(DetalhesAdminPage,{
          item:item
        })
        })
     }
    return  marker
   }

}
