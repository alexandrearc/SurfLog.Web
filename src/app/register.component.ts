import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './service/user.service';


@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    user: any = {};
    returnUrl: string;

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }

    ngOnInit() {}

    register() {
        this.userService.register(this.user)
                        .subscribe(
                            data => {
                                this.router.navigate([this.returnUrl]);
                            }
                        );
    }
}
