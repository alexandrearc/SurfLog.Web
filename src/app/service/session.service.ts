import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Session } from '../model/session';
import { Beach } from '../model/beach';

@Injectable()
export class SessionService {

    private sessionUrl = 'api/session';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getByUser(id: number): Observable<Session[]> {
        const url = `${this.sessionUrl}user/${id}`;
        return this.http.get(url)
        .map(res => {
            return res.json().map(item => {
              return new Session(
                  item.id,
                  item.description,
                  item.date,
                  item.duration,
                  item.number,
                  item.beachId
              );
            });
          });
    }

    create(session: Session): Observable<Session> {
        return this.http
            .post(this.sessionUrl, JSON.stringify(session), {headers: this.headers})
            .map((data: any) => data.json());
    }
}
