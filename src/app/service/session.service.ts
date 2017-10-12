import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Session } from '../model/session';
import { Beach } from '../model/beach';

@Injectable()
export class SessionService {

    private sessionUrl = 'api/session';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.headers.append('Authorization', 'Bearer ' + currentUser.token);
    }

    getByUser(id: number): Observable<Session[]> {

        // add authorization header with jwt token
        const options = new RequestOptions({ headers: this.headers });
        const url = `${this.sessionUrl}user/${id}`;

        return this.http.get(url, options)
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
          })
          .catch(this.handleError);
    }

    create(session: Session): Observable<Session> {

        // add authorization header with jwt token
        const options = new RequestOptions({ headers: this.headers });

        return this.http
            .post(this.sessionUrl, JSON.stringify(session), options)
            .map((data: any) => data.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
