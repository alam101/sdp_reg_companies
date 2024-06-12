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
      // HttpHeader object immutable - copy values
      const headerSettings: { [name: string]: string | string[] } = {};
      for (const key of request.headers.keys()) {
        headerSettings[key] = request.headers.getAll(key);
      }
      this.userToken = localStorage.getItem("tkn");
      if(request.url.indexOf("geolocation-db.com") !== -1 || request.url.indexOf("phone/validateMobile/") !== -1 || request.url.indexOf("sendOTP") !== -1 || request.url.indexOf("verifyOTP") !== -1){
        return next.handle(changedRequest).toPromise();
      }
      headerSettings["Authorization"] = "bearer " + this.userToken;
      headerSettings["Content-Type"] = "application/json";
      const newHeader = new HttpHeaders(headerSettings);
      changedRequest = request.clone({
        headers: newHeader
      });
      console.log("interceptor token", this.userToken);
      return next.handle(changedRequest).toPromise();
    }
  }
  