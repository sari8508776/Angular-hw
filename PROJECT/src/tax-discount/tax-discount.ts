
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
    Direction: string = 'ltr';

    constructor(private fb: FormBuilder, private tax: TaxDiscountServiceService) {
        this.lan = this.tax.getLanData(); 
        if (this.lan === 'he') {
            this.Direction = 'rtl';
        }
        else{
            this.Direction = 'ltr';
        }

        this.discountForm = this.fb.group({
            name: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            address: ['', [Validators.required]],
            children: [0, [Validators.required]],
            averageIncome: [0, [Validators.required]],
            comments: ['']
        });
    }

    alert(language: string, dateMessage?: string | null) {
        let baseMessage = '';
        if (language === 'en') {
            baseMessage = "The language is English and your data has been saved successfully";
        } else if (language === 'he') {
            baseMessage = "הנתונים שלך נשמרו בהצלחה";
        }
        if (dateMessage) {
            baseMessage += ' ' + dateMessage;
        }
        alert(baseMessage);
    }

    onSubmit() {

        if (this.discountForm.valid) {
            const dateMessage = this.tax.updateAndCheckDate(new Date());
            this.alert(this.lan, dateMessage); 
           
        }
    }
}