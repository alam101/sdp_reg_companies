
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn:'root'
})
export class Utilities {
    private _storage: Storage | null = null;
    constructor(){}
    async initStorage(storage) {
        // eslint-disable-next-line no-underscore-dangle
        this._storage = await storage.create();
    }
    setStorage(key,value){
      // eslint-disable-next-line no-underscore-dangle
      this._storage.set(key,value);
    }
      getStorage(key){
        // eslint-disable-next-line no-underscore-dangle
        return this._storage.get(key);
      }


}
