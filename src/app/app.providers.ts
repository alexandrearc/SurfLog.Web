import { BeachService } from './service/beach.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { SessionService } from './service/session.service';
import { SessionResolve } from './service/session.resolve';
import { UserService } from './service/user.service';

export const APP_PROVIDERS = [
    BeachService,
    AuthService,
    AuthGuard,
    SessionService,
    SessionResolve,
    UserService,
];
