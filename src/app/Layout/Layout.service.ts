import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Novellist } from './novel-list.model';

@Injectable({providedIn:'root'})
export class LayoutService {
    url: string ="https://novelupdates-ee808-default-rtdb.firebaseio.com/MockNovelList.json";
    constructor(private http:HttpClient) {
    }

    getLayoutService() {
        return this.http.get<Novellist>(this.url);
    }
}