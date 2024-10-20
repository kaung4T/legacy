import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },

    // { path: 'setting', component: SettingComponent },
    // { path: 'setting/:id', component: SettingComponent },
    // { path: '**', component: AboutComponent }
];
