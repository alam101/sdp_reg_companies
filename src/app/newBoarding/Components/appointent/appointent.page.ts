import { Component, Input, OnInit } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-appointent",
  templateUrl: "./appointent.page.html",
  styleUrls: ["./appointent.page.scss"],
})
export class AppointentPage implements OnInit {
  @Input() plan: boolean = false;
  constructor(private iab: InAppBrowser) {}

  ngOnInit() {}

  gotoApply() {
    this.iab.create("https://calendly.com/dietitian_mansvi");
  }
}
