import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  private isUserLogged: string | null;

  constructor(private route: Router) {
    this.isUserLogged = sessionStorage.getItem('logged');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.isUserLogged != 'true') {
      this.route.navigate(['login']);

      return false;
    }

    return true;
  }
}