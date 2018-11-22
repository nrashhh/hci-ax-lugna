import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { AccessToken, WebUser } from "./sdk/models";
import { LoopBackConfig, WebUserApi } from "./sdk/index";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    loggingIn: boolean = true;
    account: WebUser = new WebUser();
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;
    constructor(private page: Page, private router: Router, private webUserApi: WebUserApi) {
      if (webUserApi.isAuthenticated()) {
        this.loggingIn = false;
      }
      LoopBackConfig.setBaseURL("https://hci.izusoft.com");
      LoopBackConfig.setApiVersion("api");
      this.account.email = "bob@test.com";
      this.account.password = "123456";
    }
    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
    focusPassword() {
      this.password.nativeElement.focus();
    }
    submit() {
      console.log("Logging in");
      this.webUserApi.login(this.account).subscribe((token: AccessToken) => {
        this.loggingIn = false;
      });
    }
}
