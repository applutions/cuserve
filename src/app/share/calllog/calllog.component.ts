import { Component, OnInit, Pipe , PipeTransform} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../../providers/share.service';
import { constants } from '../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Pipe({ name: 'keys',  pure: false })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value)//.map(key => value[key]);
    }
}


@Component({
  selector: 'app-calllog',
  templateUrl: './calllog.component.html',
  styleUrls: ['./calllog.component.scss']
})
export class CalllogComponent implements OnInit {
  flowSid: any;
  executionslist: any;
  dt: any;
  
  cols: any;
  callogdata: any;
  totalRecords: any;
  userInputs:any[];
  activepagination: number = 0;
  constructor(private route: ActivatedRoute,
    private shareService: ShareService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.flowSid = params['id'];
    });

    this.shareService.postData(constants.getcalllog, { flowSid: this.flowSid }).subscribe(res => {

      this.executionslist = res['executions'];
      console.log(this.executionslist)
    });




    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }

  getuserinput(sid) {
    this.shareService.postData(constants.getcalllog + 'userinput', { flowSid: this.flowSid, sid: sid }).subscribe(res => {
      this.callogdata = res['executions'];
      this.userInputs = [];
      let index = 1;
      for (const key in this.callogdata.context.widgets) {
        if (this.callogdata.context.widgets[key].Digits) {
          var a = {};
          a['input-' + index++] = this.callogdata.context.widgets[key].Digits
          this.userInputs = [...this.userInputs, a];
        }
      }
      console.log( this.callogdata.context.trigger.call);
      // console.log( res['executions'])
    });
  }

}
