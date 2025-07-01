import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpHeaders
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable, from } from "rxjs";
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    userToken: string = "";
    ionViewWillEnter() {}
    constructor(
     ) {}
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return from(this.handleAccess(request, next));
    }
  
    private async handleAccess(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Promise<HttpEvent<any>> {
      let changedRequest = request;
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const localTime = new Date().toISOString();
      // HttpHeader object immutable - copy values
      const headerSettings: { [name: string]: string | string[] } = {};
      for (const key of request.headers.keys()) {
        headerSettings[key] = request.headers.getAll(key);
      }
      this.userToken = localStorage.getItem("tkn");
      if(request.url.indexOf("geolocation-db.com") !== -1 || request.url.indexOf("phone/validateMobile/") !== -1 || request.url.indexOf("sendOTP") !== -1 || request.url.indexOf("verifyOTP") !== -1){
        return next.handle(changedRequest).toPromise();
      }
      if(request.url.indexOf("plixlifefcstagehapi.farziengineer.") !== -1) {
        headerSettings["Authorization"] = "bearer SoL9oWcXm05wnFPAAB7kwZxYHskwIk";
      } else {
        headerSettings["Authorization"] = "bearer " + this.userToken;
      }
      headerSettings["Content-Type"] = "application/json";
      headerSettings["X-Timezone"] = timezone;
      headerSettings["X-User-Local-Time"] = localTime;
      
      const newHeader = new HttpHeaders(headerSettings);
      changedRequest = request.clone({
        headers: newHeader
      });
      return next.handle(changedRequest).toPromise();
    }
  }
  