import { Component, Input , OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { BeachService } from './service/beach.service';
import { Beach } from './model/beach';

@Component({
  selector: 'beach-search',
  templateUrl: './beach-search.component.html',
  styleUrls: [ './beach-search.component.css' ]
})
export class BeachSearchComponent implements OnInit {

  beaches: Observable<Beach[]>;

  @Output() selectBeachEvent = new EventEmitter<number>();

  constructor(
    private beachService: BeachService,
    private router: Router) {
    }

  filterBeaches(val: string) {
    return val ? this.beachService.search(val) : this.beaches;
  }

  ngOnInit(): void {
  }

  select(beach: Beach): void {
    this.selectBeachEvent.emit(beach.id);
  }
}
