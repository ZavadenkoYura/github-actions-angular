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
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,

    // Custom Components
    InputFieldComponent,
  ],
  templateUrl: './register-form.component.html',
  providers: [AuthService],
})
export class RegisterFormComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  async register(): Promise<void> {
    if (this.registerForm.invalid) {
      console.warn('Register form is invalid');
      return;
    }

    const { username, email, password } = this.registerForm.value;
  }
}
