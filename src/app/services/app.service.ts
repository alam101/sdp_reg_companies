import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API, APIS} from './constants';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl:string;
  baseUrl8443:string;
  externalBaseUrl:string;
  constructor(private readonly httpClient:HttpClient) { 
    this.baseUrl = API.BASEURL;
    this.baseUrl8443 = API.BASEURL8443;
    this.externalBaseUrl = API.externalBaseUrl;
  }


  public emailOnly(email): boolean {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      // Invalid Email.
      return false;
    }
    return true;
  }
  authenticateInternal(key:string,payload):Observable<any>{
    const url = this.baseUrl+API.authenticateInternal;
    console.log(url,`?key=${key}`,payload);
    
    return this.httpClient.post(url+`?key=${key}&authCode=${payload}`,{},{headers:{}});
  }
  externalRegistration(key:string,payload):Observable<any>{
    const url = this.baseUrl+API.authenticateExternal;
    console.log(url,`?key=${key}`,payload);
    
    return this.httpClient.post(url+`?key=${key}`,payload,{headers:{}});
  }
  externalToken(key:string):Observable<any>{
    const url = this.baseUrl+API.getTokenExternal;
    console.log(url);
    
    return this.httpClient.get(url+`?key=${key}`);
  }
  fetchUserDetail(email):Observable<any>{
    const url =  this.externalBaseUrl+API.fetchCustomerDetails;
    return this.httpClient.get(url+`?email=${email}`);
  }
  defaultData():Observable<any>{
   const url = this.baseUrl+API.defaultDetail;
    return this.httpClient.get(url);
  }
  eatFit():Observable<any>{
    const url = this.baseUrl8443+API.eatfit;
     return this.httpClient.get(url);
   }
   eatFitUpdate(body):Observable<any>{
    const url = this.baseUrl8443+API.updateSpecialPref;
     return this.httpClient.post(url,body);
   }
   
  getOnePlan():Observable<any> {
    const url = this.baseUrl + "" + API.getOnePlan;
    return this.httpClient.get(url, {});
  }
  getProfile():Observable<any> {
    const url = this.baseUrl + "" + API.profile;
    return this.httpClient.get(url, {});
  }
  initialTransactions(reqPayload):Observable<any> {
    const url = API.BASEURL8444 + API.initiateTransaction+`?txnAmount=${reqPayload.amount}&currency=INR&custId=${reqPayload.custId}`;
    return this.httpClient.post(url,{});
  }

  getPaytmProfile(authCode):Observable<any> {
    const url = API.BASEURL8444 + API.getPaytmProfile+`?authCode=${authCode}`;
    return this.httpClient.get(url, {});
  }

  updateExpiryDate(reqBody) {
    return this.httpClient
      .post(API.BASEURL + API.updateExpiryDate, reqBody, {})
      .toPromise();
  }
  getCurrentLocation() {
    return this.httpClient
      .get("https://geolocation-db.com/json/", {})
      .toPromise();
  }

  sendOTP(reqBody) {
    // reqBody["customerId"] = reqBody.email;
    console.log("reqBody", reqBody);
    const url = APIS.refreshBaseUrl + "" + API.sendOTP;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  verifyWithClient(clientUrl, data) {
    // const raw = JSON.stringify({
    //   "mobileNo": data
    // })
    let options = {
      headers: new HttpHeaders({
        "secret-key": "your-secret-key",
      }),
      // data: raw
    };
    const url = clientUrl + API.verifyClientUser + data;
    return this.httpClient.get(url, options).toPromise();
  }
  
}
