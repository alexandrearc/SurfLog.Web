import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { SessionService } from './service/session.service';
import { User } from './model/user';
import { Condition } from './model/condition';
import { Beach } from './model/beach';
import { Session } from './model/session';

@Component({
    selector: 'session',
    templateUrl: 'session.component.html'
})

export class SessionComponent implements OnInit {
    @Input() session: Session;

    // session: any = {};
    currentBeach: Beach;
    currentUser: User;
    showCondition: boolean;
    conditionLabel: string;
    isNew = false;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private sessionService: SessionService) { }

    ngOnInit() {
        if (this.session.id === undefined) {
            this.isNew = true;
        } else {
            this.currentBeach = this.session.beach;

            if (this.session.condition !== null && this.session.condition !== undefined) {
                this.showCondition = true;
                this.conditionLabel = '- Condition';
            } else {
                this.session.condition = new Condition();
                this.conditionLabel = '+ Condition';
                this.showCondition = false;
            }
        }
    }

    submit() {
        if (this.isNew) {
            this.create();
        } else {
            this.update();
        }
    }

    create() {
        this.session.beach = new Beach(this.session.beachId, '');
        this.session.beachId = this.session.beachId;
        this.sessionService.create(this.session)
                           .subscribe(
                                data => {
                                    this.router.navigate(['/dashboard']);
                                }
                           );
    }

    update() {
        this.sessionService.update(this.session)
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
