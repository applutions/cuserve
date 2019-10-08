import { Component, OnInit } from '@angular/core';
import { ShareService } from './../../providers/share.service';
import { constants } from './../../constants';
import { AuthenticationService } from './../../providers/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerImage: any;
  imagepath: any;
  isLogged: any;
  constructor(private shareService: ShareService,   private auth: AuthenticationService,) { }

  ngOnInit() {
    //     // localStorage.setItem('previousurl' , e[0].urlAfterRedirects);

    // this.imagepath  = constants.carImage;
    // this.shareService.getData(constants.getbanner).subscribe(res => { 
    //   this.bannerImage = res['data'];
    // });

    this.auth.getloginState('customer').subscribe(res => { 
      console.log(res)
      this.isLogged = res;
    });

    // this.auth.$userdetail.subscribe(res => {
    //   console.log(res);
    //   this.isLogged = res;
    // })
 
 
  }


  signindisplay(view) { 
    this.shareService.setLoginModal(view);
  }

}
