import { UserService } from '../user.service';
import { User } from 'src/app/models/user.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @Input() public user: User;
  @Output() public refresh = new EventEmitter();
  public updateUserForm: FormGroup;
  public patchUserForm: FormGroup;

  constructor(private formBuider: FormBuilder, private userService: UserService) { }

  public ngOnInit() {
    console.log('user', this.user);
    this.initUserForm();
    this.initPatchUserForm();
  }

  public initUserForm(): void {
    this.updateUserForm = this.formBuider.group({
      name: [this.user.name],
      userType: [this.user.userType]
    });
  }

  public initPatchUserForm(): void {
    this.patchUserForm = this.formBuider.group({
      name: [this.user.name]
    });
  }

  public updateUser(): void {
    console.log('updateUservalue', this.updateUserForm.value);
    const user = this.updateUserForm.value;

    user.id = this.user.id;

    this.userService.update(user).subscribe(response => {
      console.log('response:', response);
      this.refresh.emit(true);
    });
  }

  public patchUser(): void {
    const user = this.patchUserForm.value;

    user.id = this.user.id;

    this.userService.patch(user.id, user).subscribe(response => {
      this.refresh.emit(true);
    });
  }
}
