import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NotificationComponent } from "./notification/notification.component";
import { ChartComponent } from "./chart/chart.component";
import { HomeComponent } from "./home/home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";

export const COMPONENTS = [NotificationComponent, ChartComponent, HomeComponent, ItemDetailComponent, ProfileComponent, SettingsComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(notificationTab:notification//homeTab:home//chartTab:chart//profileTab:profile//settingsTab:settings)", pathMatch: "full" },

    { path: "notification", component: NotificationComponent, outlet: "notificationTab" },
    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "chart", component: ChartComponent, outlet: "chartTab" },
    { path: "profile", component: ProfileComponent, outlet: "profileTab" },
    { path: "settings", component: SettingsComponent, outlet: "settingsTab" },
    { path: "item/:id", component: ItemDetailComponent, outlet: "settingsTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
