import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Login } from '../model/login';
import { User } from '../model/user';

@Injectable()
export class AuthService {

    private authUrl = 'api/auth';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http: Http) {}

    login(login: Login): Observable<User> {
        return this.http
            .post(this.authUrl + '/login', JSON.stringify(login), {headers: this.headers})
            .map((data: any) => {
                const user = data.json().result;
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            })
            .catch(this.handleError);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
