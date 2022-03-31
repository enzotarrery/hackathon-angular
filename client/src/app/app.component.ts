import { Component, OnInit } from '@angular/core';
import { User } from './core/models/user';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  user: User | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.user = this.userService.getUser();
  }
}
