import { Injectable } from "@angular/core";
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { UTILITIES } from "./core/utility/utilities";
import { Storage } from "@ionic/storage";
import { APIS, CONSTANTS } from "./core/constants/constants";
import { APIS as APP, SUBAPIS } from "./shared/constants/constants";
import { map } from 'rxjs/operators';
import { forkJoin, from, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AppService {
  public setTerms = false;
  rc: any;
  private offerIcon = new Subject<any>();
  private paymentDone = new Subject<any>();
  private expDateUpdated = new Subject<any>();
  private showRateUS = new Subject<any>();
  private changeplanToggle = new Subject<any>();
  private changeTodaysCalToggle = new Subject<any>();
  private snoozeWater = new Subject<any>();
  private extendWaterNotification = new Subject<any>();
  private extendFastingNotification = new Subject<any>();
  private nutriScorePayment = new Subject<any>();
  private isPremiumUser = new Subject<any>();
  private mainPageScrollTop = new Subject<any>();
  private navigateToLunchSlot = new Subject<any>();
  private goToDetoxPlan = new Subject<any>();
  private goToAnalysis = new Subject<any>();
  private goToPersonalDiet = new Subject<any>();
  private downloadDietPlan = new Subject<any>();
  private goToDoSection = new Subject<any>();
  offerIcon$ = this.offerIcon.asObservable();
  toggleSwitch$ = this.changeplanToggle.asObservable();
  toggleSwitchTodaysCal$ = this.changeTodaysCalToggle.asObservable()
  paymentDone$ = this.paymentDone.asObservable();
  expDateUpdated$ = this.expDateUpdated.asObservable();
  extendWaterNotification$ = this.extendWaterNotification.asObservable()
  extendFastingNotification$ = this.extendFastingNotification.asObservable()
  showRateUS$ = this.showRateUS.asObservable();
  snoozeWater$ = this.snoozeWater.asObservable();
  nutriScorePayment$ = this.nutriScorePayment.asObservable();
  isPremiumUser$ = this.isPremiumUser.asObservable();
  mainPageScrollTop$ = this.mainPageScrollTop.asObservable();
  navigateToLunchSlot$ = this.navigateToLunchSlot.asObservable();
  goToDetoxPlan$ = this.goToDetoxPlan.asObservable();
  goToAnalysis$ = this.goToAnalysis.asObservable();
  goToPersonalDiet$ = this.goToPersonalDiet.asObservable();
  downloadDietPlan$ = this.downloadDietPlan.asObservable();
  goToDoSection$ = this.goToDoSection.asObservable();
  isNew = CONSTANTS.isNewAPIs;
  private httpClient1: HttpClient;
  constructor(
    private utilities: UTILITIES,
    private storage: Storage,
    private httpClient: HttpClient,
    httpBackend: HttpBackend,
   

  ) { 
    this.httpClient1 = new HttpClient(httpBackend);
  }
  getFoodSugesstions(query: any) {
    const url = APIS.refreshBaseUrl + `fetchFoodSuggestions?source=${query}`;
    return this.httpClient.get(url, {}).toPromise();
  }
  getLocalData(url) {
    return this.httpClient.get(url, {}).toPromise();
  }
  getOptions1(slot, isDetox, country, categories = "") {
    country = country ? country : "IND";
    let url;
    if (this.isNew) {
      let reqBody = {
        slot: slot,
        customerId: CONSTANTS.email,
        categories,
      };
      url = APIS.refreshBaseUrl + "" + APIS.optionsDataNew;
      return this.httpClient.post(url, reqBody, {}).toPromise();
    } else {
      url =
        APIS.BASEURL +
        "" +
        APIS.optionsData +
        "?slot=" +
        slot +
        // + "&detox=" + isDetox
        "&country=" +
        country;
      return this.httpClient.get(url, {}).toPromise();
    }
  }
  getAllRstaurant(query: any, type?: any, value?: any) {
    let d = new HttpParams();
    if (query) {
      d = d.append("topRestaurantOnly", query);
    }
    if (type) {
      d = d.append(type, value);
    }
    const url = APIS.refreshBaseUrl + `fetchRestaurant`;
    return this.httpClient.get(url, { params: d }).toPromise();
  }

  getAllRstaurantByCategory(type?: any, value?: any, page?: any) {
    let d = new HttpParams();
    if (type) {
      d = d.append("source", type);
      d = d.append(type === "R" ? "brands" : "categories", value);
    } else {
      d = d.append("searchKeyword", value);
    }
    if (page) {
      d = d.append("page", page);
    }
    const url = APIS.refreshBaseUrl + `fetchFoodByCategory`;
    return this.httpClient.get(url, { params: d }).toPromise();
  }

  getAllRestaurantbyName(value?: any, page?: any) {
    let d = new HttpParams();
    d = d.append("foodName", value);
    if (page) {
      d = d.append("page", page);
    }
    const url = APIS.refreshBaseUrl + `searchFoodItem`;
    return this.httpClient.post(url, "", { params: d }).toPromise();
  }

  getNotifyMessage(selectedFoodItems){
    localStorage.setItem("foodNotificationMsg", 'Diet Plan Updated Successfully.');
  }

  offerCountDown(){
    let deadline = new Date(localStorage.getItem("countDownTimer")).getTime();
    
    let self = this;
    let x = setInterval(function () {
      let now = new Date().getTime();
      let t = deadline - now;
      if (t < 0) {
        clearInterval(x);
        console.log("In service");
        localStorage.setItem("offerTimeExpired", "true");
        self.offerIcon.next();
        return false;
      }

    }, 1000);
  }

  externalRegistration(key:string,payload):Observable<any>{
    const url = APIS.BASEURL+""+APIS.authenticateExternal;
    return this.httpClient.post(url+`?key=${key}`,payload,{headers:{}});
  }
  getTokenExternal(key:string,userid:string):Observable<any>{
    const url = APIS.BASEURL+""+APIS.getTokenExternal;
    return this.httpClient.get(url+`?key=${key}&userId=${userid}`,{headers:{}});
  }

  shortenUrl(urllink){
    const url = 'https://shrtlnk.dev/api/v2/link';
    const header= new HttpHeaders();
         header.set("api-key","CfXT326OS1A4H7pZAajKdIMkjCdfFqjMM2kwYfUuSmLyH");
         header.set("Accept","application/json");
         header.set("Content-Type","application/json");
         header.set("mode","cors");
   const payload={
    url: urllink
   }
         return this.httpClient.post(url,payload,{headers:header});
  }

  paymentDoneFunc(){
    this.paymentDone.next();
  }

  expDateUpdatedFunc(){
    this.expDateUpdated.next();
  }

  extendWaterNotificationFunc(){
    this.extendWaterNotification.next();
  }

  extendFastingNotificationFunc(){
    this.extendFastingNotification.next();
  }

  showRateUSFunc(){
    this.showRateUS.next();
  }

  toogleSwitchFunc(data){
    this.changeplanToggle.next(data);
  }

  toogleSwitchTodaysCalFunc(data){
    this.changeTodaysCalToggle.next(data);
  }

  snoozeWaterFunc(){
    this.snoozeWater.next();
  }

  nutriScorePaymentFunc(){
    this.nutriScorePayment.next();
  }

  isPremiumUserFunc(){
    this.isPremiumUser.next();
  }

  mainPageScrollTopFunc(){
    this.mainPageScrollTop.next();
  }

  navigateToLunchSlotFunc(){
    this.navigateToLunchSlot.next();
  }

  goToDetoxPlanFunc(){
    this.goToDetoxPlan.next();
  }

  goToAnalysisFunc(){
    this.goToAnalysis.next();
  }

  goToPersonalDietFunc(){
    this.goToPersonalDiet.next();
  }

  downloadDietPlanFunc(){
    this.downloadDietPlan.next();
  }

  goToDoSectionFunc(){
    this.goToDoSection.next();
  }

  searchProfile(email) {

    const url = APP.baseurl + "customer-info/"+email;
    return this.httpClient.get(url, {}).toPromise();
  }

  getBeatoData(userid){
    const url = CONSTANTS.beatoAPI;
    const header =new HttpHeaders().set("Authorization","Bearer eebdc61a834a99b856b99e0754b4383120b92f118a1e18a8225e0b8772b80f520138d93913fc30df").set("Content-Length","<calculated when request is sent>").set("Host","<calculated when request is sent>")
    return this.httpClient1.post(url,{user_id :`${userid}`}, {headers:header}).toPromise();
  }
  updateTargetCal(payload,userid,token){
    const url = APIS.BASEURL8445+""+CONSTANTS.updateTargetCal+`${payload}&userId=${userid}`;
    const header =new HttpHeaders().set("Authorization",`Bearer ${token}`)
    return this.httpClient1.post(url,payload ,{headers:header}).toPromise();
  }
  updateSlotRemarks(payload,userId,token){
    const url = APIS.BASEURL8444+CONSTANTS.updateSlotRemarks+userId;
    const header =new HttpHeaders().set("Authorization",`Bearer ${token}`)
    return this.httpClient.post(url,payload).toPromise();
  }
  getSlotRemarks(payload,userId,token){
    const url = APIS.BASEURL8444+CONSTANTS.getSlotRemarks+`${userId}`;
    const header =new HttpHeaders().set("Authorization",`Bearer ${token}`)
    return this.httpClient.post(url,payload).toPromise();
  }
  getProfile() {

    const url = APP.baseurl + "customer-info/"+localStorage.getItem('email');
    return this.httpClient.get(url, {}).toPromise();
  }
  getFBToken(user, config) {

    let userData = { authToken: "" };
    if (user != null) {
      userData = user;
    }
    const url = APIS.BASEURL + "" + APIS.authUrl + "" + userData.authToken + "&email=" + user.email + "&name=" + user.name + "&firstName=" + user.firstName + "&lastName=" + user.lastName + "&provider=" + user.provider + "&appSource=" + config.app_source;
    console.log("simba", url);

    return this.httpClient.get(url, {}).toPromise();
  }

  getToken(user, config) {
    let userData = { authToken: "" };
    if (user != null) {
      userData = user;
    }
    const url = APIS.BASEURL + "" + APIS.authUrl + "" + userData.authToken + "&email=" + user.email +
      "&appSource=" + config.app_source + "&device=" + config.device + "&os=" + config.os + "&country=" + config.country + "&region=" + config.region+ "&provider="+user.provider;
    console.log("simba", url);
    return this.httpClient.get(url, {}).toPromise();
  }

  getAppleToken(user, config) {
    let userData = { authToken: "" };
    if (user != null) {
      userData = user;
    }
    const url = APIS.BASEURL + "" + APIS.authUrl + "na&email=" + user.email + "&name='" + user.firstName + " " + user.lastName + "'&firstName=" + user.firstName + "&lastName=" + user.lastName + "&provider="+user.provider+ "&appSource=" + config.app_source;
    console.log("simba", url);

    return this.httpClient.get(url, {}).toPromise();
  }

  getPhoneNumberToken(user, config) {
    let userData = { authToken: "" };
    if (user != null) {
      userData = user;
    }
    // const url = APIS.BASEURL + "" + APIS.authUrl + "na&email=" + user.email + "&name='" + user.firstName + " " + user.lastName + "'&firstName=" + user.firstName + "&lastName=" + user.lastName + "&provider=" + user.provider + "&appSource=" + config.app_source;
    const url = APIS.BASEURL + "" + APIS.authUrl + "na&email=" + user.email + "&name='" + user.firstName + " " + user.lastName + "'&firstName=" + user.firstName + "&lastName=" + user.lastName + "&provider=mobile&appSource=" + config.app_source;
    console.log("simba", url);

    return this.httpClient.get(url, {}).toPromise();
  }

  getCorporateToken(user, config) {
    let userData = { authToken: "" };
    if (user != null) {
      userData = user;
    }
    // const url = APIS.BASEURL + "" + APIS.authUrl + "na&email=" + user.email + "&name='" + user.firstName + " " + user.lastName + "'&firstName=" + user.firstName + "&lastName=" + user.lastName + "&provider=" + user.provider + "&appSource=" + config.app_source;
    const url = APIS.BASEURL + "" + APIS.authUrl + "na&email=" + user.email + "&name='" + user.firstName + " " + user.lastName + "'&firstName=" + user.firstName + "&lastName=" + user.lastName + "&provider=EMAIL&appSource=" + config.app_source;
    console.log("simba", url);

    return this.httpClient.get(url, {}).toPromise();
  }

  getEmailToken(user, config) {
    let userData = { authToken: "" };
    if (user != null) {
      userData = user;
    }
    // const url = APIS.BASEURL + "" + APIS.authUrl + "na&email=" + user.email + "&name='" + user.firstName + " " + user.lastName + "'&firstName=" + user.firstName + "&lastName=" + user.lastName + "&provider=" + user.provider + "&appSource=" + config.app_source;
    const url = APIS.BASEURL + "" + APIS.authUrl + "na&email=" + user.email + "&name='" + user.firstName + " " + user.lastName + "'&firstName=" + user.firstName + "&lastName=" + user.lastName + "&provider=mobile&appSource=" + config.app_source;
    console.log("simba", url);

    return this.httpClient.get(url, {}).toPromise();
  }

  fetchFood1(reqBody) {
    let url;
    if (this.isNew) {
      reqBody["customerId"] = CONSTANTS.email;
      reqBody["date"] = CONSTANTS.dietDate;
      reqBody["country"] = CONSTANTS.country;
      url = APIS.refreshBaseUrl + APIS.fetchFood;
    } else {
      url = APIS.BASEURL + APIS.fetchFood;
    }
    return this.httpClient
      .post(url, reqBody, {})
      .pipe(map((results) => results));
  }

  postOptionFoodList(foodCodeList,email) {

    let url;
    if(this.isNew){
      foodCodeList["customerId"] = CONSTANTS.email,
      url = APP.baseurl  + "" + APIS.optionSelection+`?userId=${CONSTANTS.email}`;
    }else{
      url = APP.baseurl + "" + APIS.optionSelection+`?userId=${CONSTANTS.email}`;
    }

    return this.httpClient.post(url, foodCodeList, {}).toPromise();
  }
  postOptionFoodList1(foodCodeList) {
    let url;
    if (this.isNew) {
      (foodCodeList["customerId"] = CONSTANTS.email),
        (url = APIS.refreshBaseUrl + "" + APIS.optionSelectionNew);
    } else {
      url = APIS.BASEURL + "" + APIS.optionSelection;
    }

    // url = APIS.BASEURL + "" + APIS.optionSelectionNew;

    return this.httpClient.post(url, foodCodeList, {}).toPromise();
  }
  getDefaultData(token) {

    const url = APIS.BASEURL + "" + APIS.defaultDetail;
    console.log("manual header", token);
    const headers = new HttpHeaders().set("authorization",`bearer ${token}`);
    return this.httpClient1.get(url, {headers:headers}).toPromise();
  }

  getDefaultDataDiet(id: any) {
    id = id ? id : "IND";
    const url = APIS.BASEURL + "" + APIS.defaultDetail + "?country="+id;
    return this.httpClient.get(url, {}).toPromise();
  }

  postDemographic(reqBody) {
    const url = APIS.BASEURL + "" + APIS.updateDemographic;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  dietPlanSlotTimingUpdate(reqBody) {
    const url = APIS.BASEURL + "" + APIS.dietPlanTiming;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }


  postLifeStyle(reqBody) {

    const url = APIS.BASEURL + "" + APIS.updateLifeStyle;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  postDiet(reqBody) {

    const url = APIS.BASEURL + "" + APIS.updateDiet;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  getDietPlans(isDetox, date, country, recommended,isfetch=false) {
     const url = APP.baseurl + "" + APIS.dietPlansDirect + `?date=${date}&userId=${CONSTANTS.email}&refresh=false`;
      return this.httpClient.get(url, {}).toPromise();
   // }
  }

  getDietPlansManagement(date, email) {
   
    const url = APP.baseurl + "" + APIS.dietPlansDirect + `?date=${CONSTANTS.dietDate}&userId=${email}&refresh=false`;
    return this.httpClient.get(url, {}).toPromise();
  }
  getOptionsManagement(slot, email) {
   
    const url = APP.baseurl + "options"+`?slot=${slot}&userId=${email}`;
    return this.httpClient.get(url, {}).toPromise();
  }
  getOptionsManagementNew(slot, email,category,date,dietplanname) {
   
    const url = APP.baseurl + "custom/dietPlan/fetchFoodOptions"+`?slot=${slot}&email=${email}&category=${category}&date=${date}&dietPlanName=${dietplanname}`;
    return this.httpClient.get(url, {}).toPromise();
  }
  updateOptionsManagementNew(slot, email,category,date,dietplanname,payload) {
   
    const url = APP.baseurl + "custom/dietPlan/updateFoodOptions"+`?slot=${slot}&email=${email}&category=${category}&date=${date}&dietPlanName=${dietplanname}`;
    return this.httpClient.post(url,payload).toPromise();
  }
  deleteCustomerHabit(reqBody) {

    const url = APIS.BASEURL + "" + APIS.deleteHabits;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  getHabitsForUpdate() {

    const url = APIS.BASEURL + "" + APIS.getHabitsForUpdate;
    return this.httpClient.get(url, {}).toPromise();
  }

  fetchHabitsList() {

    const url = APIS.BASEURL + "" + APIS.habitMaster;
    return this.httpClient.get(url, {}).toPromise();
  }

  fetchCustomerHabitList() {

    const url = APIS.BASEURL + "" + APIS.customerHabit;
    return this.httpClient.get(url, {}).toPromise();
  }

  addCustomerHabit(reqBody) {

    const url = APIS.BASEURL + "" + APIS.createHabit;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  payment(reqBody) {

    const url = APIS.BASEURL + "" + APIS.payment;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  paymentConfirm(reqBody) {

    const url = APIS.BASEURL + "" + APIS.paymentConfirm;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  updateCustomerHabit(reqBody) {

    const url = APIS.BASEURL + "" + APIS.updateHabit;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  updateWeight(reqBody) {

    const url = APIS.BASEURL + "" + APIS.updateWeight;
    console.log(url + ":-update weight:-", reqBody);

    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  unsubscribe(email) {

    const url = APIS.BASEURL + "" + APIS.removePlan + "?email=" + email;
    return this.httpClient.get(url, {}).toPromise();
  }
  getWeightGraph() {

    const url = APIS.BASEURL + "" + APIS.gerWeightGraph;
    return this.httpClient.get(url, {}).toPromise();
  }
  sendMail(reqBody) {
    const url = APIS.BASEURL + "" + APIS.sendMail;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  getCouponList() {
    const url = APIS.BASEURL + "" + APIS.getCouponList;
    // return this.httpClient.get(url, {}).toPromise();
    return this.httpClient.get(url).pipe(map(results => results));
  }

  subscribePlanByCoupon(reqData) {
    const url = APIS.BASEURL + "" + APIS.subscribePlanByCoupon;
    return this.httpClient.post(url, reqData).toPromise();
  }

  getOptions(slot, isDetox, country,email) {
    // country = country ? country : "IND";
     let url;
    // if(this.isNew){
    //   let reqBody = {
    //     "slot": slot,
    //     "customerId": CONSTANTS.email
    //   }
    //   url = APP.baseurl + "" + APIS.optionsData+ `?slot=${slot}&userId=${email}`;
    //   return this.httpClient.post(url, reqBody, {}).toPromise();
    // }else{
      url = APP.baseurl + "" + APIS.optionsData + `?slot=${slot}&userId=${email}`
      // + "&detox=" + isDetox
      + "&country=" + country;
      return this.httpClient.get(url, {}).toPromise();
   // }
  }
  getOptionsNew(slot, isDetox, country,email) {
     let url;
      url = APP.baseurl + "api/" + APIS.optionsData + `?slot=${slot}&userId=${email}`;
      return this.httpClient.get(url, {}).toPromise();
   // }
  }
  terms(reqData) {
    const url = APIS.BASEURL + "" + APIS.addTnC;
    return this.httpClient.post(url, reqData).toPromise();
  }
  getOnePlan1(token) {

    const url = APP.baseurl + "" + APIS.getOnePlan;
  console.log("manual header", token);
  const headers = new HttpHeaders().set("authorization",`bearer ${token}`);
  return this.httpClient1.get(url, {headers:headers}).toPromise();
  }
  
  getOnePlan() {

    const url = APP.baseurl + "" + APIS.getOnePlan;
    
    return this.httpClient.get(url, {}).toPromise();
  }

  copyDietPlan(userId,fromDate,toDate){
   const url = APP.baseurl + "" + APIS.copyDietPlanWeekly+`?userId=${userId}&fromDate=${fromDate}&toDate=${toDate}&range=7`; 
   return this.httpClient.post(url, {}).toPromise();
  }

  googoleFit(userid, ) {
    const url = APIS.googleFit + `${userid}/dataset:aggregate`;
    return this.httpClient.post(url, {}, {}).toPromise();
    //
  }


  waterDrank(data) {
    return this.httpClient.post(APIS.BASEURL + 'customer/water/drank', data, {})
      .pipe(map(results => results));
  }

  remindertoggle() {
    return this.httpClient.get(APIS.BASEURL + 'fetch/water/reminder', {})
      .pipe(map(results => results));
  }

  reminderupdate(data) {
    return this.httpClient.post(APIS.BASEURL + 'customer/water/reminder', data, {})
      .pipe(map(results => results));
  }

  tips() {
    return this.httpClient.get(APIS.BASEURL + 'water/tips ', {})
      .pipe(map(results => results));
  }
  user() {
    return this.httpClient.get(APIS.BASEURL + 'customer/water/recommendation')
      .pipe(map(results => results));
  }

  url = "";
  calories() {
    return this.httpClient.get(APIS.BASEURL + 'fetch/target/calories').pipe(map(results => results));
  }

  refresh(reqBody,email) {
    CONSTANTS.country = CONSTANTS.country ? CONSTANTS.country : "IND";
    let url;
    if(this.isNew){
      reqBody["userId"] = email;
      url = APP.baseurl + APIS.refreshInternational+`?userId=${email}`;
    }else{
      if (CONSTANTS.country != "IND") {
        reqBody["userId"] = email;
      } else {
        delete reqBody.country
      }
      url = CONSTANTS.country != "IND"  ? APP.baseurl + APIS.refreshInternational+`?userId=${email}` : APP.baseurl + APIS.refresh+`?userId=${email}`;
    }
    // let url = CONSTANTS.country != "IND" ? "https://test.fightitaway.com:8443/api/dietPlans/refresh/options" : APIS.BASEURL + APIS.refresh;
    //
    return this.httpClient.post(url, reqBody, {}).pipe(map(results => results));
  }
  fetchFood(reqBody,email) {
    let url;
    if(this.isNew){
      reqBody["customerId"] = CONSTANTS.email;
      reqBody["date"] = CONSTANTS.dietDate;
      reqBody["country"] = "IND";
      url = APP.baseurl + APIS.fetchFood+`?userId=${email}`;
    }else{
      url = APP.baseurl + APIS.fetchFood;
    }
    return this.httpClient.post(url, reqBody, {}).pipe(map(results => results));
  }
  searchFoodItem(name) {
    let url;
        url = APP.baseurlApi + APIS.searchFoodItem+`?foodName=${name}&page=1`;
       return this.httpClient.post(url, {}, {}).pipe(map(results => results));
  }

 
  getWordPressCategory(categoryId) {
    return this.httpClient.get(`${APIS.WP_BASEURL}?categories=${categoryId}&page=1&per_page=100&_embed`)
      .pipe(map(results => results));
  }

  getCurrentLocation() {
    return this.httpClient.get('https://geolocation-db.com/json/', {}).toPromise();
  }
  fetchDietPlan() {
    return this.httpClient.get(APIS.BASEURL + APIS.fetchDietPlans, {}).pipe(map(results => results));
  }

  getFAQ() {
    return this.httpClient.get(APIS.BASEURL + APIS.fetchHelp, {}).pipe(map(results => results));
  }

  getByPostId(id) {
    const url = APIS.WP_BASEURL + "?include[]=" + id;
    return this.httpClient.get(url, {}).toPromise();
  }

  updateDetoxStatus(reqBody) {
    return this.httpClient.post(APIS.BASEURL + APIS.detoxStatus, reqBody, {}).pipe(map(results => results));
  }

  updateExpiryDate(reqBody) {
    return this.httpClient.post(APIS.BASEURL + APIS.updateExpiryDate, reqBody, {}).toPromise();

  }

  updateCurrentWeight(reqBody) {
    const url = APIS.BASEURL + "" + APIS.updateCurrentWeigt;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  updateTargetWeight(reqBody) {
    const url = APIS.BASEURL + "" + APIS.updateTargetWeight;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  getDietTimings() {
    const url = APIS.BASEURL + "" + APIS.timings;
    return this.httpClient.get(url, {}).toPromise();
  }

  getCouponListOffered(){
    const url = APIS.BASEURL + "" + APIS.getCouponListOffered;
    return this.httpClient.get(url, {}).toPromise();
  }

  getRecipeOfTheDay(){
    const url = APIS.BASEURL + "" + APIS.getRecipeOfTheDay;
    return this.httpClient.get(url, {}).toPromise();
  }

  getSubFoodItems(reqBody) {
    reqBody.customerId = CONSTANTS.email
    // const url = APIS.BASEURL + "" + APIS.lessThan100SlotsFoodItem;
    const url = APIS.BASEURL + "" + APIS.lessThan100SlotsFoodItemNew;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  getLessThan100CaloriesFoodItem(){
    const url = APIS.BASEURL + "" + APIS.lessThan100CaloriesFoodItem;
    return this.httpClient.get(url, {}).toPromise();
  }

  getHighProteinFoodItem(){
    const url = APIS.BASEURL + "" + APIS.highProteinFoodItem;
    return this.httpClient.get(url, {}).toPromise();
  }

  getHealthyChociesFoodItem(){
    const url = APIS.BASEURL + "" + APIS.healthyChoicesFoodItem;
    return this.httpClient.get(url, {}).toPromise();
  }

  doUpdateCustDietPlan(reqBody) {
    const url = APIS.BASEURL + "" + APIS.updateCustDietPlan;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  getReferralCode(referralCode){
    let reqBody = {};
    reqBody["customerId"] = CONSTANTS.email;
    const url =  APIS.refreshBaseUrl + "" + APIS.referralCode + "?referralCode="+ referralCode;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  doReferralUser(reqBody) {
    const url = APIS.BASEURL + "" + APIS.referralUser;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  updateReferralUser(reqBody) {
    const url = APIS.BASEURL + "" + APIS.updateReferralUser;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  getReferralUserTransactions(reqBody) {
    const url = APIS.BASEURL + "" + APIS.referralUserTransactions;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  postRatings(reqBody){
    const url = APIS.BASEURL + "" + APIS.ratings;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  getDietPreference(payload){
    const baseurl='https://app.smartdietplanner.com:8444/';
    const url = baseurl + "" + APIS.getDietPreference+`${payload.userId}`;
    return this.httpClient.get(url, {}).toPromise();
  }

  updateDietPref(userid,reqBody){
    const baseurl='https://app.smartdietplanner.com:8444/';
    const url = baseurl + "" + APIS.updateDietPref+"?userId="+userid;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }

  fetchTodoList(){
    let reqBody = {
     "customerId" : CONSTANTS.email //CONSTANTS.email//CONSTANTS.email
    }
    const url = APIS.refreshBaseUrl + "" + APIS.fetchTodoList;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }

  saveOrUpdateCustDailyTodo(reqBody){
    reqBody["customerId"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.saveOrUpdateCustDailyTodo;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }

  saveHotLeads(reqBody){
    reqBody["customerId"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.saveHotLeads;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }

  deleteHotLeads(reqBody){
    reqBody["customerId"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.deleteHotLeads;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }

  updateProfile(reqBody){
    const url = APIS.BASEURL + "" + APIS.updateProfile;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }

  getFoodPrefHistory(slot){
    let reqBody = {};
    reqBody["customerId"] = CONSTANTS.email;
    reqBody["slot"] = slot;
    const url = APIS.refreshBaseUrl + "" + APIS.getFoodPrefHistory;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }

  searchFoodItemByName(searchText,token){
    let reqBody = {};
    reqBody["customerId"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + `searchFoodItem?foodName=${searchText}&page=1`;
    const headers = new HttpHeaders().set("authorization",`bearer ${token}`);
    return this.httpClient1.post(url,{}, {headers:headers}).toPromise();
  }
  
  searchFoodItemByName1(searchText) {
    let reqBody = {};
    reqBody["customerId"] = CONSTANTS.email;
    const url =
      APIS.refreshBaseUrl +
      "" +
      APIS.searchFoodItemByName +
      "?foodName=" +
      searchText;
    return this.httpClient.post(url, reqBody, {}).toPromise();
  }
  updateDietPlan(reqBody){
    console.log(reqBody);
    reqBody["customerId"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.updateDietPlan;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }

  updateEatenFoodItems(reqBody){
    reqBody["customerId"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.updateEatenFoodItems;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }

  // async saveEncrypt(_data) {
	// 	return await CryptoJS.AES.encrypt(JSON.stringify(_data), CONSTANTS.encryptKey).toString();
	// }

  // async getDecrypt(data) {
  //   let _data = data.toString().replace(/p1L2u3S/g, '+' ).replace(/s1L2a3S4h/g, '/').replace(/e1Q2u3A4l/g, '=');
	// 	const bytes = CryptoJS.AES.decrypt(_data, CONSTANTS.encryptKey);
	// 	if (bytes.toString()) {
	// 		return await JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
	// 	}
	// }

  postSaveFastingDetails(reqBody){
    reqBody["customerId"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.postSaveFastingDetails;
    return this.httpClient.post(url,reqBody, {}).toPromise();
  }
  getFacts(){
    const url = APIS.refreshBaseUrl + "" + APIS.postFacts;
    return this.httpClient.post(url, {customerId: CONSTANTS.email,currentLot:1,lotSize:100},{}).toPromise();
  }
  postFavoriteFacts(factId){
    const url = APIS.refreshBaseUrl + "" + APIS.postFavorite;
    return this.httpClient.post(url, {customerId: CONSTANTS.email,factId:factId},{}).toPromise();
  }
  getRecipies(reqBody){
    reqBody["customerId"] = CONSTANTS.email;
    // reqBody["date"] = "06122021";
    const url = APIS.refreshBaseUrl + "" + APIS.getRecipies;
    return this.httpClient.post(url, reqBody ,{}).toPromise();
  }

  getAffiliate(){
    const url = APIS.refreshBaseUrl + "" + APIS.fetchAffiliate+`?userId=${CONSTANTS.email}`;
    return this.httpClient.get(url, {}).toPromise();
  }
  sendOTP(reqBody){
    // reqBody["customerId"] = reqBody.email;
    console.log("reqBody",reqBody);
    const url = APIS.refreshBaseUrl + "" + APIS.sendOTP;
    return this.httpClient.post(url, reqBody ,{}).toPromise();
  }
  verifyOTP(reqBody){
     console.log("reqBody",reqBody);
    const url = APIS.refreshBaseUrl + "" + APIS.verifyOTP;
    return this.httpClient.post(url, reqBody ,{}).toPromise();
  }
  fetchOrder(reqBody){
    reqBody["userId"] = CONSTANTS.email;
   const url = APIS.refreshBaseUrl + "" + APIS.fetchOrder;
   return this.httpClient.post(url, reqBody ,{}).toPromise();
 }
  createOrder(reqBody){
    // reqBody["customerId"] = CONSTANTS.email;
  const url = APIS.refreshBaseUrl + "" + APIS.createOrder;
  return this.httpClient.post(url, reqBody ,{}).toPromise();
  }

  getSurvey(){
    const url = './assets/stub/survey_master.json';
    return this.httpClient.get(url, {}).toPromise();
  }
  getExercise(){
    const url = './assets/stub/exercise.json';
    return this.httpClient.get(url, {}).toPromise();
  }

  postSurvey(reqBody){
    reqBody["_id"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.storeSurveyResponse;
    return this.httpClient.post(url, reqBody ,{}).toPromise();
  }

  saveFasting(reqBody){
    reqBody["_id"] = CONSTANTS.email;
    const url = APIS.refreshBaseUrl + "" + APIS.saveFasting;
    return this.httpClient.post(url, reqBody ,{}).toPromise();
  }
  getFasting(){
    const url = APIS.refreshBaseUrl + "" + APIS.getFasting;
    return this.httpClient.get(url,{}).toPromise();
  }

  postCopyDietPlan(reqBody,fromDate,toDate,range){
      const url = APP.baseurl + `copyDietPlan?userId=${CONSTANTS.email}&fromDate=${fromDate}&toDate=${toDate}&range=${range}`;
    return this.httpClient.post(url, reqBody ,{}).toPromise();
  }
  getRefreshDietPlan(date){
    const url = APP.baseurl + `fetchDietPlan?userId=${CONSTANTS.email}&date=${date}&refresh=true`;
  return this.httpClient.get(url ,{}).toPromise();
}
getDietRecall(userId){
  const url = APP.baseurl + `${SUBAPIS.getDietRecall}${userId}`;
  return this.httpClient.get(url,{}).toPromise();
}
 
saveDietRecall(userId,payload){
  const url = APP.baseurl + `${SUBAPIS.saveDietRecall}${userId}`;
  return this.httpClient.post(url,payload,{}).toPromise();
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

}
