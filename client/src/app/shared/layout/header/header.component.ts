import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
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
