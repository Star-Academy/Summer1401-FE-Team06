import {Component} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public logoutButtonClickHandler(): void {
        localStorage.removeItem('token');
        location.reload();
    }
}
