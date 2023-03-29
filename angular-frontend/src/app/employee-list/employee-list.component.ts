import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  page:number;
  isConnected:boolean
linkValue: any;
  constructor(private employeeservice: EmployeeService, 
    private router: Router){}

  ngOnInit(): void {
    this.getEmployees()
    this.isConnected=true;
  }
  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data=>{
      this.employees=data;
    });
  }
  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(Id: number){
    this.router.navigate(['update-employee', Id]);
  }
  deleteEmployee(id: number){
    this.employeeservice.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
  pagechange(event:any){
   this.page=event;
  }
}
