import { Component } from '@angular/core';

import { Beach } from './model/beach'
import { BeachService } from './service/beach.service';
import { User } from './model/user';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    beaches: Beach[] = [];
    currentUser: User;

    constructor(private beachService: BeachService,
                private authService: AuthService ){
                    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                }

    ngOnInit(): void {
        this.beachService.getBeaches()
            .subscribe(beaches => this.beaches = beaches)

         // reset login status
         this.authService.logout();
    }
 }