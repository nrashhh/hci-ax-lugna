import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, IDataItem } from "../core/data.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    categoricalSource: { Country: string, Amount: number, SecondVal: number, ThirdVal: number }[] = [
        { Country: "Jake", Amount: 15, SecondVal: 14, ThirdVal: 24 },
        { Country: "Ahmad", Amount: 13, SecondVal: 23, ThirdVal: 25 },
        { Country: "Ah Boon", Amount: 24, SecondVal: 17, ThirdVal: 23 },
        { Country: "Preeti", Amount: 29, SecondVal: 112, ThirdVal: 29 }
    ];

    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
