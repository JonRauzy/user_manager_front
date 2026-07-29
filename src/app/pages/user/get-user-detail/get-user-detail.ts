import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { UserService } from '../../../services/user-service';
import { UserResponseType } from '../../../model/user/UserResponseType';
import { ActivatedRoute, RedirectCommand, RouterLink } from '@angular/router';
import { NothingToShow } from '../../../components/warnings/nothing-to-show/nothing-to-show';

@Component({
  selector: 'app-get-user-detail',
  imports: [RouterLink, NothingToShow],
  templateUrl: './get-user-detail.html',
  styleUrl: './get-user-detail.scss',
})
export class GetUserDetail implements OnInit {
  userService: UserService = inject(UserService);
  user : any = signal<UserResponseType | null>(null);
  route: ActivatedRoute = inject(ActivatedRoute); 

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');

    this.userService
    .getUsersById(userId!)
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((u) => {
      this.user.set(u);
    })
  }
}
