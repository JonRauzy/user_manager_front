import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { User } from './features/user/pages/get-users/user';
import { GetUserDetail } from './features/user/pages/get-user-detail/get-user-detail';


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
