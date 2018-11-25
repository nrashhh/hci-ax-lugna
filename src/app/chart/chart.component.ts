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
    this.feelingApi.find().subscribe((feelings: Feeling_log[]) => {
      this.data = feelings;
    });
  }
  onTrackBallContentRequested($event){
    
  }
}
