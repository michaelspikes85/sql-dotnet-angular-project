import { Component, OnInit } from '@angular/core';
import { DepEmpSharedService } from 'src/app/dep-emp-shared.service';

@Component({
  selector: 'app-show-del-dep',
  templateUrl: './show-del-dep.component.html',
  styleUrls: ['./show-del-dep.component.css'],
})
export class ShowDelDepComponent implements OnInit {
  constructor(private service: DepEmpSharedService) {}

  DepartmentList: any = [];

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList() {
    this.service.getDepList().subscribe((data) => {
      this.DepartmentList = data;
    });
  }
}
