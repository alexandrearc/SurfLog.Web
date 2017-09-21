import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from './service/session.service';
import { User } from './model/user';

@Component({
    selector: 'session',
    templateUrl: 'session.component.html'
})

export class SessionComponent implements OnInit {
    session: any = {};
    currentUser: User;

    constructor(private router: Router,
                private sessionService: SessionService) { }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.session.userId = this.currentUser.id;
     }

    create() {
        this.sessionService.create(this.session)
                           .subscribe(
                                data => {
                                    this.router.navigate(['/dashboard']);
                                }
                           );
    }
}
