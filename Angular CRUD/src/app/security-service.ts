import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';

// import { USER_TYPES } from 'app/main/security/user.types';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private user: User = new User();
  private isUserReady: Subject<boolean> = new Subject<boolean>();

  constructor(private cookieService: CookieService) {}

  public getUser(): User {
    return this.user;
  }

  public checkUserIsReady(): Subject<boolean> {
    return this.isUserReady;
  }

  public init(data?, rememberMe?): void {
    console.log('data', data);
    if (data) {
      this.cookieService.set('username', data.username, rememberMe ? 30 : 1, '/');
      this.cookieService.set('access_token', data.access_token, rememberMe ? 30 : 1, '/');
      this.cookieService.set('id', data.id, rememberMe ? 30 : 1, '/');
      this.cookieService.set('firstName', data.firstName, rememberMe ? 30 : 1, '/');
      this.cookieService.set('lastName', data.lastName, rememberMe ? 30 : 1, '/');
      // TODO: lastUsed
      if (data.companies && data.companies.length) {
        this.cookieService.set('companyKey', data.companies[0].key, rememberMe ? 30 : 1, '/');
        this.cookieService.set('companies', JSON.stringify(data.companies), rememberMe ? 30 : 1, '/');
      }
    }

    this.user.username = this.cookieService.get('username');
    this.user.access_token = this.cookieService.get('access_token');
    this.user.id = +this.cookieService.get('id');
    this.user.firstName = this.cookieService.get('firstName');
    this.user.lastName = this.cookieService.get('lastName');
  }

  public reset(): void {
    this.cookieService.delete('username', '/');
    this.cookieService.delete('access_token', '/');
    this.cookieService.delete('id', '/');
    this.cookieService.delete('firstName', '/');
    this.cookieService.delete('lastName', '/');
  }

  public isUserLoggedIn(): boolean {
    return !!(this.user.username && this.user.password && this.user.id && this.user.firstName);
  }
}
