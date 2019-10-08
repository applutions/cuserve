import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
import { getViewData } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-roleslist',
  templateUrl: './roleslist.component.html',
  styleUrls: ['./roleslist.component.scss']
})
export class RoleslistComponent implements OnInit {
  datasource: any[];
  totalRecords: number;
  cols: any[];
  privilagevisible: boolean;
  privilage: any = {};
  editview: any;
  activepagination: number = 0;

  dt: any;
  constructor(private http: HttpClient,
    private shareService: ShareService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.getData();

    this.cols = [
      { field: 'rolename', header: 'Roles' },
    ];
    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }

  getData() {
    this.shareService.getData(constants.roles).subscribe(res => {
      this.datasource = res['roles'];
      this.totalRecords = this.datasource.length;
    });
  }

  onSubmitprivilage(val) {

    if(this.editview){
      console.log('in');
      this.shareService.update(constants.roles, this.privilage).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res['message'] });
        this.privilagevisible = false;
        this.privilage = {};
      })
    } else {

      this.shareService.postData(constants.roles, val.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res['message'] });
        this.privilagevisible = false;
        this.privilage = {};
      })

    }

    this.editview = false;
    this.getData();
  

  }



  deletedprivilage(id) {

    this.confirmationService.confirm({
      message: 'Do you want to delete this?',
      accept: () => {
        
        this.shareService.delete(constants.roles + id).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: res['message'] });
          this.privilagevisible = false;
          this.privilage = {};
          this.getData();
     
       })
      }
    });

  


  }

  editprivilage(data) {
    this.privilage = data;
    this.privilagevisible = true;
    this.editview = true;
  }
}


