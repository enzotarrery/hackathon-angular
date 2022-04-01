import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsFormComponent } from './boats-form.component';

describe('BoatsFormComponent', () => {
  let component: BoatsFormComponent;
  let fixture: ComponentFixture<BoatsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
