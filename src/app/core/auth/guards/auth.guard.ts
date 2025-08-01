import { CanActivate, GuardResult, Router } from '@angular/router';
import { supabase } from '../../../../supabase';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  async canActivate(): Promise<GuardResult> {
    const { data } = await supabase.auth.getSession();

    const session = data?.session ?? null;

    const isExpired = !session || session.expires_at! * 1000 <= Date.now();

    if (isExpired) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
