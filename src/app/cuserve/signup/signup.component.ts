import { Component, OnInit, Input, ElementRef, Renderer, OnChanges } from '@angular/core';
import { ShareService } from './../../providers/share.service';
import { constants } from '../../constants';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../providers';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  forgetForm: boolean;
  @Input() view: any;
  loginForm: any;
  previewImage: any;
  registerForm: any;
  userdetail: any = {};
  registerdetail: any = {};
  resetdetail: any = {};
  registerstep2: boolean =  false;
  errormessage: string;
  emailvalidate: string;
  ForgetpassForm: any;
  categorylist: any;
  companylogoapi: string;
  uploadedFiles: any[] = [];
  filetoremove: any = [];
  constructor(
    private shareService: ShareService,
    private auth: AuthenticationService,
    private messageService: MessageService,
    private router: Router, elementRef: ElementRef, renderer: Renderer) {
    // renderer.listen(elementRef.nativeElement, 'click', (event) => {
    //   event.srcElement.classList.contains('modal') ? this.shareService.setLoginModal(false) : null
    // });
    this.categorylist = [
      { label: 'Select Category', value: null },
      { label: 'Banking', value: 'banking' },
      { label: 'Telecom', value: 'telecom' },
      { label: 'Finance', value: 'finance' },
      { label: 'other', value: 'other' }
    ];
  }

  ngOnInit() {
    this.forgetForm = false;
 
    this.companylogoapi = constants.uploadcompanylogo;
   this.settinglogin()  
    
  }

  settinglogin(){
    if(localStorage.getItem('cuserveUserValue') ){
      let storeddata = JSON.parse( localStorage.getItem('cuserveUserValue'));
      this.userdetail = storeddata;
    } 
  }

  onRegister(val) {
    console.log(val)
    this.shareService.postData(constants.userRegister, this.registerdetail).subscribe((res) => {

      this.view = 'emailverification';
      // this.messageService.add({ severity: 'success', summary: 'Sucess', detail: 'You have Sucessfull Register. Please Login using Email and password' });
      this.removeUnusedFiles()
    }, (err) => {
      this.errormessage = err.error.message;
      console.error(err, this.errormessage);
    });
  }


  onLogin() {
    console.log(this.userdetail)

    if (this.userdetail.remember) {
      console.log(this.userdetail.remember)
     localStorage.setItem('cuserveUserValue', JSON.stringify(this.userdetail));
  } else {
    localStorage.removeItem('cuserveUserValue');
  }

    this.shareService.postData(constants.userLogin, this.userdetail).subscribe(res => {
      this.auth.saveToken(res.user, res.token);
      this.messageService.add({ severity: 'success', summary: 'Sucess', detail: 'You have Sucessfull Logged in' });
      this.close();
      this.router.navigateByUrl('/dashboard');

    }, (err) => {
      this.errormessage = err.error.message;
      console.error(err, this.errormessage);
    });


  }

  onforgetpass() {
    this.shareService.postData(constants.getcustomer + 'forgetpass', this.resetdetail).subscribe(res => {
      console.log(res)
      if(res['success']){
        this.messageService.add({ severity: 'success', summary: 'Sucess', detail: res['message'] });
        this.close()
      } else {
      this.errormessage = res['message'] ;

      }
     
    }, (err) => {
      this.errormessage = err.error.message;
      console.error(err, this.errormessage);
    });


  }

  // onUpload(ev){
  //   console.log(ev)
  //   for(let file of ev.files) {
  //     this.uploadedFiles.push(file);
  // }
  // }

  onUpload(event, fieldname) {
    const response = JSON.parse(event.xhr.response);
    if (this.registerdetail[fieldname] === '' || this.registerdetail[fieldname] === undefined) {
      this.registerdetail[fieldname] = constants.companyImagepath + response.file[0].filename;
    } else {
      this.filetoremove = [...this.filetoremove, constants.companyImagepath + this.registerdetail[fieldname]];
      this.registerdetail[fieldname] = constants.companyImagepath + response.file[0].filename;
    }
  }

  checkemailvalidation(value, validation) {
    console.log(value, validation);
    if (validation) {
      this.shareService.postData(constants.getcustomer + 'findcustomerexists', { email: value }).subscribe(res => {
        // console.log();
        this.emailvalidate = res['exists'];
      })
    }


  }

  viewImage(image) {
    console.log(image)
    this.previewImage = image;
  }

  removeImage(id, fieldname) {
    this.registerdetail[fieldname] = '';
    this.previewImage = null;

    this.filetoremove = [...this.filetoremove, constants.companyImagepath + id];
  }

  removeUnusedFiles() {
    this.shareService.postData(constants.deletefile, this.filetoremove).subscribe(result => {
      console.log(result['message']);
      this.filetoremove = [];
    });
  }


  close() {
    this.resetdetail = {};
    this.registerdetail = {};
    this.userdetail = {};
    this.shareService.setLoginModal(false);
    this.registerstep2 = false;
    this.settinglogin();
  
  }
}
