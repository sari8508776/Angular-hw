

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
        return this.language; // Return the language string directly
    }
     getDateData() {
        return this.lastDate; // Return the lastDate directly
    }
}