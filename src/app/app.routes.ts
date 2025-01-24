import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "org",
        loadChildren: () => import(`../app/org/org-routing.module`).then(m => m.OrgRoutingModule),
        data: {title: 'Organisation'}
    }
];
