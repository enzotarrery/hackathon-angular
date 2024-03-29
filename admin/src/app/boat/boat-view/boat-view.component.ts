import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boats } from 'src/app/Model/Boats';
import { BoatService } from 'src/app/services/Boat/boat.service';

@Component({
  selector: 'app-boat-view',
  templateUrl: './boat-view.component.html',
  styleUrls: ['./boat-view.component.scss']
})
export class BoatViewComponent implements OnInit {
  titleBreadcrumb = 'Boat view';
  boat: Boats;
  constructor(
    private boatService: BoatService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.getBoatById();
  }

  getBoatById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.boatService.getBoatById(id).subscribe((response: any) => {
        const boatToShow = {
          id: response.data.id,
          ...response.data.attributes
        }
        this.boat = boatToShow as Boats;
      })
      
    }
  }
}
