import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from "./service/auth.service";
import { Login } from "./model/login";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    login: any = {}
    returnUrl: string;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router ) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }

    loginUser () {
        this.authService.login(this.login)
                        .subscribe(
                            data => {
                                this.router.navigate([this.returnUrl]);
                            }
                        );
    }
}