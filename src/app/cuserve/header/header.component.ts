import { Component, OnInit,OnChanges, Input, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ShareService , HeaderService } from './../../providers';
import { AuthenticationService } from './../../providers/authentication.service';
import { Globals } from './../../globals';
import { Router } from '@angular/router';
import { constants } from '../../constants';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  private itemCount: Number = 0;
  userinfo: any;
  @Input() logo: any;
  @Input() userLogged: any;
  @Input() billinglength: any;
  constructor(
    private shareService: ShareService,
    private auth: AuthenticationService,
    private headerService: HeaderService,
    private globals: Globals) {

  }

  ngOnInit() { 

    // this.shareService.getData(constants.getcustomer + this.userinfo._id).subscribe(res => {
    //   console.log(this.userinfo) 
    //   this.userdetail = res['data'][0]; 
    // });
  
  }

  ngOnChanges(changes) { 
    this.userinfo = this.auth.getUser('customer');
   if(this.userinfo){
     this.shareService.getData(constants.getnewbills + this.userinfo._id).subscribe(res => { 
       this.headerService._billingcount.next(res['bills'].length);
       
     })
   }
  }
  signin() {
    this.shareService.setLoginModal(true);
  }

  signout() {
    this.auth.customerlogout();
  }


}
