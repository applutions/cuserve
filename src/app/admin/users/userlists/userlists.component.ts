import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.scss']
})
export class UserlistsComponent  implements OnInit {
  datasource: any[];
  totalRecords: number;
  cols: any[];
  dt: any;
  activepagination: number = 0;
  constructor(private http: HttpClient,
    private shareService: ShareService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.shareService.getData(constants.getcustomer).subscribe(res => {
      this.datasource = res['customer']; 
       this.totalRecords = this.datasource.length;
    });

    this.cols = [
      { field: 'companyname', header: 'Company Name' },
      { field: 'Logo', header: 'Company Logo' },

      { field: 'createdAt', header: 'Joining Date' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email Address' },
      { field: 'phone', header: 'Phone Number' }, 
    ];
    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }

  

}


