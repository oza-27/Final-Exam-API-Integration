import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddAddressesComponent } from './components/add-addresses/add-addresses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllListsComponent } from './components/address-list/all-lists.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path:"dashboard",component:DashboardComponent},
  { path:"add-address", component:AddAddressesComponent},
  { path:"login",component:LoginComponent},
  { path:"register",component:RegisterComponent},
  { path:"all-lists", component:AllListsComponent},
  { path:"add-order",component:AddOrderComponent},
  { path:"cart",component:CartComponent},
  { path:"order-list",component:OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
