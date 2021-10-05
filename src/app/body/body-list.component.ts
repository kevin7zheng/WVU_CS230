import { Component, Input } from '@angular/core';


@Component ({  selector: 'app-body-list',
templateUrl: 'body-list.component.html',
styleUrls: ['./body-list.component.css']
})
export class BodyListComponent {
@Input()
title! :string;
@Input()
release! :string;
@Input()
group! :string;
}