import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddAddressesComponent } from './components/add-addresses/add-addresses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AllListsComponent } from './components/address-list/all-lists.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { CartComponent } from './components/cart/cart.component';
import { ToastrModule,  } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddAddressesComponent,
    DashboardComponent,
    AllListsComponent,
    AddOrderComponent,
    CartComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    provideAnimations(), //
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
