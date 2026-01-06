import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voction } from './voction';

describe('Voction', () => {
  let component: Voction;
  let fixture: ComponentFixture<Voction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Voction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
