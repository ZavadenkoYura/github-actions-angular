import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet],
  template: `
    <!-- <app-header></app-header> -->
    <router-outlet></router-outlet>
  `,
})
export class MainLayoutComponent {}
