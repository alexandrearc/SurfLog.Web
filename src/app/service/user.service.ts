import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

@Injectable()
export class UserService {
    private authUrl = 'api/user';
    private userUrl = 'api/auth/register';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    register(user: User): Observable<User> {
        return this.http
            .post(this.userUrl, JSON.stringify(user), {headers: this.headers})
            .map((data: any) => {
                const currentUser = data.json();
                if (currentUser) {
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                }
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
