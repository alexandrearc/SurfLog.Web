import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from "./auth.service";
import { Login } from "./login";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) { }

    @Input() login : Login;

    ngOnInit() { 
        this.login = new Login('','');
    }

    loginUser () {
        this.authService.login(this.login)
                        .subscribe();
    }
}