import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Boats } from 'src/app/Model/Boats';
import { BoatService } from 'src/app/services/Boat/boat.service';
import { TripService } from 'src/app/services/trip/trip.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {

  titleBreadcrumb = 'Trip create';
  boats: Boats[];
  public tripSent: boolean = false;

  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private tripService: TripService,
    private boatService: BoatService
    ) { }
  
  ngOnInit(): void {
    this.bindForm();
    this.getBoats();
  }

  getBoats() {
    this.boatService.getBoats().subscribe(response => {
     
      const updatedboat = response.data.map((item: any) => {
        return {
          id: item.id,
          ...item.attributes,
        }
      })
      this.boats = updatedboat;
      console.log(this.boats)
    });
  }
  private bindForm() {
    this.form = this.fb.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      departure: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      state: [''],
      boat: [''],
    });
  }

  onSubmit() {
    this.form.value.boat = [parseInt(this.form.value.boat, 10)]
    

    this.tripService.addTrip(this.form.value).subscribe(response => {
      if (response.data.id) {
        this.tripSent = true;
      }
    })

  }

}
