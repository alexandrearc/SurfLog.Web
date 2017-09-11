import { Component } from '@angular/core';

import { Beach } from './model/beach'
import { BeachService } from './service/beach.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

    beaches: Beach[] = [];

    constructor(private beachService: BeachService){}

    ngOnInit(): void {
        this.beachService.getBeaches()
            .subscribe(beaches => this.beaches = beaches)
    }
 }