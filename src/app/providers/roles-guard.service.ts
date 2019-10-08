import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from "@angular/router";

import { Observable } from "rxjs/Rx";

@Injectable()
export class RolesGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let roles = route && route.data["roles"] && route.data["roles"].length > 0 ? route.data["roles"] : null;
    let userpermission = localStorage.getItem('adminroles') ? JSON.parse(localStorage.getItem('adminroles')) : null
    
    if (userpermission.includes(roles[0])) {
      return true;
    }
    return false;
  }


}



