import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentHome } from './apartment-home';

describe('ApartmentHome', () => {
  let component: ApartmentHome;
  let fixture: ComponentFixture<ApartmentHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
