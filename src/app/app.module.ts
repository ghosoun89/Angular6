import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes:Routes =[
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(routes) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
