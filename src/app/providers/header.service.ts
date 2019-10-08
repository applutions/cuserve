import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService { 

  _billingcount = new BehaviorSubject<any>(0);
  billingcount$ = this._billingcount.asObservable();

  _ivrcount = new BehaviorSubject<any>(0);
  ivrcount$ = this._ivrcount.asObservable();
  constructor() { }

  

  setContent(data: any) {
    this._billingcount.next(data);
  }

  getdata() {
    return this.billingcount$
  }

}
