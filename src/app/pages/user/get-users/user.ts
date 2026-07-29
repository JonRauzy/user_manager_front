import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../../services/user-service';
import { UserResponseType } from '../../../model/user/UserResponseType';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  userService: UserService = inject(UserService);
  userList= signal<Array<UserResponseType>>([]);

  ngOnInit(): void {
    this.userService
    .getUsers()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw new err;
      })
    )
    .subscribe((users) => {
      this.userList.set(users);
    })
  }
}
