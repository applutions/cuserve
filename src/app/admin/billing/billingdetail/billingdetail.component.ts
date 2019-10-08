import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-billingdetail',
  templateUrl: './billingdetail.component.html',
  styleUrls: ['./billingdetail.component.scss']
})
export class BillingdetailComponent implements OnInit {
  datasource: any[];
  totalRecords: number;
  cols: any[];
  billId: any;
  selectedbill: any;
  activepagination: number = 0; 

  generatebillDisplay: boolean;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private shareService: ShareService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.billId = params['id'];
      this.shareService.getData(constants.bills + this.billId  ).subscribe(res => {  
        this.datasource = res['bills']; 
        this.totalRecords = this.datasource.length;
      });
      
    });
 

    this.cols = [
      { field: 'createdAt', header: 'Bill Date' },
      { field: 'billId', header: 'Bill No' },
      { field: 'total', header: 'Amount' },
      { field: 'paymentstatus', header: 'Payment Status' }, 

    ];
    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }

  generatebillmodaldispay(ev) {
    this.generatebillDisplay = ev.value;
    this.selectedbill =  null;
  }

  remind(data) {
    data.remind++
    this.shareService.update(constants.bills + data._id, data).subscribe(res => {
      this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: 'Reminder to the customer sent sucessfully' });

    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });

    });

    this.shareService.postData(constants.bills + 'sendreminder', data).subscribe(res => {
     
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });

    });

  }


  viewbilling(data){
    this.selectedbill = data;
    this.selectedbill ? this.generatebillDisplay = true : null 
  }

}


