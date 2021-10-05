import { Component } from '@angular/core';
import { mock_novellists } from './mock-novellist';
import { Novellist } from './novel-list.model';

@Component ({  selector: 'app-Layout',
templateUrl: 'Layout.component.html',
styleUrls: ['./Layout.component.css']
})
export class LayoutComponent {
    novellists:Novellist[] = [];

    constructor() {
        for (var novellist of mock_novellists) {
            this.novellists.push(new Novellist(novellist));
        }
    }
}