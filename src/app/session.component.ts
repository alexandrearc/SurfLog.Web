import { Component, OnInit } from '@angular/core';
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
    session: any = {};
    currentUser: User;
    showCondition: boolean;
    conditionLabel: string;
    isNew: boolean;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private sessionService: SessionService) { }

    ngOnInit() {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.sessionService.get(+params.get('id')))
        .subscribe(data => {
             this.session = data;
             this.session.date = this.parseStringToDate(data.date.toString());

             if (this.session.id === undefined) {
                this.isNew = true;
            }else {
                if (this.session.Condition !== null && this.session.Condition !== undefined) {
                    this.showCondition = true;
                    this.conditionLabel = '- Condition';
                } else {
                    this.session.condition = new Condition();
                }
            }
        });

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.session.userId = this.currentUser.id;
        this.conditionLabel = '+ Condition';
     }

     private parseStringToDate(date: string): Date {
        const str: string[] = date.split('-');
        return new Date(+str[0], +str[1], +str[2].slice(0, 2));
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
