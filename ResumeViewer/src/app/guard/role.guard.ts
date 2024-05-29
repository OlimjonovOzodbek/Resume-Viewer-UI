import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

var tokenKey = 'token';

export const guestGuard: CanActivateFn = (route, state) => {
  return true;
}

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (localStorage.getItem(tokenKey)?.length! > 0) {
    const decodedToken: any = jwtDecode(localStorage.getItem(tokenKey)!)
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    if (role == 'User') {
      return true;
    }
    router.navigate(['home'])
    return false;
  }
  router.navigate(['login'])
  return false;
};

export const adminGuard: CanActivateFn = (route, state) => {
  debugger;
  
  const router = inject(Router)
  if (localStorage.getItem(tokenKey)?.length! > 0) {
    const decodedToken: any = jwtDecode(localStorage.getItem(tokenKey)!)
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    if (role == 'Admin') {
      return true;
    }
    router.navigate(['home'])
    return false;
  }
  router.navigate(['login'])
  return false;
};

export const superAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (localStorage.getItem(tokenKey)?.length! > 0) {
    const decodedToken: any = jwtDecode(localStorage.getItem(tokenKey)!)
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    if (role == 'SuperAdmin') {
      return true;
    }
    router.navigate(['home'])
    return false;
  }
  router.navigate(['login'])
  return false;
};

export const multiRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  debugger;
  if (localStorage.getItem(tokenKey)?.length! > 0) {
    const decodedToken: any = jwtDecode(localStorage.getItem(tokenKey)!);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    if (role == 'SuperAdmin' || role == 'Admin') {
      return true;
    }
    router.navigate(['home'])
    return false;
  }
  router.navigate(['login']);
  return false;
};
