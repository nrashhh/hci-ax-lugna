import { Component, OnInit, ViewChild } from "@angular/core";
import { Notification } from "../sdk/models";
import { NotificationApi } from "../sdk/services";

@Component({
    selector: "Notification",
    moduleId: module.id,
    templateUrl: "./notification.component.html"
})
export class NotificationComponent implements OnInit {
  @ViewChild("ptr") pulltorefresh;
  notifications: Notification[];
  constructor(private notificationApi: NotificationApi) {}

  ngOnInit(): void {
    this.refreshNoti();
  }

  refreshNoti(){
    this.pulltorefresh.nativeElement.refreshing = true;
    this.notificationApi.find().subscribe((notifications: Notification[])=>{
      this.notifications = notifications;
      this.pulltorefresh.nativeElement.refreshing = false;
    });
  }
  refreshList() {
    this.refreshNoti();
  }
}
