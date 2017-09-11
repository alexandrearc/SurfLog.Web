import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Beach }           from '../model//beach';

@Injectable()
export class BeachSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Beach[]> {
    return this.http
               .get(`api/beaches/?name=${term}`)
               .map(response => response.json().data as Beach[]);
  }
}