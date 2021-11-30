import { ContactPageComponent } from './../../../components/pages/contact-page/contact-page.component';
import { Route } from "@angular/router"
import { BaseLayoutComponent } from "src/app/components/layouts/base-layout/base-layout.component"
import { AboutPageComponent } from 'src/app/components/pages/about-page/about-page.component';

export const routes: Route[] = [

    {
        path: "",
        component: BaseLayoutComponent,
        children:[
            {
                path: "contact",
                component: ContactPageComponent,
            },
            {
                path: "about",
                component: AboutPageComponent,
            }

        ]
    }
]
