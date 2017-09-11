import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from "rxjs";

import { Login } from "./login";

@Injectable()
export class AuthService {

    private authUrl = 'api/auth'
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http: Http){};

    login(login: Login): Observable<Login> {
        return this.http
            .post(this.authUrl, JSON.stringify(login), {headers: this.headers})
            //.map((data: any) => data.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}