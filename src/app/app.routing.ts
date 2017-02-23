import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

//import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dash.component';


const appRoutes: Routes = [
    {
    	path: '',
    	redirectTo: 'dashboard',
    	pathMatch: 'full'
    },
    {
    	path: 'dashboard',
    	component: DashboardComponent
    },
    //{path: 'about', component: AboutComponent, data: {title: 'About'}}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
export const appRoutingProviders: any[] = [];
