import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = 'http://3.137.208.191:8086';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'My-Custom-Header': 'foobar'
  });
  accessToken = '';
  deviceId = '';
  clientId = '';
  deviceType = 'WEB';
  constructor(
    private http: HttpClient
  ) { }

  generateOTP(payload: any): Observable<any> {
    return this.http.post( this.serverUrl + '/user/merchant/otp', { headers: this.headers }).pipe(
      map( response => response),
      catchError(this._errorHandler)
    );
  }

  _errorHandler(error: HttpErrorResponse) {
    return throwError(error || 'Server Error');
  }
}
