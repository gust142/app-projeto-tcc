
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public storage:Storage) {
    console.log('Hello StorageProvider Provider');
  }

  salvar_token(uid){
    return this.storage.set('credenciais',uid)
  }
  buscar_token(credenciais){
    return this.storage.get('credenciais')
  }

}
