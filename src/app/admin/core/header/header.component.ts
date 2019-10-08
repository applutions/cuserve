import { Component, OnInit } from '@angular/core';
import {AuthenticationService, ShareService, HeaderService} from '../../../providers'; 
import { constants } from '../../../constants';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ivrlength: any;

  constructor(
    private auth: AuthenticationService ,
    private headerService: HeaderService,
     private shareService: ShareService) { }
roles: any;
  ngOnInit() {
    this.roles = localStorage.getItem('adminroles') ? JSON.parse(localStorage.getItem('adminroles')) :  null;
    setTimeout(() => {
    this.roles = JSON.parse(localStorage.getItem('adminroles')); 
      
    }, 500);

    // this.shareService.postData(constants.getivr +'filter' , {status: 'pending', viewed: false}).subscribe(res => {  
    //   this.ivrlength = res['ivr'].length;    
    // });

    this.headerService.ivrcount$.subscribe(res => {
      this.ivrlength = res
    })
 
  }

  logout(){
    this.auth.logout();
  }
   
  

}
