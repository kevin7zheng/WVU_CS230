import { Component, Injectable, OnInit } from '@angular/core';
import { DatabaseService } from '../body/database.service';
import { UserInfo } from './user-info.model';
import { UserInfoService } from './user-info.service';


@Component ({  selector: 'user-info',
templateUrl: 'user-info.component.html',
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
    constructor (private infoService: UserInfoService, private dbService:DatabaseService) {
        dbService.showData();
    }
    ngOnInit(): void {
        console.log("Registering ShowUserInfo as a subscriber");
        this.showUserInfo();
    }

    showUserInfo() {
        this.infoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}