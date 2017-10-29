import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavComponent } from '././nav/nav.component';
import { LoginComponent } from '././login/login.component';
import { HomeComponent } from '././home/home.component';
import { AuthGuardService } from './Services/guard.sevice';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
