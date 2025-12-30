

import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TaxDiscountServiceService {
    translate(lan: string) {
        throw new Error('Method not implemented.');
    }
    language: string = 'en';
    lastDate: Date = new Date(2025, 1, 1); 

    constructor() {
        this.language = 'en';
        this.lastDate = new Date(2025, 1, 1); 
    }

    getLanData() {
        return this.language;
    }

    updateAndCheckDate(data: Date): string | null {
       
        let message: string | null = null;
        if (this.lastDate) {
            const timeDiff = data.getTime() - this.lastDate.getTime();
            const daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));
            if (this.language === 'he') {
                if (this.lastDate > data)
                    message = "";
                else
                    message = `מצטערים עברו${daysPassed} ימים מזמן הגשת הבקשות`;
            } else {
                if (this.lastDate > data)
                    message = ``;
                else
                    message = `Sorry, ${daysPassed} days have passed since the last submission of requests`;
            }
        }
        // this.lastDate = data;
        return message;
    }
     getDateData() {
        return this.lastDate; // Return the lastDate directly
    }
}