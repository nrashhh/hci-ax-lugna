import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { AccessToken, WebUser } from "../sdk/models";
import { LoopBackConfig, WebUserApi } from "../sdk/index";
@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent  {
  account: WebUser = new WebUser();
  isLoggingIn = true;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;
  constructor(private page: Page, private router: Router, private webUserApi: WebUserApi) {
    LoopBackConfig.setBaseURL("http://hci.izusoft.com");
    LoopBackConfig.setApiVersion("api");
    this.account.email = "bob@test.com";
    this.account.password = "123456";
  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  focusPassword() {
    this.password.nativeElement.focus();
  }
  submit() {
    console.log("Logging in");
    console.log(this.account);
    this.webUserApi.login(this.account).subscribe((token: AccessToken) => this.router.navigate(["/"]));
  }
}
