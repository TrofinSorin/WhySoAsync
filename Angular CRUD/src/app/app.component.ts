import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'LoginApp NodeJS';
  public dataReceived: {}[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) {
  }

  public ngOnInit(): void {
  }

  public logout(): any {
    if (this.isLogged()) {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }
  }

  public isLogged(): boolean {
    return this.authenticationService.loggedIn();
  }
}


