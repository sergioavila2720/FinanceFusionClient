import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // Here will be all pages insude thenapp layout which will contaain the sidenav.
        ]

    }
];
