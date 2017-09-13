import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './service/user.service';


@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    user: any = {};

    constructor(private router: Router,
                private userService: UserService) { }

    ngOnInit() {}

    register() {
        this.userService.register(this.user)
                        .subscribe(
                            data => {
                                this.router.navigate(['/login']);
                            }
                        );
    }
}
