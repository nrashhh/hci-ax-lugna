import { Component, OnInit } from '@angular/core';
import { topmost } from 'ui/frame';
import { isIOS, isAndroid } from 'platform';
import * as frame from "ui/frame";
import * as utils from "utils/utils";

// function doneTap(args) {
//     var myTextField = args.object;
//     myTextField.dismissSoftInput();
// }
// exports.doneTap = doneTap

// function dismissSoftKeyboard() {
// 	if (isIOS) {
// 		frame.topmost().nativeView.endEditing(true);
// 	}
// 	if (isAndroid) {
// 		utils.ad.dismissSoftInput();
// 	}
// }

// exports.dismissSoftKeyboard = dismissSoftKeyboard;


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