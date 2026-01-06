import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TechnicianVisit } from '../technician-visit/technician-visit';
import { TaxDiscount } from '../tax-discount/tax-discount';
import { Forsale } from '../apartments/forsale/forsale';
import { Lehaskir } from '../apartments/lehaskir/lehaskir';
import { Voction } from '../apartments/voction/voction';
import { ApartmentHome } from '../apartments/apartment-home/apartment-home';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,TechnicianVisit,TaxDiscount,Forsale,Lehaskir,Voction,ApartmentHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('PROJECT');

  
}
// import { Component } from '@angular/core';
// import { signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { TechnicianVisit } from '../technician-visit/technician-visit';

// @Component({
//   imports: [RouterOutlet, TechnicianVisit],
//   selector: 'app-root',
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })
// export class AppComponent {
//   protected readonly title = signal('PROJECT');
// }

