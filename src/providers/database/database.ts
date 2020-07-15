
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor( public afd: AngularFireDatabase) {
    console.log('Hello DatabaseProvider Provider');
  }

  add_denuncia(uid,lat,lng,titulo,descricao){
  this.afd.list('/denuncias').push({
    lat:lat,
    lng:lng,
    titulo: titulo,
    descricao: descricao,
    uid:uid
  })
  }
  getItems(){
    return this.afd.list('/denuncias')
  }

  getItemsWithUID(uid){

  }

  remove_denuncia(key){
    this.afd.list('/denuncias').remove(key)
    console.log('removido')
  }

}
