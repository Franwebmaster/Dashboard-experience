import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { ButtonComponent } from '../button/button.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const PanelRoutes: Routes = [
  {path: '', component: PanelComponent, children:[
    {path: 'botao', component: ButtonComponent}
  ]}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PanelRoutes)
  ],
  exports: [RouterModule],
  declarations: [
    SidebarComponent,
    PanelComponent
  ]
})
export class PanelModule { }
