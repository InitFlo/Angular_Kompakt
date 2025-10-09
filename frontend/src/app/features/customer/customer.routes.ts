import { Routes } from "@angular/router";
import { CustomerIndexComponent } from "./customer-index.component";
import { CustomerListComponent } from "./views/customer-list/customer-list.component";
import { CustomerNewComponent } from "./views/customer-new/customer-new.component";
import { CustomerEditComponent } from "./views/customer-edit/customer-edit.component";

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
            },
            {
                path: 'new',
                component: CustomerNewComponent
            },
            {
                path: 'edit/:customerId',
                component: CustomerEditComponent
            }
        ]
    }
]