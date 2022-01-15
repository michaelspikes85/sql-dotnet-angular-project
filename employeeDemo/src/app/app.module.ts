import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { ShowDelDepComponent } from './department/show-del-dep/show-del-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowDelEmpComponent } from './employee/show-del-emp/show-del-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { DepEmpSharedService } from './dep-emp-shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddEditDepComponent,
    ShowDelDepComponent,
    EmployeeComponent,
    ShowDelEmpComponent,
    AddEditEmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DepEmpSharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
