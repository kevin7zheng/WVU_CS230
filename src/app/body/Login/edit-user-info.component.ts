
import { Component, OnInit } from "@angular/core";
import { UserInfo } from "../../header/user-info.model";
import { UserInfoService } from "../../header/user-info.service";

@Component({
    selector: 'app-edit-user-info',
    templateUrl: './edit-user-info.component.html'
})
export class EditUserInfoComponent implements OnInit {

    constructor(private infoService: UserInfoService) { }
  
    ngOnInit(): void {
    }

    onUpdateUserInfo(data:UserInfo) {
        console.log("Pressed button");
        console.log(data);
        this.infoService.modifyUserInfo(data);
    }
  
  }