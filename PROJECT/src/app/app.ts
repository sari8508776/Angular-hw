import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TechnicianVisit } from '../technician-visit/technician-visit';
import { TaxDiscount } from '../tax-discount/tax-discount';

@Component({
  selector: 'app-root',
  imports: [TechnicianVisit,TaxDiscount],
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

