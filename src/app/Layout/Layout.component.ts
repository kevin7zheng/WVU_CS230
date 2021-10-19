import { Component } from '@angular/core';
import { LayoutService } from './Layout.service';
import { mock_novellists } from './mock-novellist';
import { Novellist } from './novel-list.model';

var data = {
    novellist1: {
        title: "Estranged",
        release: "c64",
        group:"Jinyu"
    },
    novellist2: {
        title: "Everlasting",
        release: "c1345",
        group:"Wuxiaworld"
    },
    novellist3: {
        title: "Mayo Chiki!",
        release: "v9c5",
        group:"CClaw translation"
    },
    novellist4: {
        title: "Red Packet Server",
        release: "c1509",
        group:"volarenovels"
    }
}

@Component ({  selector: 'app-Layout',
templateUrl: 'Layout.component.html',
styleUrls: ['./Layout.component.css']
})
export class LayoutComponent {
    novellists:Novellist[] = [];

    constructor(private layoutService: LayoutService) {
        console.log(data);
        for(var item in data) {
            console.log(item);
        }
        for (var novellist of mock_novellists) {
            this.novellists.push(new Novellist(novellist));
        }
        this.layoutService.getLayoutService().subscribe((data: Novellist [])=> {
            console.log(data);
            for (var item in data) {
                console.log(data[item]);
            }
        })
    }
}