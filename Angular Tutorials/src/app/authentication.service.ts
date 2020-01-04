import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SecurityService } from './security-service';

@Injectable()
export class AuthenticationService {
    public postsUrl = 'http://localhost:4600';
    constructor(
        private http: HttpClient,
        private securityService: SecurityService
        ) { }

    public login(username: string, password: string) {
        return this.http.post<any>(this.postsUrl + `/login`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log('usertoken', user);
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('access_token', user.access_token);
                    this.securityService.init(user);
                    return true;
                }
            }));
    }

    public logout() {
        // remove user from local storage to log user out
        this.securityService.reset();
        localStorage.removeItem('access_token');
    }

    public loggedIn(): boolean {
        return (localStorage.getItem('access_token') !== null);
      }
}
