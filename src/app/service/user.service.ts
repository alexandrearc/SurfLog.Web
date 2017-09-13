import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

@Injectable()
export class UserService {
    private authUrl = 'api/user';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    register(user: User): Observable<User> {
        return this.http
            .post(this.authUrl, JSON.stringify(user), {headers: this.headers})
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}