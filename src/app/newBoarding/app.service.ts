import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIS, CONSTANTS } from './core/constants/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isNew = CONSTANTS.isNewAPIs;
    constructor(
    private httpClient: HttpClient
  ) {}

  public emailOnly(email): boolean {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      // Invalid Email.
      return false;
    }
    return true;
  }
  
  paymentConfirm(reqBody) {
    const url = APIS.BASEURL + "" + APIS.paymentConfirm;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  terms(reqData) {
    const url = APIS.BASEURL + "" + APIS.addTnC;
    return this.httpClient.post(url, reqData).toPromise();
  }
  payment(reqBody) {
    const url = APIS.BASEURL + "" + APIS.payment;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  getOnePlan():Observable<any> {
    const url = APIS.BASEURL + "" + APIS.getOnePlan;
    return this.httpClient.get(url, {});
  }
  updateEatenFoodItems(reqBody){
    reqBody["customerId"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.updateEatenFoodItems;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }
  dietPlan(reqBody) {
    //const url = APIS.BASEURL + "" + APIS.updateDiet;
    const url = APIS.BASEURL + "" + APIS.dietplan;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  downloadPdfFromApi(token,dateRange,date,comp_id='alyve.health',user_id): Observable<Blob> {
   const url = APIS.pithanURL+`${APIS.downloadPdfApi}?auth_token=${token}&date_range=${dateRange}&date=${date}&company_id=${comp_id}&user_id=${user_id}` ;
   return this.httpClient.get(url, {responseType: 'blob'});
  }

  downloadPdfFromApiNew1(comp_id='alyve.health',
    user_id,dietitian_name,dietitan_email,response_type,design) {
    const url = APIS.pithanURL+`${APIS.downloadPdfApiNew}?company_id=${comp_id}&user_id=${user_id.trim()}&trigger_webhook=true&dietitian_name=${dietitian_name}
    &dietitian_email=${dietitan_email.trim()}&response_type=${response_type}&design=${design}` ;

    return this.httpClient.get(url, {});
   }

   downloadPdfFromApiNew(comp_id='alyve.health',
    user_id,dietitian_name,dietitan_email,response_type,design):Observable<Blob> {
    const url = APIS.pithanURL+`${APIS.downloadPdfApiNew}?company_id=${comp_id}&user_id=${user_id.trim()}&trigger_webhook=true&dietitian_name=${dietitian_name}
    &dietitian_email=${dietitan_email.trim()}&response_type=${response_type}&design=${design}` ;

    return this.httpClient.get(url, {responseType:'blob'});
   }
  
  getDietPlans(isDetox, date, country, recommended) {
    if(this.isNew){
      country = country ? country : "IND";
      let reqBody = {
        "date":date,
        // "refresh": true,
        "customerId" : CONSTANTS.email,
        "detox": isDetox,
      }
      if(isDetox){
        let b2 = 1200, b3 = 1800, c2 = 500, c3 = 1000, b4 = recommended;
        recommended = Math.round(recommended - (c2+(c3-c2)*(b4-b2)/(b3-b2)));
        reqBody["dietPlanName"]  = "Detox";
        reqBody["refresh"]  = true;
        reqBody["recommendedCalories"] = recommended;
      }
      // if(isNew) reqBody["refresh"] = true;
      const url = APIS.refreshBaseUrl + "" + APIS.dietPlansDirect; //+ "&detox=" + isDetox;
      return this.httpClient.post(url, reqBody, {}).toPromise();
    }else{
      country = country ? country : "IND";
      const url = APIS.BASEURL + "" + APIS.dietPlans + "?date=" + date + "&country=" + country + "&detox=" + isDetox;
      return this.httpClient.get(url, {}).toPromise();
    }
  }
  postDiet(reqBody) {

    const url = APIS.BASEURL + '' + APIS.updateDiet;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  updateTargetWeight(reqBody) {
    const url = APIS.BASEURL + '' + APIS.updateTargetWeight;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  getLocalData(url) {
    return this.httpClient.get(url, {}).toPromise();
  }
  getProfile() {
    const url = APIS.BASEURL + '' + APIS.profile;
    return this.httpClient.get(url, {}).toPromise();
  }
  getEditProfilePermission(email) {
    const url =  `${APIS.nodeBaseUrl}dietitian/assignedDietitianRecord?userId=${email}`; //APIS.nodeBaseUrl + '' + APIS.DietitianActions+`${email}`; 
    return this.httpClient.get(url, {}).toPromise();
  }

  getDietitianRecord(userid: string) {
    return this.httpClient.get(
      `${APIS.nodeBaseUrl}dietitian/assignedDietitianRecord?userId=${userid}`
    );
    //APIS.nodeBaseUrl + 
  }

  // getEditProfilePermission(email) {
  //   const url = APIS.nodeBaseUrl + '' + APIS.DietitianActions+`${email}`;
   
  //   return this.httpClient.get(url, {}).toPromise();
  // }
  getDefaultData(token) {
    const url = APIS.BASEURL + '' + APIS.defaultDetail;
    console.log('manual header', token);
    return this.httpClient.get(url, {}).toPromise();
  }

  getDefaultDataDiet(id: any) {
    id = id ? id : 'IND';
    const url = APIS.BASEURL + '' + APIS.defaultDetail + '?country=' + id;
    return this.httpClient.get(url, {}).toPromise();
  }

  postDemographic(reqBody) {
    const url = APIS.BASEURL + '' + APIS.updateDemographic;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  postLifeStyle(reqBody) {
   // reqBody.lifeStyle.firstConsult= localStorage.getItem("clientId")==="orthocure"? false:null;
    const url = APIS.BASEURL + '' + APIS.updateLifeStyle;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  updateWeight(reqBody) {
    const url = APIS.BASEURL + '' + APIS.updateWeight;
    console.log(url + ':-update weight:-', reqBody);

    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  updateProfile(reqBody) {
    const url = APIS.BASEURL + '' + APIS.updateProfile;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  updateDietPlan(reqBody) {
    console.log(reqBody);
    reqBody.customerId = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + '' + APIS.updateDietPlan;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }


  registration(reqBody) {
    const url = 'https://app.smartdietplanner.com/api/authenticateExternal?key=NEWMI2022';
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  postOptionFoodList(foodCodeList) {

    let url;
    if(this.isNew){
      foodCodeList["customerId"] = CONSTANTS.email,
      url = APIS.refreshBaseUrl + "" + APIS.optionSelectionNew;
    }else{
      url = APIS.BASEURL + "" + APIS.optionSelection;
    }

    return this.httpClient.post(url, foodCodeList, {}).toPromise();
  }

  fetchCustDailyDiets(data: any) {
    // id = id ? id : 'IND';
    const url = APIS.refreshBaseUrl + '' + APIS.fetchCustDailyDiets + `?fromDate=${data.fromDate}&dateRange=${data.dateRange}`;
    return this.httpClient.get(url, {}).toPromise();
  }

  getInstructionData(data) {
    const url = APIS.instructionApiUrl + data;
    return this.httpClient.get(url, {}).toPromise();
  }
  
}
