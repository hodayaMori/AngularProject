import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ManagerComponent } from './manager/manager.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HealthySweetComponent } from './healthy-sweet/healthy-sweet.component';
import { HealthySaltyComponent } from './healthy-salty/healthy-salty.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CardComponent } from './card/card.component';
// import { IgxCardModule } from 'igniteui-angular';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    ManagerComponent,
    AboutUsComponent,
    HealthySweetComponent,
    HealthySaltyComponent,
    AllProductsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Login', component: LoginComponent },
      { path: 'signUp', component: SignUpComponent },
      { path: 'manager', component: ManagerComponent },
    ]),
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]

  //imports: [
  //BrowserModule,

  // ],
})
export class AppModule { }
