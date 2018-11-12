import { Routes } from '@angular/router';

import { ComparisonComponent } from './comparison/comparison.component';
import { IonicButtonComponent } from './components/ionic/ionic-button/ionic-button.component';
import { IonicDatepickerComponent } from './components/ionic/ionic-datepicker/ionic-datepicker.component';
import { IonicToggleComponent } from './components/ionic/ionic-toggle/ionic-toggle.component';

export const COMPONENT_DECLARATIONS: any[] = [
    ComparisonComponent,
    IonicDatepickerComponent,
    IonicButtonComponent,
    IonicToggleComponent
];

export const PROVIDERS_DECLARATIONS: any[] = [
];

export const ROUTES: Routes = [
    {
        path: '',
        component: ComparisonComponent
    },
    {
        path: 'ionic/button',
        component: IonicButtonComponent
    },
    {
        path: 'ionic/datepicker',
        component: IonicDatepickerComponent
    },
    {
        path: 'ionic/toggle',
        component: IonicToggleComponent
    },
];
