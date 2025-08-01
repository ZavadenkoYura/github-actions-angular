import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { IUser } from '../../types/IUser';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly profileService = inject(ProfileService);

  private subsription!: Subscription;
  user!: IUser | null;

  ngOnInit(): void {
    this.subsription = this.profileService
      .loadProfileInfo()
      .subscribe((data) => {
        this.user = data;
      });
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
