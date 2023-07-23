
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable()
export class Utilities {
    private _storage: Storage | null = null;
    constructor(){}
    async initStorage(storage) {
        this._storage = await storage.create();
    }
    setStorage(key,value){
      this._storage.set(key,value);
    }
      getStorage(key){
        return this._storage.get(key);
      }


    //  "https://business.smartdietplanner.com/api/"     
    // getToken(user, config):Observable<any> {
    //   let userData = { authToken: "" };
    //   if (user != null) {
    //     userData = user;
    //   }
    //  const BASEURL= "https://business.smartdietplanner.com/api/";
    //   const constauthUrl = "authenticate?access_token="; 
    //   const url = BASEURL + "" + constauthUrl + "" + userData.authToken + "&email=" + user.email +
    //     "&appSource=" + config.app_source + "&device=" + config.device + "&os=" + config.os + "&country=" + config.country + "&region=" + config.region+ "&provider="+user.provider;
    //   console.log("simba", url);
    //   return this.httpClient.get(url, {});
    // }
}