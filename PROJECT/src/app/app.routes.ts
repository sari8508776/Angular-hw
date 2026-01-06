import { Routes } from '@angular/router';
import { Forsale } from '../apartments/forsale/forsale';
import { Lehaskir } from '../apartments/lehaskir/lehaskir';
import { Voction } from '../apartments/voction/voction';
import { ApartmentHome } from '../apartments/apartment-home/apartment-home';

export const routes: Routes = [
{path:"app-apartment-home",component:ApartmentHome},
{path:"forsale",component:Forsale},
{path:"app-lehaskir",component:Lehaskir},
{path:"app-voction",component:Voction},
{path:'**',component:ApartmentHome}


];
