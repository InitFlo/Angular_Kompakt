import { Routes } from "@angular/router";
import { CustomerIndexComponent } from "./customer-index.component";
import { CustomerListComponent } from "./views/customer-list/customer-list.component";

export const customerRoutes: Routes = [
    {
        path: 'customers',
        component: CustomerIndexComponent,
        children: [
            {
                path: '',
                redirectTo: '/customers/dashboard',
                pathMatch: "full"
            },
            {
                path: 'dashboard',
                component: CustomerListComponent
            }
        ]
    }
]