import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-billinglists',
  templateUrl: './billinglists.component.html',
  styleUrls: ['./billinglists.component.scss']
})
export class BillinglistsComponent implements OnInit {
  datasource: any[];
  totalRecords: number;
  cols: any[];
  generatebillDisplay: boolean;
  activepagination: number = 0;


  constructor(private http: HttpClient,
    private shareService: ShareService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.getdata()

    this.cols = [
      { field: 'billto.companyname', header: 'Company Name' },
      { field: 'billto.name', header: 'Account Holder' }
    ];
    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }

  generatebillmodaldispay(ev) {
    this.generatebillDisplay = ev.value;
    setTimeout(() => {
      this.getdata();

    }, 1000);
  }


  getdata() {
    this.shareService.getData(constants.bills).subscribe(res => {
      this.datasource = res['bills'];
      this.totalRecords = this.datasource.length;
    });
  }

}


