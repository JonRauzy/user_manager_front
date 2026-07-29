import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { User } from './pages/user/get-users/user';

export const routes: Routes = [
    {
        "path": "",
        "pathMatch": "full",
        "component": Home
    },

    {
        "path": "users",
        "component": User
    }
];
