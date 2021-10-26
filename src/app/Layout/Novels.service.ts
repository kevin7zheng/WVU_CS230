import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NovelInfo } from './Novels.model';

@Injectable({providedIn:'root'})
export class NovelsService {
    url: string ="https://novelupdates-ee808-default-rtdb.firebaseio.com/MockNovelList.json";
    constructor(private http:HttpClient) {
    }

    getNovelInfo() {
        console.log(this.url);
        return this.http.get<NovelInfo >(this.url);
    }

    editNovelInfo(){
    var temp: NovelInfo = {
        title: "Estranged",
        release: "c64",
        group:"Jinyu"
    }

    return this.http.put(this.url, temp);
    }
}