import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

import {   MessageService } from 'primeng/api';


@Injectable() // {providedIn: 'root'}

export class InterceptService implements HttpInterceptor {

	constructor(private auth: AuthenticationService, private messageService: MessageService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: {
				Authorization: `Bearer ${this.auth.getToken('user')}`
			}
		});


		return next.handle(request)
			.pipe(
			tap(event => {
				if (event instanceof HttpResponse) {

					// console.log(event);
				}
			}, error => { 
				let errormessage;
				error.error.message ?   errormessage =  error.error.message :  errormessage =  error.message;
				this.messageService.add({ severity: 'error', summary:   error.status +' -' + error.statusText, detail: errormessage});
			})
			)

	};


}
