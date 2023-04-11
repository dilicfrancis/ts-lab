import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { first, map, Observable, tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanLoad {
  constructor(
    private authStatus: AuthenticationService,
    private router: Router
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authStatus.authenticated$.pipe(
      first((state) => typeof state === 'boolean'),
      map((state) => !!state),
      tap((state) => {
        if (!state) this.router.navigateByUrl('/');
      })
    );
  }
}
