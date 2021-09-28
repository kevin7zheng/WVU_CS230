import { Component, Input } from '@angular/core';


@Component ({  selector: 'app-main-body',
templateUrl: 'main-body.component.html',
styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
@Input()
title!:string;
@Input()
release!:string;
@Input()
group!:string;
}