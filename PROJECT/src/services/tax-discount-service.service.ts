

import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TaxDiscountServiceService {
    language: string = 'en';
    lastDate: Date | null = null;

    constructor() {
        this.language = 'he';
        this.lastDate = new Date('2026-01-01');
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
}