import { Component } from '@angular/core';

import { Beach } from './model/beach';
import { User } from './model/user';
import { AuthService } from './service/auth.service';
import { SessionService } from './service/session.service';
import { Session } from './model/session';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    sessions: Session[] = [];
    currentUser: User;

    constructor(private authService: AuthService,
                private sessionService: SessionService) {
                    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.sessionService.getByUser(this.currentUser.id)
            .subscribe(sessions => this.sessions = sessions);

         // reset login status
         // this.authService.logout();
    }
 }
