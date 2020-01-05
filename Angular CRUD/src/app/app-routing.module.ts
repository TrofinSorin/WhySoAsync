import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  providers: [],
})

export class AppRoutingModule {

}
