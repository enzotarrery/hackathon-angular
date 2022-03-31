import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required /* Validators.minLength(6) */]],
    });
  }

  login(): void {
    this.userService.connect(this.form.value).subscribe((response) => {
      const user = response.user;

      this.tokenStorageService.setToken(response.jwt);
      this.userService.setUser(user);

      this.router.navigate(['/']);
    });
  }
}
