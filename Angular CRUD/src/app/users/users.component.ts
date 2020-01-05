import { FormBuilder, FormGroup } from '@angular/forms'
import { Component, OnInit } from '@angular/core'

import { UserService } from './../user.service'
import { User } from './../models/user.model'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[];
  public userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  public ngOnInit(): void {
    this.initUserForm();
    this.getUsers();
  }

  public initUserForm(): void {
    this.userForm = this.formBuilder.group({
      name: [''],
      userType: ['']
    });
  }

  public getUsers(): void {
    this.userService.getAll().subscribe(response => {
      this.users = response;
    });
  }

  public createUser(): void {
    const user = this.userForm.value;

    this.userService.create(user).subscribe(response => {
      this.getUsers();
    });
  }

  public changeUserSelectedStatus(user: User): void {
    console.log('user', user);
    user.selected = !user.selected;

    this.userService.update(user).subscribe(response => {
      this.getUsers();
    });
  }

  public delete(user: User) {
    this.userService.delete(user.id).subscribe(response => {
      this.getUsers();
    });
  }

  public refreshUsers(event: boolean) {
    this.getUsers();
  }

  public showUpdateForm(user: User): void {
    user.showUpdateUser = !user.showUpdateUser;
  }
}
