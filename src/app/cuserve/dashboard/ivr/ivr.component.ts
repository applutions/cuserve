import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../providers/share.service';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'user-ivr',
  templateUrl: './ivr.component.html',
  styleUrls: ['./ivr.component.scss']
})
export class UserIvrComponent implements OnInit {
  edittype: boolean;
  register: any = {};
  userId: any;
  datasource: any;
  cols: any
  totalRecords: any = 10;
  activepagination: number = 0;
  constructor(
    private route: ActivatedRoute,
    private shareService: ShareService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.userId = params['userid'];
      this.userId ? (this.edittype = true, this.getuserDetail()) : null;
    });


    this.cols = [
      { field: 'ivrname', header: 'IVR Name' },
      { field: 'createdAt', header: 'Created At' },
      { field: 'createdby.name', header: 'Created By' },
      { field: 'approved', header: 'Status' }
    ];

    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }
  getuserDetail() {
    this.shareService.getData(constants.getcustomer + this.userId).subscribe((res) => {
      this.register = res['data'][0];
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });

    this.shareService.getData(constants.getivr + 'getbyuser/' + this.userId).subscribe((res) => {
      console.log(res['ivr'])
      this.datasource = res['ivr'];
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });

  }

  deleteivr(data, i) {
    this.confirmationService.confirm({
      message: 'Are you sure want to delete?',
      accept: () => {
        this.shareService.delete(constants.getivr + data._id).subscribe(res => {
          this.getuserDetail();
          
          this.messageService.add({ severity: 'sucess', summary: 'Deleted Sucessfully', detail: res['message'] });
        })
      }
    });

  }
}
