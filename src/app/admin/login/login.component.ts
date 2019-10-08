import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from './../../providers/share.service';
import { constants } from '../../constants';
import { AuthenticationService } from '../../providers';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  errormessage: any;

  credentials = {
    email: '',
    password: ''
  };

  constructor(private shareService: ShareService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() { }

  login() {
    this.shareService.postData(constants.login, this.credentials).subscribe((res) => { 
      this.auth.saveToken(res.user, res.token); 
      this.router.navigateByUrl('/admin');
    }, (err) => { 
      this.errormessage = err.error.message;
    });
  }

}
