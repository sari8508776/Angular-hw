import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-technician-visit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './technician-visit.html',
  styleUrl: './technician-visit.css',
})
export class TechnicianVisit {
 technicianVisit:FormGroup;
  //   options = ['Option 1', 'Option 2', 'Option 3'];
  // selectedOption: string;
 
 constructor(private fb:FormBuilder) {
this.technicianVisit=this.fb.group({
date:[''],
// costomrName:['',Validators.required],



})
  


  // constructor() {
  //   this.selectedOption = this.options[0]; // ברירת מחדל
  // // } 
  
 }
 
}

