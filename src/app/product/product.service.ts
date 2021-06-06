import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private serverUrl = 'http://3.137.208.191:8888';
  headers  = new HttpHeaders();
  accessToken = '';
  deviceId = '';
  clientId = '';
  deviceType = 'WEB';
  constructor(
    private http: HttpClient
  ) { }

  setRequestHeaders() {
    // this.accessToken = localStorage.getItem('accessToken');
    // this.clientId = localStorage.getItem('clientId');
    // this.deviceId = localStorage.getItem('deviceId');
    this.deviceType = 'WEB';
    // this.headers = new HttpHeaders ({
    //   'Content-Type': 'application/json',
    //   Authorization: 'bearer ' + this.accessToken,
    //   ClientId : this.clientId,
    //   DeviceId: this.deviceId,
    //   DeviceType: this.deviceType,
    //   DeviceOS: navigator.platform
    // });
    this.headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      Authorization: 'bearer',
      DeviceType: this.deviceType,
      DeviceOS: navigator.platform
    });
    return true;
  }

  getUserList(): Observable<any> {
    const url = this.serverUrl + '/user?id=2f568fdf-0be5-44fd-8109-0436a6c8e8f4';
    if (this.setRequestHeaders()) {
      return this.http.post( url, { headers: this.headers }).pipe(
        map( response => response),
        catchError(this._errorHandler)
      );
    }
  }

  _errorHandler(error: HttpErrorResponse) {
    return throwError(error || 'Server Error');
  }
}
