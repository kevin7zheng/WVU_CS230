import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn:'root'})
export class UserInfoService {
    private url: string ='https://novelupdates-ee808-default-rtdb.firebaseio.com/';
    private myInfoEndpoint: string = 'my-info.json';
    constructor(private http:HttpClient) {
    }

    getUserInfo() {
        return this.http.get<UserInfo>(this.url);
    }

    modifyUserInfo(data:UserInfo) {
        return this.http.put(this.url + this.myInfoEndpoint, data);
    }
}