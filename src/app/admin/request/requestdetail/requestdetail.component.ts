import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService, HeaderService } from './../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-requestdetail',
  templateUrl: './requestdetail.component.html',
  styleUrls: ['./requestdetail.component.scss']
})
export class RequestdetailComponent implements OnInit {
  ivrID: any;
  ivrDetail: any;
  updatestatus: any;
  ivrlength: any;
  constructor(private http: HttpClient,
    private shareService: ShareService,
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.headerService.ivrcount$.subscribe(res => {
      this.ivrlength = res;
    })

    this.route.params.subscribe(params => {
      this.ivrID = params['ivrid'];
      this.shareService.getData(constants.getivr + this.ivrID).subscribe(res => {
        this.ivrDetail = res['ivr'][0]; 
        if (!this.ivrDetail.viewed) {
          this.ivrDetail.viewed = true;
          this.shareService.update(constants.getivr + this.ivrID  , this.ivrDetail ).subscribe(data => {
            this.headerService._ivrcount.next(this.ivrlength - 1);
          })
        }
      });

    });

  }

  statuschange(accept) {
    var message;
    var ivrstatus;
    if (accept) {
      message = 'Are you sure that you want to accept?';
      ivrstatus = 'approved'
    } else {
      message = 'Are you sure that you want to decline?';
      ivrstatus = 'declined'
    }
   
    this.confirmationService.confirm({
      message: message,
      accept: () => {
        this.ivrDetail.status = ivrstatus;
        this.shareService.update(constants.getivr + this.ivrDetail._id, this.ivrDetail).subscribe(res => {
          this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: res['message'] });
          this.updatestatus = true;
        })
      },
      reject: () => { }
    });
  }

}
