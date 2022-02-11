import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

import { HttpClientModule } from '@angular/common/http';
import { FormVehiclesComponent } from './components/form-vehicles/form-vehicles.component'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, HeaderComponent, VehiclesComponent, FormVehiclesComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
