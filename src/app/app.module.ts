import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './sistema/login/login.component';
import { PanelComponent } from './sistema/panel/panel.component';
import { MainbarComponent } from './sistema/panel/mainbar/mainbar.component';
import { SidebarComponent } from './sistema/panel/sidebar/sidebar.component';
import { ButtonComponent } from './sistema/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    MainbarComponent,
    PanelComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
