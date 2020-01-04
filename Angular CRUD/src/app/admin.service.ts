import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}
  public adminUrl = 'http://localhost:4600/multipage';

  public multiPageChange(logData): Observable<any> {
    return this.http.put<any>(this.adminUrl, logData);
  }

  public getAdminData(): Observable<any> {
    return this.http.get<any>(this.adminUrl);
  }
}
