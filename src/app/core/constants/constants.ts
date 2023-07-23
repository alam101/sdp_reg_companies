export const LANGUAGE = {
  EN: "en",
  ES: "es"
};
export const ProfileInfo = {
  profileName:"",
  profilePic:""
}
export const CONSTANTS = {
  islocal: true,
  url: "./assets/apis/Master.json",
  isPlanActiveParent: false,
  isDetox:false,
  profile:{
      "freePlanExpiryDateTime" : "",
      "planType" : "",
      "isPaymentCancelOptionAvailable" : false
  },
  userDetails: {},
  dietDate:'',
  dietDateforHome:'',
  country: '',
  location_country: 'India',
  email:"",
  calBurnedToday: -1,
  selectedDietPlan :"weightLoss",
  selectedPlanThemeColor: '#01A3A4',
  defaultCalories: 0,
  Refund_policy: true,
  Diet_plan_open: true,
  isRandomLock: false,
  // image_URL:'http://test.fightitaway.com/images/',
  // wellness_image_URL:'http://test.fightitaway.com/wellness/',
  image_URL: 'https://app.smartdietplanner.com/images/',
  wellness_image_URL:'https://app.smartdietplanner.com/wellness/',
  isTestEnv: false,
  isNewAPIs: true,
  encryptKey : "base64:13rCQCD8hoWXg47PhGA4y4/hCkiIOH7gRVN3SbDL7ZM=",
  postImageBaseURL : "https://smartdietplanner.com/wp-content/uploads/"
};
//"http://ec2-34-209-64-202.us-west-2.compute.amazonaws.com/api/"
export const APIS = {
   BASEURL: "https://app.smartdietplanner.com/api/", //
   refreshBaseUrl: "https://app.smartdietplanner.com:8443/api/",
//  BASEURL: "https://test.fightitaway.com/api/", //https://app.smartdietplanner.com
//  refreshBaseUrl: "https://test.fightitaway.com:8443/api/",
  WP_BASEURL:"https://smartdietplanner.com/wp-json/wp/v2/posts",
  defaultDetail: "defaultDetail",
  profile: "profile",
  getSdpClientTestimony: "getSdpClientTestimony",
  updateProfile: "updateProfile",
  updateDemographic: "updateDemographic",
  updateLifeStyle: "updateLifeStyle",
  updateDiet: "updateDiet",
  authUrl: "authenticate?access_token=", 
  loginMethod: "login",
  dietPlans: "update/cust/dietplan",
  dietPlansDirect: "dietPlans",  //"fetchDietPlan",
  
  dietCovidPlans: "v2/dietPlans",
  getOnePlan:"customer/getOnePlan", 
  habitMaster: "habitMaster",
  customerHabit: "customer/habits",
  createHabit: "customer/createHabit",
  updateHabit: "customer/updateHabit",
  deleteHabits: "customer/deleteCustomerHabit",
  getHabitsForUpdate: "customer/habitsForUpdate",
  gerWeightGraph: "customer/weightGraphData",
  optionsData: "api/dietPlans/options",
  optionsDataNew: "dietPlans/options",
  optionSelection: "api/customer/addDietPref",
  optionSelectionNew : "customer/addDietPref",
  payment: "payment",
  getCouponList: "getCouponList",
  subscribePlanByCoupon: "customer/subscribePlanByCoupon",
  paymentConfirm: "payment/confirm",
  removePlan: "removePlan",
  updateWeight: "customer/updateWeight",
  googleFit:"https://www.googleapis.com/fitness/v1/users/",
  sendMail: "customer/sendEmail",
  addTnC:"addTnC",
  refresh:"dietPlan/refresh/option",
  refreshInternational:"dietPlans/refresh/options",
  fetchFood:"fetch/food" ,
  dietPlanTiming: "save/dietPlan/timings",
  fetchDietPlans:"fetch/dietplans" ,
  fetchHelp:"fetch/help",
  detoxStatus:"saveupdate/detox/dietPlan/status",
  updateExpiryDate:"update/payment/details",
  updateTargetWeight:"update/target/weight",
  updateCurrentWeigt:"update/current/weight",
  timings:"fetch/dietPlan/timings",
  getCouponListOffered: "getCouponList?isOffered=true",
  getRecipeOfTheDay: "fetch/countrywise/food/items?country=IND",
  lessThan100CaloriesFoodItem: "fetch/low/calories/foods",
  highProteinFoodItem :"fetch/high/protein/foods",
  healthyChoicesFoodItem :"fetch/healthy/choices",
  lessThan100SlotsFoodItem: "fetch/cust/diet/details",
  lessThan100SlotsFoodItemNew: "fetchCustDietDetails",
  updateCustDietPlan : "update/cust/dietplan",
  referralCode: "fetch/referral/email", //?code=RHsNM 
  referralUser: "save/cust/payment/referral/details",
  updateReferralUser: "update/cust/payment/referral/details",
  referralUserTransactions: "fetch/cust/payment/referral/transactions",
  ratings: "save/cust/ratings",
  getDietPreference: "getDietPreference",
  updateDietPref: "updateDietPref",
  fetchTodoList: "fetchTodoList",
  saveOrUpdateCustDailyTodo: "saveOrUpdateCustDailyTodo",
  saveHotLeads: "saveHotLeads",
  deleteHotLeads: "deleteHotLeads",
  getFoodPrefHistory: "getFoodPrefHistory",
  searchFoodItemByName: "searchFoodItemByName",
  updateDietPlan: "updateDietPlan",
  updateEatenFoodItems: "updateEatenFoodItems",
  postSaveFastingDetails: "saveFastingDetails",
  postFacts: "getMasterFacts",
  postFavorite: "setFavFacts",
  getRecipies: "fetchRecipes",
  fetchAffiliate:"fetchAffiliate",
  sendOTP:"sendOTP",
  verifyOTP:"verifyOTP",
  fetchOrder:"fetchOrders",
  createOrder:"createOrUpdateOrder",
  storeSurveyResponse:"storeSurveyResponse",

  /* Seprate Apis to save data in DB */
  saveFasting:"saveFasting",
  getFasting:"getFasting"

  // end
};
export const message = {
  age: "Please select age",
  single: "Please select gender",
  health: "Please select health conditions",
  marital: "Please select marital status",
  stress: "Please select any stress",
  activity: "Please select any activity",
  wakeup: "Please select wakeup time",
  sleep: "Please select sleep time",
  sleepType: "Please select sleep type",
  leaveOffice: "Please select time",
  comeBack: "Please select come back time",
  community: "Please select community",
  foodPref: "Please select food preferences",
  alchohal: "Please select alchohal",
  waterDrink: "Please select glass of water",
  food: "Please select food type",
  drinks: "Please select drinks",
  snacks: "Please select snacks",
  fruits: "Please select fruits",
  dishes: "Please select dishes",
  pules: "Please select pules and curries",
  rice: "Please select rice",
  roti: "Please select roti",
  dinner: "Please select dinner type",
  timing: "Please select time slot",
  globalError: "Something went wrong please try again!",
  country: "Please select country",
  workOuttiming: "Please select workout timing",
  selectType: "Please select your objective"
};

