import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lehaskir } from './lehaskir';

describe('Lehaskir', () => {
  let component: Lehaskir;
  let fixture: ComponentFixture<Lehaskir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lehaskir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lehaskir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
