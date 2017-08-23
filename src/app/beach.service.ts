import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

import { Beach } from './beach';
import { BEACHES } from './mock-beaches';

@Injectable()
export class BeachService {
    
    private beachesUrl = 'api/beaches'
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    getBeaches(): Promise<Beach[]> {
        return Promise.resolve(BEACHES);
    } 
    
    getBeach(id: number): Promise<Beach> {
        const url = `${this.beachesUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(
            function (response) {
                console.log(response);
                return response => response.json() as Beach
            }
        )
        .catch(this.handleError);
    }

    update(beach: Beach): Promise<Beach> {
        const url = `${this.beachesUrl}/${beach.id}`;
        return this.http
        .put(url, JSON.stringify(beach), {headers: this.headers})
        .toPromise()
        .then(() => beach)
        .catch(this.handleError);
    }

    create(name: string): Promise<Beach> {
        return this.http
            .post(this.beachesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Beach)
            .catch(this.handleError);
    }
    
    delete(id: number): Promise<void> {
        const url = `${this.beachesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}