import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { RouterLink } from "@angular/router";
import { NothingToShow } from '../../../../shared/components/nothing-to-show/nothing-to-show';
import { UserService } from '../../../../core/services/user.service';
import { UserResponse } from '../../model/UserResponse';

@Component({
  selector: 'app-user',
  imports: [RouterLink, NothingToShow],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  userService: UserService = inject(UserService);
  userList= signal<Array<UserResponse>>([]);

  ngOnInit(): void {
    this.userService
    .getUsers()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((users) => {
      this.userList.set(users);
    })
  }
}
