import { Component, OnInit } from '@angular/core';
import { topmost } from 'ui/frame';
import { isIOS } from 'platform';

@Component({
	moduleId: module.id,
	selector: 'profile',
	templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
	constructor() {
		if (isIOS) {
			topmost().ios.controller.navigationBar.barStyle = 0;
		}
	}

	ngOnInit() { }
}