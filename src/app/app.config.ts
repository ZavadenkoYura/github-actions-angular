import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { LoginFormComponent } from './core/auth/pages/login/login-form.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { RedirectGuard } from './core/auth/guards/redirect.guard';
import { RegisterFormComponent } from './core/auth/pages/register/register-form.component';

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [RedirectGuard],
  },
  {
    path: 'register',
    component: RegisterFormComponent,
    canActivate: [RedirectGuard],
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./features/posts/pages/posts.component').then(
        (c) => c.PostsComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/pages/profile.component').then(
        (c) => c.ProfileComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/posts',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
