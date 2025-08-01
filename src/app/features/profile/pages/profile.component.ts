import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileService } from '../../../shared/services/profile.service';
import { IUser } from '../../../types/IUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [CommonModule],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private readonly profileService = inject(ProfileService);
  private readonly router = inject(Router);
  private subsription!: Subscription;
  user!: IUser | null;

  ngOnInit(): void {
    this.subsription = this.profileService
      .loadProfileInfo()
      .subscribe((data) => {
        this.user = data;
      });
  }

  navigateToMainSection() {
    this.router.navigate(['/blog']);
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
