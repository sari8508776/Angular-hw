import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TechnicianVisit } from '../technician-visit/technician-visit';
import { TaxDiscount } from '../tax-discount/tax-discount'; 
  


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianVisit, TaxDiscount],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, PROJECT');
  });
});
