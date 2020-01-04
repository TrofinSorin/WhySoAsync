import { UserJson } from './../models/user.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @Input() public user: UserJson;
  @Output() public refresh = new EventEmitter();
  public updatedUserForm: FormGroup;
  public patchUserForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.initUserForm();
    this.initPatchUserForm();
  }

  public initUserForm(): void {
    console.log('user', this.user);
    this.updatedUserForm = this.formBuilder.group({
      name: [this.user.name],
      userType: [this.user.userType]
    });
  }

  public initPatchUserForm(): void {
    this.patchUserForm = this.formBuilder.group({
      name: [this.user.name],
    });
  }

  public updateUser(): void {
    console.log('this.user', this.updatedUserForm.value);
    const user = this.updatedUserForm.value;

    user.id = this.user.id;

    this.userService.update(user).subscribe(response => {
      this.refresh.emit(true);
    });
  }

  public patchUser(): void {
    const user = this.patchUserForm.value;

    user.id = this.user.id;

    console.log('user:', user);
    this.userService.patch(user.id, user).subscribe(response => {
      this.refresh.emit(true);
    });
  }
}
