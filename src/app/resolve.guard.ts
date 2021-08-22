import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ResolveGuard implements Resolve<any> {

  userObj={
    uname: 12
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
return this.userObj;    

  }
   
}
