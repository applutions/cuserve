import { Component, OnInit, OnChanges } from '@angular/core';
import { ShareService, AuthenticationService,HeaderService   } from './../providers/';
import { constants } from './../../app/constants';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-cuserve',
  templateUrl: './cuserve.component.html',
  styleUrls: ['./cuserve.component.scss']
})
export class cuserveComponent implements OnInit  {

  constructor(
    private shareService: ShareService,
    private titleService: Title,
    private auth: AuthenticationService, 
    private headerService: HeaderService,
    private meta: Meta) { }
  userLogin: any;
  logo: any;
  isLogged: any;
  locationDisplay: any;
  locationData: any;
  billinglength: any;
  ngOnInit() {

    this.auth.getloginState('customer').subscribe(res => {
      this.isLogged = res;
    });


    this.shareService.getLoginModal().subscribe(res => {
      this.userLogin = res;
    });

    this.headerService.billingcount$.subscribe(res => {  
      console.log('header', res)    
      this.billinglength = res;
    });

    // this.shareService.getData(constants.getsettings).subscribe(res => {
    //   const appData = res['data'][0];
    //   this.logo = constants.UploadedImage + appData.logo;
    //   this.titleService.setTitle(appData.title);
    //   this.meta.addTag({ name: 'description', content: appData.seo.title });
    //   this.meta.addTag({ name: 'metatag', content: appData.seo.metatag });
    //   this.meta.addTag({ name: 'keywords', content: appData.seo.keyword });
    //   this.meta.addTag({ name: 'description', content: appData.seo.description });
    //   const link = document.querySelector('link[rel*="icon"]') || document.createElement('link');
    //   link['type'] = 'image/x-icon';
    //   link['rel'] = 'shortcut icon';
    //   link['href'] = constants.UploadedImage + appData.favicon;
    //   document.getElementsByTagName('head')[0].appendChild(link);
    // });
  }

 



}
