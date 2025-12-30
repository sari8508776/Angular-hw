import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TechnicianVisit } from '../technician-visit/technician-visit';
import { TaxDiscount } from '../tax-discount/tax-discount';
import { Summary } from '../summary/summary';
import {  CustomerList } from '../customer-list/customer-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TechnicianVisit,TaxDiscount,Summary,CustomerList,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('PROJECT');
permission:string="admin";
 isAdmin:boolean=true;
  getPromise(): Promise<string> {
        if(this.permission==="admin")
        return Promise.resolve(this.permission);

        return Promise.reject("secratery");

    }

    ngOnInit() {
  this.getPromise()
    .then(() => {
      this.isAdmin = true;
    })
    .catch(() => {
      this.isAdmin = false;
    });
}




  
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

