import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    gaugeValue: number = 2;

    areaSource: { Category: string, Amount: number }[] = [
        { Category: "Mar", Amount: 51 },
        { Category: "Apr", Amount: 81 },
        { Category: "May", Amount: 89 },
        { Category: "Jun", Amount: 97 }
    ];

    areaSource2: { Category: string, Amount: number }[] = [
        { Category: "Mar", Amount: 60 },
        { Category: "Apr", Amount: 87 },
        { Category: "May", Amount: 91 },
        { Category: "Jun", Amount: 95 }
    ];
    
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
