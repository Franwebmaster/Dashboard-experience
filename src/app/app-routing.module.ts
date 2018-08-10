import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { PanelComponent } from './sistema/panel/panel.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' }, //Rota Padrão
	{ path: 'login', component: LoginComponent },
	{ path: 'panel', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
