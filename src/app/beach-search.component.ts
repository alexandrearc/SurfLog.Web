import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { BeachSearchService } from './service/beach-search.service';
import { Beach } from './model/beach';

@Component({
  selector: 'beach-search',
  templateUrl: './beach-search.component.html',
  styleUrls: [ './beach-search.component.css' ],
  providers: [BeachSearchService]
})
export class BeachSearchComponent implements OnInit {
  beaches: Observable<Beach[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private BeachSearchService: BeachSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.beaches = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.BeachSearchService.search(term)
        // or the observable of empty beaches if there was no search term
        : Observable.of<Beach[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Beach[]>([]);
      });
  }

  gotoDetail(beach: Beach): void {
    let link = ['/detail', beach.id];
    this.router.navigate(link);
  }
}