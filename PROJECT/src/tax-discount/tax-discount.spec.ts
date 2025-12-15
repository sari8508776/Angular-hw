import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxDiscount } from './tax-discount';

describe('TaxDiscount', () => {
  let component: TaxDiscount;
  let fixture: ComponentFixture<TaxDiscount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxDiscount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxDiscount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
