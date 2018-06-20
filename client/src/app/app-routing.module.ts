import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictComponent } from './dict/dict.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { MaterialsComponent } from './materials/materials.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
	{ path:'', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path:'dict', component: DictComponent },
	{ path:'dashboard', component: DashboardComponent },
	{ path:'test', component: TestComponent },
	{ path:'materials', component: MaterialsComponent },
	{ path:'account', component: AccountComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}