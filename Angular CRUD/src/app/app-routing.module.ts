import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [
    AuthGuard
  ],
})

export class AppRoutingModule {

}
