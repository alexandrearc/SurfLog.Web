import { Component, OnInit } from '@angular/core';

import { User } from './model/user';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private authService: AuthService) {
    }

    ngOnInit() {
     }
}
