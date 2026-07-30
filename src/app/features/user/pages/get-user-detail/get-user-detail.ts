import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { ActivatedRoute, RedirectCommand, RouterLink } from '@angular/router';
import { NothingToShow } from '../../../../shared/components/nothing-to-show/nothing-to-show';
import { UserService } from '../../../../core/services/user.service';
import { UserResponse } from '../../model/UserResponse';

@Component({
  selector: 'app-get-user-detail',
  imports: [RouterLink, NothingToShow],
  templateUrl: './get-user-detail.html',
  styleUrl: './get-user-detail.scss',
})
export class GetUserDetail implements OnInit {
  userService: UserService = inject(UserService);
  user : any = signal<UserResponse | null>(null);
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
