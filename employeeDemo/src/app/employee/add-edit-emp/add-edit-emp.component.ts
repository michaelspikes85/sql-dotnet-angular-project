import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DepEmpSharedService } from 'src/app/dep-emp-shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent implements OnInit {
  constructor(private service: DepEmpSharedService) {}

  @Input() emp: any;
  EmployeeId: string = '';
  EmployeeName: string = '';
  Department: string = '';
  DateOfJoining: string = '';
  PhotoFileName: string = '';
  PhotoFilePath: any;

  @Output() photoUpdated = new EventEmitter();

  DepartmentList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentList = data;
      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    let val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };
    this.service.addEmployee(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    let val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };

    this.service.updateEmployee(val).subscribe((res: any) => {
      alert(res.toString());
    });
  }

  uploadPhoto(event: any) {
    let file = event.target.files[0];

    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    {
      this.service.UploadPhoto(formData).subscribe((data: any) => {
        this.PhotoFileName = data.toString();
        this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
        this.photoUpdated.emit();
      });
    }
  }
}
