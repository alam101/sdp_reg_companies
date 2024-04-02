import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import moment from "moment";
import { AppService } from "src/app/app.service";
import { CONSTANTS } from "src/app/core/constants/constants";
import { UTILITIES } from "src/app/core/utility/utilities";

@Component({
  selector: "app-view-suggestions",
  templateUrl: "./view-suggestions.page.html",
  styleUrls: ["./view-suggestions.page.scss"],
})
export class ViewSuggestionsPage implements OnInit {
  isDetox: any = false;
  allData: any = {};
  diets: any = [];
  categoryList: any = [];
  currentTimedata: any = {};
  image_URL = "";
  allproducts: any = [];
  selectedCat: any = {};
  catWiseProduct: any = [];
  allRestaurant: any = [];
  allRestProduct: any = [];
  @Input() type: any = "";
  @Input() value: any = "";
  @Input() slot: any = "";
  dataType: any = "";
  mainProductData: any = [];
  loaded = true;
  dataTypeList = [
    { name: "V", isChecked: false, title: "Veg" },
    { name: "NV", isChecked: false, title: "Non Veg" },
    { name: "VE", isChecked: false, title: "Vegan" },
  ];
  search: any;
  platform = false;
  page = 1;
  currentdata: any = [];

  constructor(
    private appServices: AppService,
    private route: ActivatedRoute,
    private utility: UTILITIES,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    // this.route.queryParams.subscribe((res: any) => {
    if (this.type) {
      this.getAllProduct({ type: this.type, value: this.value });
      this.allRestaurant = [];

      if (this.type === "R") {
        this.getAllRestaurant();
      }
    }

    // });
  }

  ngOnInit() {}

  goBack() {
    this.modalCtrl.dismiss();
  }

  searchFood(e: any) {
    if (e) {
      if (this.type === "R") {
        this.allRestaurant = this.mainProductData.filter(
          (f) =>
            f.brand?.toLowerCase().includes(e.toLowerCase()) &&
            f.foodType === (this.dataType!==""?this.dataType:f.foodType)
        );
      } else if (this.type !== "R") {
        this.allRestaurant = this.mainProductData.filter(
          (f) =>
            f.Food?.toLowerCase().includes(e.toLowerCase()) &&
            f.foodType === (this.dataType!==""?this.dataType:f.foodType)
        );
      } else {
        if (this.dataType != "") {
          this.allRestaurant = this.mainProductData.filter(
            (f) => f.foodType === (this.dataType!==""?this.dataType:f.foodType)
          );
        } else {
          this.allRestaurant = this.mainProductData;
        }
      }
    }
  }

  filterDataType(e: any, data: any) {
    console.log(e);
    if (e) {
      this.dataTypeList.forEach((element) => {
        if (element.name !== data.name) {
          element.isChecked = false;
        }
      });
      this.dataType = data.name;
      console.log(this.dataType);
      if (data.name === "V") {
        this.allRestaurant = this.mainProductData.filter(
          (f) =>
            f.foodType?.toLowerCase() === this.dataType?.toLowerCase() ||
            f.foodType?.toLowerCase() === "ve"
        );
      } else {
        this.allRestaurant = this.mainProductData.filter(
          (f) => f.foodType?.toLowerCase() === this.dataType?.toLowerCase()
        );
      }
    } else {
      this.dataType = "";
      this.allRestaurant = this.mainProductData;
    }
    console.log(this.allRestaurant);
  }

  getAllProduct(val: any) {
    this.appServices.getFoodSugesstions(val?.type).then((res: any) => {
      console.log("allproducts", res);
      if (res.code === "0000") {
        this.allproducts =
          val?.type === "H"
            ? res?.data?.homeBased
            : val?.type === "P"
            ? res?.data?.packaged
            : res?.data?.restaurant;
        console.log(val);
        if (val?.type === "P") {
          this.allproducts = this.allproducts.filter(
            (f) => f.name === val.value
          );
          console.log(this.allproducts);
          this.selectedCat = this.allproducts[0]?.subCategory
            ? this.allproducts[0]?.subCategory[0]
            : this.allproducts[0];
          console.log(this.selectedCat);

          this.getAllRstaurantByCategory(
            val?.type,
            this.selectedCat?.category?.split("/").toString(),
            this.page
          );
        }

        if (val?.type === "H") {
          this.selectedCat = this.allproducts.find((f) => f.name === val.value);
          this.getAllRstaurantByCategory(
            val?.type,
            this.selectedCat?.category?.split("/").toString(),
            this.page
          );
        }
        console.log(this.allproducts);
      }
    });
  }

  getAllRestaurant() {
    this.loaded = true;
    this.appServices.getAllRstaurant(false).then(
      (res: any) => {
        this.loaded = false;
        console.log(res);
        if (res.code === "0000") {
          this.allRestaurant = res?.dataList;
          this.mainProductData = res?.dataList;
          this.fiterDefault();
        }
      },
      (err) => {
        this.loaded = false;
      }
    );
  }

  fiterDefault() {
    if (this.dataType != "") {
      this.allRestaurant = this.mainProductData.filter(
        (f) => f.foodType?.toLowerCase() === this.dataType?.toLowerCase()
      );
    }
  }

  getCatWiseProduct(type?: any, value?: any) {
    this.loaded = true;
    this.appServices.getAllRstaurant(false, type, value).then(
      (res: any) => {
        this.loaded = false;
        console.log(res);
        if (res.code === "0000") {
          this.allRestaurant = res?.dataList;
          this.mainProductData = res?.dataList;
        }
      },
      (err) => {
        this.loaded = false;
      }
    );
  }

  selectCat(cat: any) {
    this.search = "";
    this.selectedCat = cat;
    console.log(this.selectedCat);
    this.page = 1;
    this.allRestaurant = [];
    this.mainProductData = [];
    this.dataTypeList.forEach((f) => {
      f.isChecked = false;
    });

    if (this.selectedCat.type === "R") {
      this.getCatWiseProduct("restrCategory", this.selectedCat.category);
    } else {
      this.getAllRstaurantByCategory(
        this.type,
        this.selectedCat?.category?.split("/").toString(),
        this.page
      );
    }
  }

  getAllRstaurantByCategory(type?: any, value?: any, page?: any) {
    if (page === 1) {
      this.allRestaurant = [];
      this.mainProductData = [];
    }

    this.loaded = true;
    this.appServices.getAllRstaurantByCategory(type, value, page).then(
      (res: any) => {
       console.log(type,value,page);
       
        this.loaded = false;

        console.log(res);
        if (res.code === "0000") {
          res?.dataList?.forEach((element) => {
            element.imgType = "H";
          });
          this.currentdata = res?.dataList;
          if(type!="H"){
          this.mainProductData = this.mainProductData.concat(this.currentdata);
          }
          else{
            this.mainProductData =  this.currentdata;
          }
          this.allRestaurant = this.mainProductData;
          // this.mainProductData = res?.dataList;
          console.log(this.allRestaurant);
        }
      },
      (err) => {
        this.loaded = false;
      }
    );
  }

  onIonInfinite(event) {
    console.log("event",event,this.search);
    if(this.search===""){
    this.page = this.page + 1;
    this.getAllRstaurantByCategory(
      this.type,
      this.selectedCat?.category?.split("/").toString(),
      this.page
    );
    console.log(event);
    setTimeout(() => {
      event.target.complete();
    }, 500);
    }
  }
}
