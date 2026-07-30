import { inject, Service } from '@angular/core';
import { UserResponse } from '../../features/user/model/UserResponse';
import { HttpClient } from '@angular/common/http';
import { UserRequest } from '../../features/user/model/UserRequest';
import { Observable } from 'rxjs';

@Service()
export class UserService {
    http = inject(HttpClient);
    apiUrl: string = `http://localhost:8080/api/v1`;

    getUsers() {
        const url = `${this.apiUrl}/users`;
        return this.http.get<Array<UserResponse>>(url);
    }   

    getUsersById(userId : string) {
        const url = `${this.apiUrl}/users/${userId}`;
        return this.http.get<UserResponse>(url);
    }

    createUser(userRequest : UserRequest) {
        const url = `${this.apiUrl}/users`;
        return this.http.post(url, userRequest);
    }
}
