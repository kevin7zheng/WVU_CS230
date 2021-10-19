import { Component, Input } from '@angular/core';


@Component ({  selector: 'app-body-list2',
templateUrl: 'body-list2.component.html',
styleUrls: ['./body-list2.component.css']
})
export class BodyList2Component {
@Input()
title2! :string;
@Input()
release2! :string;
@Input()
group2! :string;
}