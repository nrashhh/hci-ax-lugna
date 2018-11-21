import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, IDataItem } from "../core/data.service";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private itemService: DataService, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
