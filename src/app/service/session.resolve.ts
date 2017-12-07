import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from './session.service';
import { Session } from '../model/session';

@Injectable()
export class SessionResolve implements Resolve<Session> {

  constructor(private SessionService: SessionService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this.SessionService.get(+route.paramMap.get('id'));
  }

}

