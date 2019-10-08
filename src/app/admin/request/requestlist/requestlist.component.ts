import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.scss']
})
export class RequestlistComponent implements OnInit {
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

    this.getdata();

 


    this.cols = [
      { field: 'ivrname', header: 'IVR Name' },
      { field: 'createdby', header: 'Company Name' },
      { field: 'createdby', header: 'Account Holder' },
      { field: 'companyaddress1', header: 'Place' },


    ];
    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }

  generatebillmodaldispay(ev) {
    this.generatebillDisplay = ev.value;
    this.getdata()
  }


getdata(){
  this.shareService.postData(constants.getivr +'filter' , {status: 'pending'}).subscribe(res => {  
    this.datasource = res['ivr'];  
    this.totalRecords = this.datasource.length;
  });
}

}


