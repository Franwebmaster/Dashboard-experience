import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../../../../node_modules/@angular/router';
import { ButtonComponent } from '../../button/button.component';


//Rota
const menuRoutes: Routes = [
	{ path: 'botao', component: ButtonComponent },
];

@NgModule({
  imports: [
    
    CommonModule,
    RouterModule.forRoot(menuRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class SidebarModule { }
