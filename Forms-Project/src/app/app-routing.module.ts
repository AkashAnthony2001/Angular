import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home' , component:AppComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'forgot' , component:ForgotComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
