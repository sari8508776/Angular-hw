import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forsale } from './forsale';

describe('Forsale', () => {
  let component: Forsale;
  let fixture: ComponentFixture<Forsale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forsale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forsale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
