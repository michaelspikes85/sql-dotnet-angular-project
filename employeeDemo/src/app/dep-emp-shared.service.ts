import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepEmpSharedService {
  readonly APIUrl = 'http://localhost:53535/api';
  readonly PhotoUrl = 'http://localhost:53535/Photos';

  constructor(private http: HttpClient) {}

  //************Department Table*********** */

  //Get request for dbo.Department
  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Department');
  }
  //Post new department to dbo.Department
  addDepartment(val: any) {
    return this.http.post(this.APIUrl + '/Department', val);
  }
  //Change department on dbo.Department
  updateDepartment(val: any) {
    return this.http.put(this.APIUrl + '/Department', val);
  }
  //Delete department on dbo.Department
  deleteDepartment(val: any) {
    return this.http.delete(this.APIUrl + '/Department' + val);
  }

  //************Employee Table****************** */

  //Get request for dbo.Employee
  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Employee');
  }
  //Post new Employee to dbo.Employee
  addEmployee(val: any) {
    return this.http.post(this.APIUrl + '/Employee', val);
  }
  //Change Employee on dbo.Employee
  updateEmployee(val: any) {
    return this.http.put(this.APIUrl + '/Employee', val);
  }
  //Delete Employee on dbo.Employee
  deleteEmployee(val: any) {
    return this.http.delete(this.APIUrl + '/Employee' + val);
  }

  //Get all departments from EmployeeDB

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(
      this.APIUrl + '/Employee/GetAllDepartmentNames'
    );
  }

  //*********Photo File********** */

  //Upload Photo
  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
  }
}
