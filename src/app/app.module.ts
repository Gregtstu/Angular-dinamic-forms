import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllUsersComponent } from './all-users/all-users.component';
import { TestInputComponent } from './form-components/test-input/test-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from '@angular/material/stepper';
import { TestNumberComponent } from './form-components/test-number/test-number.component';
import { TestSelectComponent } from './form-components/test-select/test-select.component';
import { TestCheckboxComponent } from './form-components/test-checkbox/test-checkbox.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HttpClientModule} from "@angular/common/http";
import { AnketaComponent } from './anketa/anketa.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';

import {MatRadioModule} from "@angular/material/radio";

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    TestInputComponent,
    TestNumberComponent,
    TestSelectComponent,
    TestCheckboxComponent,
    AnketaComponent,
    MainLayoutComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatTreeModule,
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
