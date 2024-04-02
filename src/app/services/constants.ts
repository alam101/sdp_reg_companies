
export const APIS = {
    baseurl:  "https://app.smartdietplanner.com:8444/", 
    userBaseUrl:"https://app.smartdietplanner.com/api/", 
    mainUrl: "https://app.smartdietplanner.com" ,
    baseurl4444:  "https://app.smartdietplanner.com:4444",
    baseurlApi:  "https://app.smartdietplanner.com:4444/api/",
    BASEURL8445: "https://app.smartdietplanner.com:8445/",
  BASEURL8444: "https://app.smartdietplanner.com:8444/",
  refreshBaseUrl: "https://app.smartdietplanner.com:8443/api/",
  WP_BASEURL:"https://smartdietplanner.com/wp-json/wp/v2/posts",
}

export const API = {

    BASEURL8444:'https://app.smartdietplanner.com:8444/',
    BASEURL8443:'https://app.smartdietplanner.com:8443/',
    BASEURL:'https://app.smartdietplanner.com/api/',
    externalBaseUrl:'https://app.smartdietplanner.com:8445/api/',
    authenticateExternal:'authenticateExternal',
    authenticateInternal:'authenticateInternal',
    getTokenExternal:'getTokenExternal',
    fetchCustomerDetails:'fetchCustomerDetails',
    defaultDetail: 'defaultDetail',
    profile: 'profile',
    getPaytmProfile:"getUserInfo",
    initiateTransaction: "initiateTransaction",
    eatfit: "eatfit/getCategory",
    updateSpecialPref:"eatfit/updateSpecialPref",

    dietCovidPlans: "v2/dietPlans",
    getOnePlan:"customer/getOnePlan", 
    habitMaster: "habitMaster",
    customerHabit: "customer/habits",
    createHabit: "customer/createHabit",
    updateHabit: "customer/updateHabit",
    deleteHabits: "customer/deleteCustomerHabit",
    getHabitsForUpdate: "customer/habitsForUpdate",
    gerWeightGraph: "customer/weightGraphData",
    optionsData: "options",
    optionsDataNew: "dietPlans/options",
    optionSelection: "addDietPref",
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
    refresh:"api/dietPlan/refresh/options",
    refreshInternational:"api/dietPlan/refresh/option",
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
  
}