import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnicianVisit } from '../technician-visit/technician-visit';


describe('TechnicianVisit', () => {
  let component: TechnicianVisit;
  let fixture: ComponentFixture<TechnicianVisit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianVisit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianVisit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
