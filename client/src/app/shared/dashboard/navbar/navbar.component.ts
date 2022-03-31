import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
user: User | null;

  constructor(
    public tokenStorageService: TokenStorageService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.getUser();
    }, 1500);
  }

  getUser(): void {
    this.user = this.userService.getUser();
  }
}
