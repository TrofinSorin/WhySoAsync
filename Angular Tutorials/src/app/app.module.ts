import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared-module/shared.module';
import { AuthGuard } from './guards/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { AppSnackBarService } from './app-snackbar-service';
import { SecurityService } from './security-service';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    }),
  ],
  providers: [
    AuthGuard,
    UserService,
    AuthenticationService,
    AppSnackBarService,
    SecurityService,
    CookieService,
  ],
  bootstrap: [AppComponent],
  exports: [
  ],
})
export class AppModule { }
