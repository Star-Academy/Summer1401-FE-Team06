import {Component} from '@angular/core';

interface User {
    username: string;
    password: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public user: User = {username: '', password: ''};
}
