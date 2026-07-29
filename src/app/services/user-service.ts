import { inject, Service } from '@angular/core';
import { UserResponseType } from '../model/user/UserResponseType';
import { HttpClient } from '@angular/common/http';

@Service()
export class UserService {
    http = inject(HttpClient);

    getUsers() {
        const url = `http://localhost:8080/api/v1/users`;
        return this.http.get<Array<UserResponseType>>(url);
    }   

    getUsersById(userId : string | null) {
        const url = `http://localhost:8080/api/v1/users/${userId}`;
        return this.http.get<UserResponseType>(url);
    }
}
