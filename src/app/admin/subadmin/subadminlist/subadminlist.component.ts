import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from './../../../providers';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-subadminlist',
  templateUrl: './subadminlist.component.html',
  styleUrls: ['./subadminlist.component.scss']
})
export class SubadminlistComponent implements OnInit {
  datasource: any[];
  totalRecords: number;
  cols: any[];
  dt: any;
  ds: any;
  display: any;
  activepagination: number = 0;

  privilagevisible: boolean

  subadmins: any = {};
  subadminsForm: any;
  roleslist: any = []
  constructor(private http: HttpClient,
    private shareService: ShareService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {



    this.cols = [

      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email Address' },
      { field: 'createdAt', header: 'Created' },
      { field: 'role', header: 'Roles' },
    ];

    this.roleslist = [ 
      { label: 'Select Roles', value: null }
    ];

    this.shareService.getData(constants.roles).subscribe(res => { 
      res['roles'].forEach(element => {
        if(element.rolename != 'Admin'){
          this.roleslist = [...this.roleslist, { label: element.rolename, value: element._id }]

        }
      }); 
    }); 
    this.getsubadmin();
    sessionStorage.getItem('activeivrpagination') ? this.activepagination =  JSON.parse(sessionStorage.getItem('activeivrpagination')): null;

  }

  pagechange(ev){ 
    sessionStorage.setItem('activeivrpagination' , ev.first)
  }

  getsubadmin() {
    this.shareService.getData(constants.getusers).subscribe(res => {
      this.datasource = res['data'];
      console.log(this.datasource, res)
      this.totalRecords = this.datasource.length;
    });
  }

  showDialog(data) {
    if (data) {
      this.subadmins = data;
    } else {
      this.subadmins = {};
    }
    this.display = true;
  }

  onSubmitCoupon({ value }) {
    const data = this.subadmins;
    this.display = false;
    if (data._id) {
      this.updatesubadmin(data);
    } else {
      this.addsubadmin(data);
    }
  }

  addsubadmin({ value }) {
    const data = this.subadmins;
    this.display = false;
    this.shareService.postData(constants.register, data).subscribe(res => {
      this.getsubadmin();
      this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: 'Added Sucessfuly' });
    });
  }

  updatesubadmin(data) {
    this.shareService.update(constants.getusers, data).subscribe((res) => {
      this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: 'Updated Sucessfuly' });
    });

  }

  onDeleteCoupon(val , i) {
    console.log(val._id , i)
    this.shareService.delete(constants.getusers + val._id).subscribe(res => {
      const index = i;
      this.datasource = this.datasource.filter((data, i) => i !== index);
      this.messageService.add({ severity: 'sucess', summary: 'Sucess Message', detail: 'Deleted Sucessfuly' });

    });
  }
 


}


