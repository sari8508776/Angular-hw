
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaxDiscountServiceService } from '../services/tax-discount-service.service';

@Component({
    selector: 'app-tax-discount',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './tax-discount.html',
    styleUrls: ['./tax-discount.css'], 
})
export class TaxDiscount {
    discountForm: FormGroup;
    lan: string; 

    constructor(private fb: FormBuilder, private tax: TaxDiscountServiceService) {
        this.lan = this.tax.getLanData(); 
        this.discountForm = this.fb.group({
            name: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            address: ['', [Validators.required]],
            children: [0, [Validators.required]],
            averageIncome: [0, [Validators.required]],
            comments: ['']
        });
    }

    alert(language: string) {
        if (language === 'en') {
            alert("The language is English and your data has been saved successfully");
        } else if (language === 'he') {
            alert("הנתונים שלך נשמרו בהצלחה");
        }
    }

    onSubmit() {
        if (this.discountForm.valid) {
            this.alert(this.lan); 
           
        }
    }
}