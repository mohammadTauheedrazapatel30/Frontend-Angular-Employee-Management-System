import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees : any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  employeeList = {
    name : '',
    email : '',
    address : '',
    city : '',
    statesSignUp : '',
    zip : ''
  }

}
