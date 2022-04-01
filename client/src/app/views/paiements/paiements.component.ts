import { Component, OnInit } from '@angular/core';
import { Stuff } from 'src/app/core/models/stuff';
import { User } from 'src/app/core/models/user';
import { StuffService } from 'src/app/core/services/stuff.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-paiements',
  templateUrl: './paiements.component.html',
  styleUrls: ['./paiements.component.scss']
})
export class PaiementsComponent implements OnInit {
  stuff$: Stuff[] = []
 user: User | null;
  coefficientPrix: number = 0.72;
  searchword: string = '';

  constructor(
    public tokenStorageService: TokenStorageService,
    public userService: UserService,
    private stuffService: StuffService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getStuffs()
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.getUser();
    }, 1500);
  }

  getUser(): void {
    this.user = this.userService.getUser(); 
  }

   getStuffs() {
    this.stuffService.getStuffs().subscribe(response => {
      this.stuff$ = response.data.map((item: any) => {
       const stuff = {
          id: item.id,
          ...item.attributes,
          price: item.attributes.weight * this.coefficientPrix
        }
        return stuff;
      })
    });
  }

  searchStuff() {
    this.stuffService.searchStuff(this.searchword).subscribe(response => {
      this.stuff$ = response.data.map((item: any) => {
       const stuff = {
          id: item.id,
          ...item.attributes,
          price: item.attributes.weight * this.coefficientPrix
        }
        return stuff;
      })
    });
  }
}
