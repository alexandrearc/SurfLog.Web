import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Beach } from '../model/beach';

@Injectable()
export class BeachService {

    private beachesUrl = 'api/beaches';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getBeaches(): Observable<Beach[]> {
        const url = `${this.beachesUrl}`;
        return this.http.get(url)
        .map(res => {
            return res.json().map(item => {
              return new Beach(
                  item.id,
                  item.name
              );
            });
          });
    }

    getBeach(id: number): Observable<Beach> {
        const url = `${this.beachesUrl}/${id}`;
        return this.http.get(url)
                        .map((data: any) => data.json())
                        .map(({id, name}) => new Beach(id, name))
                        .catch((error: any) => Observable.throw('Server error'));
    }

    update(beach: Beach): Observable<Beach> {
        const url = `${this.beachesUrl}/${beach.id}`;
        return this.http
            .put(url, JSON.stringify(beach), {headers: this.headers})
            .catch(this.handleError);
    }

    create(name: string): Observable<Beach> {
        return this.http
            .post(this.beachesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .map((data: any) => data.json())
            .map(({id, name}) => new Beach(id, name))
            .catch(this.handleError);
    }

    delete(id: number): Observable<void> {
        const url = `${this.beachesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .catch(this.handleError);
    }

    search(term: string): Observable<Beach[]> {
        const url = `${this.beachesUrl}/name/${term}`;
        return this.http
                .get(url)
                .map(res => <Beach[]> res.json())
                ._catch(this.handleError);
      }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
