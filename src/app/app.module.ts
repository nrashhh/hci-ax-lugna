import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { AppRoutingModule, COMPONENTS } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIChartModule
    ],
    declarations: [
        AppComponent,
        ...COMPONENTS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