export const constantsJson = {
  premiumPlanInculdes:[
    {
      
  "image": "./assets/img/free-plan/30days.png",
    "title": "100% Result oriented.",
      "subtitle": "We are 100% result oriented",
      "bgcolor":"#ffa601",
      "popupTitle": "We are 100% result oriented",
      "desc": "Our app is intelligent enough to guide you in your transformation journey. To ensure the results our dieticians will also be available to guide/support you to ensure that you get the desired results.",
      "popImage" : "./assets/img/free-plan/30days.png"
          
    },
  {
    "image": "./assets/img/deficit-story-4.jpg",
    "title": "Access complete diet plan",
    "subtitle": "Access to all diet plan slots",
    "bgcolor":"#ffa610",
    "popupTitle": "Access to all diet plan slots",
    "desc": "We provide ample of healthy recommendations for each slot . We will also give you the access to food details along with healthy recipe suggestions. <br/> <br/>Eating healthy food of your choice and in limited portions is the only way to change your lifestyle. ",
    "popImage" : "./assets/img/deficit-story-4.jpg"
  },{
    "image": "./assets/img/free-plan/7-days-free-plan.png",
    "title": "7 Days Diet Plan",
    "subtitle": "Plan groceries in advance",
    "bgcolor":"#ffa601",
    "popupTitle": "Plan groceries in advance",
    "desc": "We can provide 7 days diet plan in advance which you can use to plan the groceries in advance and make this journey easier for you",
    "popImage" : "./assets/img/dietplan-story-4.jpg"
  },{
    "image": "./assets/img/free-plan/detox-plan-free-plan.png",
    "title": "Detox Plan",
    "subtitle": "Accelerate weight loss",
    "bgcolor":"#f8719f",
    "popupTitle": "Accelerate the weight loss",
    "desc": "You had a party and you had eaten too much. Now with detox or low calories plan you can try to come back to 3500 cal target of the week. <br/> <br/>I have designed the plan in such a way that you will not feel hungry and you will get sufficient nutrients also in the day.",
    "popImage" : "./assets/img/deficit-story-1.jpg"
  },{
    "image": "./assets/img/free-plan/nutri-check.svg",
    "title": "Nutricheck",
    "subtitle": "Meter to know what’s good or bad",
    "bgcolor":"#509bee",
    "popupTitle": "Meter to find healthy and tasty items",
    "desc": "Nutricheck uses an algorithm based on Net carbs, Protein, Calories density and fats to compute a score which indicates what is a healthy choice for you. <br/> <br/>From a database of 80,000 food items, find healthy choices, which are aligned to you taste.",
    "popImage" : "./assets/img/free-plan/nutri-check.svg"
  },
  // {
  //   "image": "./assets/img/free-plan/diet-plan-analysis-free-plan.png",
  //   "title": "Diet Plan Analysis",
  //   "subtitle": "Understand Science Behind Diet plan",
  //   "bgcolor":"#ffa610",
  //   "popupTitle": "Understand the considerations made in creating the diet plan for you",
  //   "desc": "Diet plan created by us takes care  many consideration -  calories need for you,  the nutrients proportions, healthy choices based on your lifestyle disorder if any and the timings aspects. <br/><br/>Analysis will explain you how many considerations we took to create this plan for you.",
  //   "popImage" : "./assets/img/dietplan-story-1.jpg"
  // },
  {
    "image": "./assets/img/free-plan/daily-diet-reco-free-plan.png",
    "title": "Personalise diet plan",
    "subtitle": "Align Plan with your taste",
    "bgcolor":"#f8719f",
    "popupTitle": "Align plan with your taste",
    "desc": "From a list of food items you can specify what are your personal preferences. <br/> <br/>We will use the choices given by you while creating the diet plan and will try to align it with your taste so that you can follow it for lifetime",
    "popImage" : "./assets/img/dietplan-story-2.jpg"
  },{
    "image": "./assets/img/free-plan/calories-analysis-free-plan.png",
    "title": "Special recommendations",
    "subtitle": "Best healthy options",
    "bgcolor":"#509bee",
    "popupTitle": "Best healthy options",
    "desc": "We help you to choose low calories , High protein or low fat items which are recommended for you. We also guide you what is not so good for your lifestyle disorder. <br/> <br/>This will again help you in eating healthy in the day",
    "popImage" : "./assets/img/deficit-story-2.jpg"
  },
  // {
  //   "image": "./assets/img/free-plan/weight-analysis-free-plan.png",
  //   "title": "Calories Deficit",
  //   "subtitle": "Most scientific way to track",
  //   "bgcolor":"#51c877"
  // },
  // {
  //   "image": "./assets/img/free-plan/meal-fasting-free-plan.png",
  //   "title": "Fasting Tracker",
  //   "subtitle": "Fast with ease",
  //   "bgcolor":"#51c877"
  // },
  {
    "image": "./assets/img/free-plan/download-diet-plan.png",
    "title": "Download plan in pdf",
    "subtitle": "Follow Diet in Offline Mode",
    "bgcolor":"#51c877",
    "popupTitle": "Follow diet plan in offline mode",
    "desc": "Diet plan for 3 days can be downloaded in pdf format.<br/> <br/> Take a printout and paste it in your kitchen. This way you can ensure that you will stick to the recommended plan.",
    "popImage" : "./assets/img/dietplan-story-3.jpg"
  },{
    "image": "./assets/img/free-plan/to-dos-follow.svg",
    "title": "To-Dos to follow daily habits",
    "subtitle": "Transform Your Lifestyle",
    "bgcolor":"#51c877",
    "popupTitle": "Personalised TO DOs for you",
    "desc": "Based on you lifestyle disorders and your app usage we give you personalised TO DOs <br/> <br/>Follow the TO DOs to gain most from this app and have maximum positive impact on your health.",
    "popImage" : "./assets/img/free-plan/to-dos-follow.svg"
  },{
    "image": "./assets/img/free-plan/app-intro-call.svg",
    "title": "An app intro call from dietitian",
    "subtitle": "Schedule as per convenience",
    "bgcolor":"#51c877",
    "popupTitle": "Schedule as per convenience",
    "desc": "Being a premium member you can request for an Intro call where in our Dietician will explain how to use the app and will also explain you your diet plan",
    "popImage" : "./assets/img/free-plan/app-intro-call.svg"
  }],
  diet_plans:[
    {
        "subDesc": "Live healthy ",
        "isVisible": true,
        "name": "Weight Loss + Diabetes",
        "isActivated": false,
        "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
        "id": "diabetes",
        "img": "../../assets/img/diabetes.jpeg",
        "desc": "Switch to Diabetes plan.",
        "subDescLine2": "without sacrificing taste"
    },
    {
        "subDesc": "Inspired from ",
        "isActivated": false,
        "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
        "name": "Weight Loss + Hypertension",
        "subDescLine2": "DASH diet",
        "img": "../../assets/img/hypertension.jpg",
        "isVisible": true,
        "desc": "Switch to Hypertension plan.",
        "id": "hypertension"
    },
    {
        "desc": "Switch to Cholesterol plan.",
        "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
        "isVisible": true,
        "isActivated": false,
        "id": "cholesterol",
        "subDesc": "Align diet ",
        "img": "../../assets/img/cholesterol-new.jpg",
        "subDescLine2": "with good fat",
        "name": "Weight Loss + Cholesterol"
    },
    {
        "id": "immunity_booster",
        "name": "Weight Loss + Immunity",
        "desc": "Switch to Preventive Immunity booster plan.",
        "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
        "subDesc": "Strenghten immunity with Nutrition",
        "isActivated": false,
        "img": "../../assets/img/immunity.jpeg",
        "isVisible": true
    },
    {
        "isActivated": false,
        "img": "../../assets/img/post_covid.jpg",
        "subDesc": "Nutrition plays vital role in healing.",
        "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
        "isVisible": true,
        "name": "Post Covid",
        "id": "post_covid",
        "desc": "Switch to Post Covid plan."
    },
    {
        "img": "../../assets/img/weight-loss.jpg",
        "subDesc": "Diet contributes 80% for weight loss",
        "desc": "Switch to Weight Loss plan.",
        "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
        "isVisible": true,
        "isActivated": false,
        "name": "Weight Loss",
        "id": "weightLoss"
    },
    {
        "subDesc": "Accelerate the weight loss.",
        "img": "../../assets/img/fast-weight-loss.jpg",
        "desc": "Switch to Weight Loss Fast-Track",
        "isVisible": true,
        "isActivated": false,
        "name": "Fast-track Weight Loss",
        "id": "weightLossPlus",
        "note": "The content of this app is provided as an information source and is not a substitute for professional advice."
    },
    {
        "subDescLine2": " medicine for PCOS",
        "isActivated": true,
        "desc": "Switch to PCOS Plan",
        "name": "PCOS",
        "img": "../../assets/img/pcos.jpg",
        "isVisible": true,
        "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
        "subDesc": "Food is the best",
        "id": "pcos"
    },
    {
      "subDescLine2": "",
      "isActivated": true,
      "isGenderCheck": true,
      "desc": "Maintain Muscle & Shred Fat",
      "name": "Tone Up",
      "img": "../../assets/img/WR2.svg",
      "isVisible": true,
      "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
      "subDesc": "Maintain Muscle & Shred Fat",
      "id": "fatShredding_morning"
    },
    {
      "subDescLine2": "",
      "isActivated": true,
      "isGenderCheck": true,
      "desc": "Pump Up & Get Stronger",
      "name": "Muscle Building",
      "img": "../../assets/img/WR3.svg",
      "isVisible": true,
      "note": "The content of this app is provided as an information source and is not intended as a substitute for professional medical advice.",
      "subDesc": "Pump Up & Get Stronger",
      "id": "muscleGain_morning"
    }
  ],
  wellnessData:[
    {
      title: "Ragi Flour",
      subtitle: "",
      image: CONSTANTS.wellness_image_URL + "ragi_flour.png",
      quantity: "500 Gms"
    },{
      title: "Himalyan Pink Salt",
      subtitle: "",
      image: CONSTANTS.wellness_image_URL + "himalyan_pink_Salt.png",
      quantity: "500 Gms"
    },{
      title: "Amarnath flour",
      subtitle: "",
      image: CONSTANTS.wellness_image_URL + "amarnath_flour.png",
      quantity: "500 Gms"
    },{
      title: "Apple Cider Vinegar",
      subtitle: "",
      image: CONSTANTS.wellness_image_URL + "apple_cider_vinegar.png",
      quantity: "500 ML"
    },{
      title: "Ultra low Carb flour",
      subtitle: "",
      image: CONSTANTS.wellness_image_URL + "ultra_low_carb_flour.png",
      quantity: "1000 Gms"
    },{
      title: "Seeds trail mix",
      subtitle: "",
      image: CONSTANTS.wellness_image_URL + "seed_trails_mix.png",
      quantity: "250 Gms"
    },{
      title: "Red rice",
      subtitle: "",
      image: CONSTANTS.wellness_image_URL + "red_rice.png",
      quantity: "500 Gms"
    }
  ],

  stateData: [
    {
      "id": 1,
      "state": "Rajasthan"
    },
    {
      "id": 2,
      "state": "Uttar Pradesh"
    },
    {
      "id": 3,
      "state": "Tamil Nadu"
    },
    {
      "id": 4,
      "state": "Assam"
    },
    {
      "id": 5,
      "state": "West Bengal"
    },
    {
      "id": 6,
      "state": "Madhya Pradesh"
    },
    {
      "id": 7,
      "state": "Uttarakhand"
    },
    {
      "id": 8,
      "state": "Maharashtra"
    },
    {
      "id": 9,
      "state": "Delhi"
    },
    {
      "id": 10,
      "state": "Odisha"
    },
    {
      "id": 11,
      "state": "Andhra Pradesh"
    },
    {
      "id": 12,
      "state": "Karnataka"
    },
    {
      "id": 13,
      "state": "Gujarat"
    },
    {
      "id": 14,
      "state": "Bihar"
    },
    {
      "id": 15,
      "state": "Chattisgarh"
    },
    {
      "id": 16,
      "state": "Telangana"
    },
    {
      "id": 17,
      "state": "Haryana"
    },
    {
      "id": 18,
      "state": "Goa"
    },
    {
      "id": 19,
      "state": "Jharkhand"
    },
    {
      "id": 20,
      "state": "Arunachal Pradesh"
    },
    {
      "id": 21,
      "state": "Tripura"
    },
    {
      "id": 22,
      "state": "Punjab"
    },
    {
      "id": 23,
      "state": "Kerala"
    },
    {
      "id": 24,
      "state": "Andaman And Nico.in."
    },
    {
      "id": 25,
      "state": "Jammu And Kashmir"
    },
    {
      "id": 26,
      "state": "Pondicherry"
    },
    {
      "id": 27,
      "state": "Megalaya"
    },
    {
      "id": 28,
      "state": "Himachal Pradesh"
    },
    {
      "id": 29,
      "state": "Chandigarh"
    },
    {
      "id": 30,
      "state": "Lakshadweep"
    },
    {
      "id": 31,
      "state": "Nagaland"
    },
    {
      "id": 32,
      "state": "Manipur"
    },
    {
      "id": 33,
      "state": "Sikkim"
    },
    {
      "id": 34,
      "state": "Mizoram"
    },
    {
      "id": 35,
      "state": "Dadra And Nagar Hav."
    },
    {
      "id": 36,
      "state": "Daman And Diu"
    }
  ]
}
