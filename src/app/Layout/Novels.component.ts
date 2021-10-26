import { Component, OnInit } from '@angular/core';
import { NovelInfo } from './Novels.model';
import { NovelsService } from './Novels.service';



@Component ({  selector: 'app-Novels',
templateUrl: 'Novels.component.html'
})
export class NovelsComponent implements OnInit{
    novellists:NovelInfo | undefined;
    constructor(private novelService: NovelsService) {
        }
        ngOnInit(): void {
            console.log('Showing data');
            this.showNovelInfo();
            this.novelService.editNovelInfo().subscribe(data => {
                console.log(data);
            })
        }
        showNovelInfo() { 
        this.novelService.getNovelInfo().subscribe(data => {
            console.log(data)
            this.novellists = data;
        })
        }
}

