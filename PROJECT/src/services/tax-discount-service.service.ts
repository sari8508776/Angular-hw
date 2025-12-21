

import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TaxDiscountServiceService {
    language: string = 'en';
    lastDate: Date | null = null;

    constructor() {
        this.language = 'he';
        this.lastDate = null;
    }

    getLanData() {
        return this.language; // Return the language string directly
    }
}