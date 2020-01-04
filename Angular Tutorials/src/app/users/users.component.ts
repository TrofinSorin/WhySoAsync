import { FormBuilder, FormGroup } from '@angular/forms';
import { UserJson } from './../models/user.model';
import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: UserJson[];
  public userForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder) { }

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
      console.log('response:', response);
      this.users = response;
    });
  }

  public changeUserSelectedStatus(user: UserJson): void {
    user.selected = !user.selected;

    this.userService.update(user).subscribe((response: UserJson[]) => {
      if (response) {
        console.log('response:', response);
        this.getUsers();
      }
    });
  }

  public deleteUser(user: UserJson): void {
    this.userService.delete(user.id).subscribe((response: UserJson) => {
      console.log('response:', response);
      this.getUsers();
    });
  }

  public createUser(): void {
    console.log('Submited', this.userForm.value);

    this.userService.register(this.userForm.value).subscribe(response => {
      this.getUsers();
    });
  }
  
  public showUpdateForm(user: UserJson): void {
    console.log('user:', user);
    user.showUpdateForm = !user.showUpdateForm;
  }

  public refreshUsers(refresh): void {
    if (refresh) {
      this.getUsers();
    }
  }
}
