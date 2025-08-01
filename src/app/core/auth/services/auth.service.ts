import { Injectable } from '@angular/core';
import { supabase } from '../../../../supabase';
import { AuthTokenResponsePassword } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthTokenResponsePassword> {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return response;
  }
}
