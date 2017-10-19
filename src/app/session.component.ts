import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from './service/session.service';
import { User } from './model/user';
import { Condition } from './model/condition';
import { Beach } from './model/beach';

@Component({
    selector: 'session',
    templateUrl: 'session.component.html'
})

export class SessionComponent implements OnInit {
    session: any = {};
    currentUser: User;
    showCondition: boolean;
    conditionLabel: string;

    constructor(private router: Router,
                private sessionService: SessionService) { }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.session.userId = this.currentUser.id;
        this.session.condition = new Condition();
        this.conditionLabel = '+ Condition';
     }

    create() {
        this.session.beach = new Beach(this.session.beachId, '');
        this.sessionService.create(this.session)
                           .subscribe(
                                data => {
                                    this.router.navigate(['/dashboard']);
                                }
                           );
    }

    addCondition() {
        if (this.showCondition) {
            this.conditionLabel = '+ Condition';
            this.showCondition = false;
        }else {
            this.showCondition = true;
            this.conditionLabel = '- Condition';
        }
    }

    receiveSelectedBeach($event) {
        this.session.beachId  = $event;
    }
}
