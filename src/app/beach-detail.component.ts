import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Beach } from './beach';
import { BeachService } from './beach.service'

@Component({
  selector: 'beach-detail',
  templateUrl: 'beach-detail.component.html',
  styleUrls: ['beach-detail.component.css']
})

export class BeachDetailComponent implements OnInit {

  constructor(
      private beachService: BeachService,
      private route: ActivatedRoute,
      private location: Location
  ){}

  ngOnInit(): void {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.beachService.getBeach(+params.get('id')))
        .subscribe(data => this.beach = data);
  }
    
  @Input() beach: Beach;

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.beachService.update(this.beach)
                     .subscribe(() => this.goBack());
  }
}