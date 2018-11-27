import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService, IDataItem } from '../core/data.service';
import { Feeling_log, WebUser } from '../sdk/models';
import { Feeling_logApi } from '../sdk/index';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { SnackBar } from 'nativescript-snackbar';
import { WebUserApi } from '../sdk/services';
import { TNSPlayer } from 'nativescript-audio';
import { AppComponent } from '../app.component';
import { Vibrate } from 'nativescript-vibrate';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vibrator = new Vibrate();
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
  sounds: TNSPlayer[];
  categoricalSource: {
    Country: string;
    Amount: number;
    SecondVal: number;
    ThirdVal: number;
  }[] = [
    { Country: 'Preeti', Amount: 29, SecondVal: 112, ThirdVal: 29 },
    { Country: 'Ah Boon', Amount: 24, SecondVal: 17, ThirdVal: 23 },
    { Country: 'Jake', Amount: 15, SecondVal: 14, ThirdVal: 24 },
    { Country: 'Ahmad', Amount: 13, SecondVal: 23, ThirdVal: 25 }
  ];

  constructor(private feelingApi: Feeling_logApi, private webUser: WebUserApi, private routerExtension: RouterExtensions, private appcomponent: AppComponent, private globalService: GlobalService) {
    webUser.getCurrent().subscribe((user: WebUser) => {
      this.username = user.username;
    });
    this.sounds = new Array<TNSPlayer>(5);
    this.sounds[0] = new TNSPlayer();
    this.sounds[0].initFromFile({
      audioFile: '~/app/audio/beep_mood1.mp3',
      loop: false
    });
    this.sounds[1] = new TNSPlayer();
    this.sounds[1].initFromFile({
      audioFile: '~/app/audio/beep_mood2.mp3',
      loop: false
    });
    this.sounds[2] = new TNSPlayer();
    this.sounds[2].initFromFile({
      audioFile: '~/app/audio/beep_mood3.mp3',
      loop: false
    });
    this.sounds[3] = new TNSPlayer();
    this.sounds[3].initFromFile({
      audioFile: '~/app/audio/beep_mood4.mp3',
      loop: false
    });
    this.sounds[4] = new TNSPlayer();
    this.sounds[4].initFromFile({
      audioFile: '~/app/audio/beep_mood5.mp3',
      loop: false
    });
  }
  ngOnInit(): void {
    
  } 
  onDragged(e){
    this.vibrator.vibrate(e * 100);
  }
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
    this.sounds[mood-1].play();
    this.vibrator.vibrate((6 - mood) * 100);
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
      this.mood = undefined;
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
      this.appcomponent.currentIndex = 1;
      this.globalService.chartRefreshFunc();
    });
  }
}
