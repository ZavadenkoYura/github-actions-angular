import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { InputFieldComponent } from '../../components/input-field.component';

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,

    // Custom components
    InputFieldComponent,
  ],
  templateUrl: './login-form.component.html',
  providers: [AuthService],
})
export class LoginFormComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  async login(): Promise<void> {
    if (this.loginForm.invalid) {
      console.warn('Login form is invalid');
      return;
    }

    const { email, password } = this.loginForm.value;

    try {
      const response = await this.authService.loginWithEmailAndPassword(
        email!,
        password!
      );

      const session = response?.data?.session;

      if (!session) {
        console.error('Login failed: No session returned');
        return;
      }

      this.router.navigate(['/blog']);
      console.log('Login successful');
    } catch (error) {
      console.error('Login error:', error);
    }
  }
}
