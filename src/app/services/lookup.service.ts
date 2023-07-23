import { Injectable } from '@angular/core';
import { Microfrontend } from '../model/micro-frontend';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  lookup(): Promise<Microfrontend[]> {
    return Promise.resolve([
      {
        type:'module',
        displayName: 'Home',
        routePath: 'home',
        ngModuleName: 'HomeScreenModule',
        remoteEntry: '/homeAppEntry.js',
        exposedModule: './HomeScreenModule'
      },
    ] as Microfrontend[]);
  }
}
