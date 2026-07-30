import { Component, inject } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-post-user',
  imports: [],
  templateUrl: './post-user.html',
  styleUrl: './post-user.scss',
})
export class PostUser {
  userService: UserService = inject(UserService);

}
