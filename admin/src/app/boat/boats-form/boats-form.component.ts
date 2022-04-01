import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BoatService } from 'src/app/services/Boat/boat.service';

@Component({
  selector: 'app-boats-form',
  templateUrl: './boats-form.component.html',
  styleUrls: ['./boats-form.component.scss']
})
export class BoatsFormComponent implements OnInit {
  titleBreadcrumb = 'Boat create';

  public boatSent: boolean = false;

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private boatService: BoatService
    ) { }
  
  ngOnInit(): void {
    this.bindForm();
  }

  private bindForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      length: ['', [Validators.required]],
      width: ['', [Validators.required]],
      depth: ['', [Validators.required]],
      height: ['', [Validators.required]],
      maxWeigth: ['', [Validators.required]],
      maxVolume: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.boatService.addBoat(this.form.value).subscribe(response => {
      if (response.data.id) {
        this.boatSent = true;
      }
    })

  }


}
