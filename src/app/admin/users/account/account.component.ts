import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../providers/share.service';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  edittype: boolean;
  register: any = {};
  userId: any;
  passwordvisible: boolean;
  filetoremove: any = [];
  previewImage: any;
  categorylist: any;
  companylogoapi: any;
  constructor(
    private route: ActivatedRoute,
    private shareService: ShareService,
    private router: Router,
    private messageService: MessageService) {
      this.categorylist = [
        { label: 'Select Category', value: null },
        { label: 'Banking', value: 'banking' },
        { label: 'Telecom', value: 'telecom' },
        { label: 'Finance', value: 'finance' },
        { label: 'other', value: 'other' }
      ];
     }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userid'];
      this.userId ? (this.edittype = true, this.getuserDetail()) : null;
    });

    this.companylogoapi = constants.uploadcompanylogo;

  }

  getuserDetail() {
    this.shareService.getData(constants.getcustomer + this.userId).subscribe((res) => {
      this.register = res['data'][0];
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });
  }

  onSubmitForm(formvalue) {
    this.userId ? this.update(formvalue) : this.save(formvalue)
  }

  save(formvalue) {
    this.shareService.postData(constants.userRegister, this.register).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'user created sucessfully' });
      this.router.navigate(['/admin/users']);
      formvalue.reset();
      this.removeUnusedFiles();

    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });
  }

  update(formvalue) {
    this.shareService.update(constants.getcustomer + this.userId, this.register).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'user uptated sucessfully' });
        this.removeUnusedFiles();
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });
  }



  onUpload(event, fieldname) {
    const response = JSON.parse(event.xhr.response);
    if (this.register[fieldname] === '' || this.register[fieldname] === undefined) {
      this.register[fieldname] = constants.companyImagepath + response.file[0].filename;
    } else {
      this.filetoremove = [...this.filetoremove, constants.companyImagepath + this.register[fieldname]];
      this.register[fieldname] = constants.companyImagepath  + response.file[0].filename;
    }
  }

  viewImage(image) { 
    this.previewImage =   this.register.companylogo
  }

  removeImage(id, fieldname) {
    this.register[fieldname] = '';
    this.previewImage = false;
    this.filetoremove = [...this.filetoremove, constants.companyImagepath + id];
  }

  removeUnusedFiles() {
    this.shareService.postData(constants.deletefile, this.filetoremove).subscribe(result => {
      console.log(result['message']);
      this.filetoremove = [];
    });
  }

}
