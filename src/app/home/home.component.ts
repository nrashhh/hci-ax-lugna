import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService, IDataItem } from '../core/data.service';
import { Feeling_log, WebUser } from '../sdk/models';
import { Feeling_logApi } from '../sdk/index';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { SnackBar } from 'nativescript-snackbar';
import { WebUserApi } from '../sdk/services';
import { Page } from 'tns-core-modules/ui/page';
@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("tv") textView;
  button1_dark: boolean = false;
  button2_dark: boolean = false;
  button3_dark: boolean = false;
  button4_dark: boolean = false;
  button5_dark: boolean = false;
  username: string = '';
  snackbar = new SnackBar();
  description: string = '';
  location: string = 'SIT@RP';
  mood: number;
  sleepVal: number = 0;
  sugerVal: number = 0;
  coffeeVal: number = 0;
  activityVal: number = 0;
  showMore: boolean = false;
  categoricalSource: {
    Country: string;
    Amount: number;
    SecondVal: number;
    ThirdVal: number;
  }[] = [
    { Country: 'Jake', Amount: 15, SecondVal: 14, ThirdVal: 24 },
    { Country: 'Ahmad', Amount: 13, SecondVal: 23, ThirdVal: 25 },
    { Country: 'Ah Boon', Amount: 24, SecondVal: 17, ThirdVal: 23 },
    { Country: 'Preeti', Amount: 29, SecondVal: 112, ThirdVal: 29 }
  ];

  constructor(private feelingApi: Feeling_logApi, private webUser: WebUserApi, private page: Page) {
    webUser.getCurrent().subscribe((user: WebUser) => {
      this.username = user.username;
    });
  }

  ngOnInit(): void {} 
  
  onTVTap(event){
    event.object.editable = true;
  }

  onMoodClick(mood: number): void {
    this.mood = mood;
    this.button1_dark = true;
    this.button2_dark = true;
    this.button3_dark = true;
    this.button4_dark = true;
    this.button5_dark = true;
    this["button" + mood + "_dark"] = false;
  }

  openShowMore() {
    this.showMore = true;
  }

  submit(e): void {
    if (this.mood === undefined) {
      dialogs.alert({
        title: 'Unable to submit',
        message: 'You have not selected a mood to submit.',
        okButtonText: 'Ok'
      });
      return;
    }
    var feeling = new Feeling_log();
    feeling.coffee = this.coffeeVal;
    feeling.description = this.description;
    feeling.location = this.location;
    feeling.mood = this.mood;
    feeling.sleep = this.sleepVal;
    feeling.suger = this.sugerVal;
    feeling.activity = this.activityVal;
    console.log('Create', feeling);
    this.feelingApi.create(feeling).subscribe((fl: Feeling_log) => {
      this.snackbar.simple('Mood log saved.');
      this.coffeeVal = 0;
      this.mood = 0;
      this.sleepVal = 0;
      this.sugerVal = 0;
      this.activityVal = 0;
      this.button1_dark = false;
      this.button2_dark = false;
      this.button3_dark = false;
      this.button4_dark = false;
      this.button5_dark = false;
      this.showMore = false;
      this.description = "";
      this.textView.nativeElement.editable = false;
      this.textView.nativeElement.dismissSoftInput();
      this.textView.nativeElement.android.clearFocus();
    });
  }
}
