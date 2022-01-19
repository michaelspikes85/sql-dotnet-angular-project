import { Component, OnInit } from '@angular/core';
import { DepEmpSharedService } from 'src/app/dep-emp-shared.service';

@Component({
  selector: 'app-show-del-emp',
  templateUrl: './show-del-emp.component.html',
  styleUrls: ['./show-del-emp.component.css'],
})
export class ShowDelEmpComponent implements OnInit {
  constructor(private service: DepEmpSharedService) {}

  EmployeeList: any = [];

  ModalTitle: string = '';
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'anonymous.png',
    };
    this.ModalTitle = 'Add Employee';
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.emp = item;
    this.ModalTitle = 'Edit Employee';
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteEmployee(item.EmployeeId).subscribe((data) => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.service.getEmpList().subscribe((data) => {
      this.EmployeeList = data;
    });
  }
}
