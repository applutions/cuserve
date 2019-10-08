import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss']
})
export class CompanylistComponent  implements OnInit {
  datasource: any[];
  json_array:any[];
  totalRecords: number;
  cols: any[];
  dt: any;
  activepagination: number = 0;
  jsondata: any;
  constructor(private http: HttpClient,
    private shareService: ShareService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.shareService.getData(constants.android_get_company).subscribe(res => {
      this.datasource = res['info']; 
      console
       this.totalRecords = this.datasource.length;
    });

    this.cols = [
      { field: 'displayName', header: 'Company Name' },
      { field: 'ivrName', header: 'IVR Name' },
      { field: 'baseKeyCode', header: 'Base Key Code' },
      { field: 'customerCare', header: 'Customer Care' },
      { field: 'logoUrl', header: 'Logo' },
      /*{ field: 'tagline', header: 'Tag Line' },*/
      { field: 'category', header: 'category' },
     
     
    ];
    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  
  showjson_ivr(company,name){
    this.shareService.getData(constants.android_get_ivr+"?company="+company+"&name="+name).subscribe(res => {
      this.json_array = res['info']; 
      console.log(this.json_array);
      this.jsondata = res['info'];
      document.body.classList.add("modal-open");
    });

  }
  closemodal(){
    this.jsondata = null;
    document.body.classList.remove("modal-open");
  }
  
  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }



  uploadtocuserve(data){
    let payload = {
      name: data.companyname,  
      ivrName: data.companyname + '-ivr-1',
      baseKeyCode: data.companyivrnumber,
      displayName: data.companyname.replace(/\s+/g, '-').toLowerCase(),
      logoUrl: data.companylogo,
      tagline: '',
      category: data.category,
      customerCare: data.companyivrnumber    
    }
    this.shareService.postData( constants.addcompany , payload).subscribe(res => { 
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Company detail uploaded sucessfully' });
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });
  }

}


