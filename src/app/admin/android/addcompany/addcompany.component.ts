import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../providers/share.service';
import { constants } from '../../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddcompanyComponent implements OnInit {
  edittype: boolean;
  register: any = {};
  userId: any;
  passwordvisible: boolean;
  filetoremove: any = [];
  previewImage: any;
  fileReaded: any;
  categorylist: any;
  uploadcsv: any;
  uploadedfilename: any;
  
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

    this.uploadcsv = constants.uploadcsv;

  }


  onSubmitForm(formvalue) {
    console.log(formvalue)
    // this.userId ? this.update(formvalue) : this.save(formvalue)

    let payload = {
      company: this.register.name,
      name: this.register.ivrName,
      tree:  JSON.parse(this.register.cuservejson),
      populateCheckpoints: true
    }


    this.shareService.postData(constants.addIvr, payload).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Cuserve Json Uploaded sucessfully' });
      this.save(formvalue);
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: err.message });
    });


  }

  save(formvalue) {
    this.shareService.postData(constants.addcompany, this.register).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Company created sucessfully' });
      this.router.navigate(['/admin/android']);
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
    console.log(event);

    this.uploadedfilename = event.files[0].name
    const response = JSON.parse(event.xhr.response);
    this.register.cuservejson = response.file;
    // if (this.register[fieldname] === '' || this.register[fieldname] === undefined) {
    //   this.register[fieldname] = constants.companyImagepath + response.file[0].filename;
    // } else {
    //   this.filetoremove = [...this.filetoremove, constants.companyImagepath + this.register[fieldname]];
    //   this.register[fieldname] = constants.companyImagepath + response.file[0].filename;
    // }
  }

  select(event){
console.log(event)
  }
  viewImage(image) {
    this.previewImage = this.register.companylogo
  }

  removeImage(id, fieldname) {
    this.register[fieldname] = '';
    this.filetoremove = [...this.filetoremove, constants.companyImagepath + id];
  }

  removeUnusedFiles() {
    this.shareService.postData(constants.deletefile, this.filetoremove).subscribe(result => {
      console.log(result['message']);
      this.filetoremove = [];
    });
  }
 
}
