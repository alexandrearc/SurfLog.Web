import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SessionService } from '../service/session.service';
import { Session } from '../model/session';

@Component({
  selector: 'app-session-container',
  templateUrl: './session-container.component.html',
  styleUrls: ['./session-container.component.scss']
})
export class SessionContainerComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private sessionService: SessionService) { }

  currentSession: any = {};
  sessionId: Observable<number>;

  ngOnInit() {
    const data = this.route.snapshot.data['session'];

    if ( data !== undefined ) {
      this.currentSession = data;
      this.currentSession.date = this.parseStringToDate(data.date.toString());
    } else {
      this.currentSession = {};
    }

  }

  private parseStringToDate(date: string): Date {
    const str: string[] = date.split('-');
    return new Date(+str[0], +str[1], +str[2].slice(0, 2));
}


}
