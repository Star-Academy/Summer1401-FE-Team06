import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthComponent} from '../pages/auth/auth.component';
import {ProfileComponent} from '../pages/profile/profile.component';

describe('AuthGuard', () => {
    let guard: AuthGuard;

    let dummyRoute = {} as ActivatedRouteSnapshot;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([
                    {path: 'auth', component: AuthComponent},
                    {path: 'profile', component: ProfileComponent},
                ]),
            ],
        });
        guard = TestBed.inject(AuthGuard);
    });

    it('tests create', () => {
        expect(guard).toBeTruthy();
    });

    describe('when loggedIn=true', () => {
        beforeEach(() => setupIsLoggedInSpy(true));

        for (const path of ['/auth', '/profile']) {
            it(`tests ${path === '/profile' ? 'accept' : 'reject'} if navigating to ${path}`, async () => {
                expect(await guard.canActivate(dummyRoute, fakeRouterState(path))).toBe(path == '/profile');
            });
        }
    });

    describe('when loggedIn=false', () => {
        beforeEach(() => setupIsLoggedInSpy(true));

        for (const path of ['/auth', '/profile']) {
            it(`tests ${path == '/auth' ? 'accept' : 'reject'} if navigating to ${path}`, async () => {
                expect(await guard.canActivate(dummyRoute, fakeRouterState(path))).toBe(path == '/profile');
            });
        }
    });

    const setupIsLoggedInSpy = (isLoggedIn: boolean): void => {
        spyOn(guard.authService, 'isLoggedIn').and.returnValue(new Promise((resolve) => resolve(isLoggedIn)));
    };

    const fakeRouterState = (url: string): RouterStateSnapshot => {
        return {url} as RouterStateSnapshot;
    };
});
