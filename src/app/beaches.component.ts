import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Beach } from './beach';
import { BeachService } from './beach.service';

@Component({
  selector: 'my-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css'],
  }
)

export class BeachesComponent implements OnInit {
 
  selectedBeach: Beach;
  beaches: Beach[];

  constructor(
    private router: Router,
    private beachService: BeachService) { 
  }

  ngOnInit(): void {
    this.getBeaches();
  }

  getBeaches(): void {
    this.beachService.getBeaches().then(beaches => this.beaches = beaches);
  }

  onSelect(beach: Beach): void {
    this.selectedBeach = beach;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBeach.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.beachService.create(name)
      .then(beach => {
        this.beaches.push(beach);
        this.selectedBeach = null;
      });
  }

  delete(beach: Beach): void {
    this.beachService
        .delete(beach.id)
        .then(() => {
          this.beaches = this.beaches.filter(h => h !== beach);
          if (this.selectedBeach === beach) { this.selectedBeach = null; }
        });
  }
}

