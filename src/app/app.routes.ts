import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { User } from './pages/user/get-users/user';
import { GetUserDetail } from './pages/user/get-user-detail/get-user-detail';

export const routes: Routes = [
    {
        "path": "",
        "pathMatch": "full",
        "component": Home
    },

    {
        "path": "users",
        "component": User
    },
    
    {
        "path": "users/:userId",
        "component": GetUserDetail
    }
];
