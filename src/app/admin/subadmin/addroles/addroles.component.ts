import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addroles',
  templateUrl: './addroles.component.html',
  styleUrls: ['./addroles.component.scss']
})
export class AddrolesComponent implements OnInit {

  constructor() { }

  roles: any = {}
  addprivilageForm: any;
  editview: any;

  ngOnInit() {
  }

  submitroles() { }

  addprivilage(val) {
    console.log(val)
  }

}
