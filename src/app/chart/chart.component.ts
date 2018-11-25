import { Component, OnInit } from '@angular/core';
import { Feeling_log } from "../sdk/models";
import { Feeling_logApi } from "../sdk/index";

@Component({
  selector: 'Chart',
  moduleId: module.id,
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  data:Feeling_log[];

  constructor(private feelingApi: Feeling_logApi) {}

  ngOnInit() {
    var months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.feelingApi.getSummary(null, null).subscribe((feelingAvg) => {
      for (let i = 0; i < feelingAvg.length; i++) {
        const fl = feelingAvg[i];
        fl.date = new Date(fl.date);
        feelingAvg[i].date = fl.date.getDate() + "-" + months[fl.date.getMonth()];
      }
      this.data = feelingAvg;
    });
  }
  onTrackBallContentRequested($event){
    
  }
}
