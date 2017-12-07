import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Session } from '../model/session';
import { Beach } from '../model/beach';
import { User } from '../model/user';

@Injectable()
export class SessionService {

    private sessionUrl = 'api/session';
    private headers = new Headers({'Content-Type': 'application/json'});
    private currentUser: User;

    constructor(private http: Http) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.headers.append('Authorization', 'Bearer ' + this.currentUser.token);
    }

    get(id: number): Observable<Session> {
        const options = new RequestOptions({ headers: this.headers });
        const url = `${this.sessionUrl}/${id}`;
        return this.http.get(url, options)
                        .map(response => response.json().result as Session)
                        .catch(this.handleError);
    }

    getByUser(id: string): Observable<Session[]> {

        // add authorization header with jwt token
        const options = new RequestOptions({ headers: this.headers });
        const url = `${this.sessionUrl}/user/${id}`;

        return this.http.get(url, options)
        .map(res => {
            return res.json().result.map(item => {
              return new Session(
                  item.id,
                  item.description,
                  item.date,
                  item.duration,
                  item.rating,
                  item.beachId
              );
            });
          })
          .catch(this.handleError);
    }

    create(session: Session): Observable<Session> {

        // add authorization header with jwt token
        const options = new RequestOptions({ headers: this.headers });

        // add userId
        session.userId = this.currentUser.id;

        return this.http
            .post(this.sessionUrl, JSON.stringify(session), options)
            .map((data: any) => data.json())
            .catch(this.handleError);
    }

    update(session: Session): Observable<Session> {

        // add authorization header with jwt token
        const options = new RequestOptions({ headers: this.headers });
        const updateUrl = `${this.sessionUrl}/${session.id}`;

        return this.http
            .put(updateUrl, JSON.stringify(session), options)
            .map((data: any) => data.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
