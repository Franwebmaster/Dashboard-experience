import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { PanelComponent } from './sistema/panel/panel.component';
import { PanelModule } from './sistema/panel/panel.module';

//Rota
const appRoutes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' }, //Rota Padrão
	{ path: 'panel', loadChildren: 'app/sistema/panel/panel.module' },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes),PanelModule],
	declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
