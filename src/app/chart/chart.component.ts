import { Component, OnInit } from '@angular/core';
import { Feeling_log } from "../sdk/models";
import { Feeling_logApi } from "../sdk/index";
import { TrackballCustomContentData } from 'nativescript-ui-chart';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'Chart',
  moduleId: module.id,
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  isLoading = true;
  avg_data;
  feeling_data: Feeling_log[];
  constructor(private feelingApi: Feeling_logApi, private globalService: GlobalService) {
    globalService.chartRefreshFunc = () => {
      this.refreshChart();
    };
  }

  ngOnInit() {
    this.loadData();
  }
  loadData(cb = undefined){
    var months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.feelingApi.getSummary(null, null).subscribe((feelingAvg) => {
      for (let i = 0; i < feelingAvg.length; i++) {
        const fl = feelingAvg[i];
        fl.date = new Date(fl.date);
        feelingAvg[i].date = fl.date.getDate() + "-" + months[fl.date.getMonth()];
      }
      this.avg_data = feelingAvg;
      this.isLoading = false;
      if(cb != undefined){
        cb();
      }
    });
    this.feelingApi.find({
      order: 'createdAt DESC'
    }).subscribe((feelings: Feeling_log[]) => {
      this.feeling_data = feelings;
    });
  }
  onTrackBallContentRequested(args: TrackballCustomContentData){
    let feelingAvg = args.pointData;
      switch (args.seriesIndex) {
          case 0: args.content = "Mood: " + feelingAvg.avgMood.toFixed(2); break;
          case 1: args.content = "Sleep: " + feelingAvg.avgSleep.toFixed(2); break;
          case 2: args.content = "Coffee: " + feelingAvg.avgCoffee.toFixed(2); break;
          case 3: args.content = "Sugar: " + feelingAvg.avgSuger.toFixed(2); break;
          case 4: args.content = "Activity: " + feelingAvg.avgActivity.toFixed(2); break;
      }
  }
  setMoodClass(mood: number){
    return "button-mood button-mood" + mood;
  }

  refreshChart(){
    this.isLoading = true;
    this.loadData();
  }
}
