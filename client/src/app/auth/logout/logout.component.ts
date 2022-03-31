import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private tokenStorageService: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.logout();
  }

  logout(): boolean {
    this.userService.disconnect();

    this.router.navigate(['/']);

    /* Are we really logged out? */
    return !this.tokenStorageService.isAuthenticate();
  }
}
