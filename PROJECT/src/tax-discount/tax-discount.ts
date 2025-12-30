
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
    lastDate: Date | null;

    constructor(private fb: FormBuilder, private tax: TaxDiscountServiceService) {
        this.lan = this.tax.getLanData(); 
        this.lastDate = this.tax.getDateData();
        this.discountForm = this.fb.group({
            name: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            address: ['', [Validators.required]],
            children: [0, [Validators.required]],
            averageIncome: [0, [Validators.required]],
            comments: ['']
        });
    }

    // Use a different method name to avoid confusion with the global alert
    showAlert(language: string) {
        if (language === 'en') {
            window.alert("The language is English and your data has been saved successfully");
        } else if (language === 'he') {
            window.alert("הנתונים שלך נשמרו בהצלחה");
        } else {
            // Fallback if language isn't set to 'en' or 'he'
            window.alert("Your data has been saved successfully");
        }
    }

    translate() {
        // Toggle language value between 'he' and 'en'
        this.lan = this.lan === 'he' ? 'en' : 'he';
        const lang = (this.lan === 'he' ? 'he' : 'en') as 'he' | 'en';

        // Static map for UI strings (labels, placeholders, buttons)
        const T: { [key: string]: { he: string; en: string } } = {
            nameLabel: { he: 'שם:', en: 'Name:' },
            phoneLabel: { he: 'טלפון:', en: 'Phone:' },
            addressLabel: { he: 'כתובת:', en: 'Address:' },
            childrenLabel: { he: 'מספר ילדים:', en: 'Number of children:' },
            averageIncomeLabel: { he: 'הכנסה ממוצעת לנפש:', en: 'Average income per person:' },
            commentsLabel: { he: 'הערות:', en: 'Comments:' },
            languagePrefix: { he: 'שפה:', en: 'Language:' },
            translateBtn: { he: 'תרגום', en: 'Translate' },
            submitBtn: { he: 'שלח', en: 'Submit' },
            namePlaceholder: { he: '', en: 'Full name' },
            phonePlaceholder: { he: '', en: 'Phone number' },
            addressPlaceholder: { he: '', en: 'Address' },
            commentsPlaceholder: { he: '', en: 'Any comments' }
        };

        const setLabel = (forName: string, text: string) => {
            const lbl = document.querySelector(`label[for="${forName}"]`) as HTMLElement | null;
            if (lbl) lbl.textContent = text;
        };

        setLabel('name', T['nameLabel'][lang]);
        setLabel('phone', T['phoneLabel'][lang]);
        setLabel('address', T['addressLabel'][lang]);
        setLabel('children', T['childrenLabel'][lang]);
        setLabel('averageIncome', T['averageIncomeLabel'][lang]);
        setLabel('comments', T['commentsLabel'][lang]);

        const langLbl = document.querySelector('label[for="language"]') as HTMLElement | null;
        if (langLbl) langLbl.textContent = `${T['languagePrefix'][lang]} ${this.lan}`;

        // Buttons
        const submitBtn = document.querySelector('button[type="submit"]') as HTMLButtonElement | null;
        if (submitBtn) submitBtn.textContent = T['submitBtn'][lang];

        const allBtns = Array.from(document.querySelectorAll('button')) as HTMLButtonElement[];
        const translateBtnEl = allBtns.find(b => b !== submitBtn) as HTMLButtonElement | undefined;
        if (translateBtnEl) translateBtnEl.textContent = T['translateBtn'][lang];

        // Placeholders
        const setPlaceholder = (id: string, text: string) => {
            const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
            if (el) el.placeholder = text;
        };
        setPlaceholder('name', T['namePlaceholder'][lang]);
        setPlaceholder('phone', T['phonePlaceholder'][lang]);
        setPlaceholder('address', T['addressPlaceholder'][lang]);
        setPlaceholder('comments', T['commentsPlaceholder'][lang]);

        // Set direction (rtl for Hebrew)
        const formEl = document.querySelector('form') as HTMLFormElement | null;
        if (formEl) formEl.dir = lang === 'he' ? 'rtl' : 'ltr';
    }
    onSubmit() {
        if(this.lastDate){
            const currentDate = new Date();
            if (currentDate > this.lastDate) {
                window.alert("אנו מצטערים, עברו כבר " + (currentDate.getTime() - this.lastDate.getTime()) / (1000 * 60 * 60 * 24) + " ימים מזמן הגשת הבקשות");
                return;
            }
        }       
        // if (this.discountForm.valid) {
        //     this.showAlert(this.lan);
        // } else {
        //     // If form is invalid, mark controls as touched so validation messages can show
        //     this.discountForm.markAllAsTouched();
        // }
    }
}