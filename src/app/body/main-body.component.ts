import { Component } from '@angular/core';

@Component ({  selector: 'app-main-body',
templateUrl: 'main-body.component.html',
styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
    novel:string = "put novel title here"
    group:string = "put group name here"
}