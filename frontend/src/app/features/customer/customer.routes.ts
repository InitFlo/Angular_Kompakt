import { Routes } from "@angular/router";
import { CustomerIndexComponent } from "./customer-index.component";

export const customerRoutes: Routes = [
    {
        path: 'customers',
        component: CustomerIndexComponent
    }
]