import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService , HeaderService} from '../../../providers/';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';

declare var window: Window;
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  account: any = {};
  edittype: boolean;
  userId: any;
  datasource: any;
  totalRecords: any;
  register: any;
  cols: any;
  dt: any;
  activepagination: number = 0;
  billingcount: number;

  generatebillDisplay: any;
  selectedbill: any;
  constructor(
    private route: ActivatedRoute,
    private shareService: ShareService,
    private router: Router,
    private headerService: HeaderService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.userId = params['userid'];
      this.userId ? (this.edittype = true, this.getuserDetail()) : null;
    });

    this.getbillinglistdata();
    // this.getuserDetail();

    this.headerService.billingcount$.subscribe(res => {
      this.billingcount = res;
    })

    this.cols = [
      { field: 'createdAt', header: 'Bill Date' },
      { field: 'billno', header: 'Bill No' },
      { field: 'total', header: 'Amount' },
      { field: 'paymentstatus', header: 'Payment Status' },
    ];
    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }



  getbillinglistdata() {
    this.shareService.getData(constants.bills + this.userId).subscribe(res => {
      console.log(res)
      this.datasource = res['bills'];
      this.totalRecords = this.datasource.length;
    });
  }


  getuserDetail() {
    this.shareService.getData(constants.getcustomeraccount + this.userId).subscribe((res) => {
      res['success'] ? this.account = res['customeraccounts'][0] : null;
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });

    this.shareService.getData(constants.getcustomer + this.userId).subscribe((res) => {
      this.register = res['data'][0];
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });

  }

  onSubmitForm(data) {
    let payload = data.value;
    payload.customer = this.userId;
    this.shareService.postData(constants.getcustomeraccount + this.userId, payload).subscribe((res) => {
      this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: res['message'] });
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });
  }

  generatebillmodaldispay(ev) {
    console.log(ev)
    this.generatebillDisplay = ev.value;
    this.getbillinglistdata();
     
  }

  viewbilling(data) {
    if(!data.viewed){ 
      data.viewed = true;
      this.shareService.update(constants.bills + data._id , data ).subscribe(res => { 
        let count = (this.billingcount - 1); 
        this.headerService._billingcount.next(count); 
    
      })
    }



    this.selectedbill = data;
    this.selectedbill ? this.generatebillDisplay = true : null
  }

  paybypal(price) {
    this.shareService.postData(constants.getpaypal, { price: price }).subscribe(res => {
      console.log(res);
      window.location.href = res['url'];
    })
  }

  valuechange(value, max, newID) {
    if (value.length === max) { 
      newID.focus();
    }
  }

  keypresscardnumber(ev){
    let cclength = ev.target.value.length;
    if(cclength == 4 || cclength == 9 || cclength == 14 ){
      ev.target.value = ev.target.value + '-'
    }
  }



}
