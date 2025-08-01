import { Injectable } from '@angular/core';
import { supabase } from '../../../supabase';
import { IUser } from '../../types/IUser';
import { Observable, from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  loadProfileInfo(): Observable<IUser | null> {
    return from(supabase.auth.getSession()).pipe(
      switchMap(({ data: { session }, error }) => {
        if (error || !session) return of(null);

        return from(
          supabase
            .from('profiles')
            .select('id, username, email, bio, avatar_url, created_at')
            .eq('id', session.user.id)
            .single()
        ).pipe(
          switchMap(({ data: profile, error: profileError }) => {
            if (profileError || !profile) return of(null);

            const { data: avatarData } = supabase.storage
              .from('profile-avatars')
              .getPublicUrl(profile.avatar_url);

            if (!avatarData?.publicUrl) return of(null);

            return of({
              ...profile,
              avatar_url: avatarData.publicUrl,
            });
          })
        );
      }),
      catchError((err) => {
        console.error('Error loading profile info:', err);
        return of(null);
      })
    );
  }

  async updateProfileInfo() {}
}
