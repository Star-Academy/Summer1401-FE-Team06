import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model';
import {ProfileService} from '../../../services/profile.service';
import {AuthService} from '../../../services/auth.service';
import {ResultMessageService} from '../../../services/result-message.service';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
    @ViewChild('imageUpload') public imageUpload!: ElementRef<HTMLInputElement>;
    public user: User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        avatar: '',
        gender: true,
    };

    public constructor(
        public profileService: ProfileService,
        private authService: AuthService,
        private resultMessageService: ResultMessageService
    ) {
        this.profileService.getUserInfo().then();
        this.user = {...this.profileService.user} as User;
        this.user.dateOfBirth = this.user.dateOfBirth?.slice(0, 10);
    }

    public async formSubmitHandler(): Promise<void> {
        AuthService.isEditRequest = true;
        this.user.avatar = await this.convertImageToBase64(this.imageUpload.nativeElement.files);
        const response = await this.authService.alter(this.user);
        if (!response?.message) {
            await this.profileService.getUserInfo();
            this.resultMessageService.show('تغییرات با موفقیت انجام شد', 'success');
            return;
        }
        this.resultMessageService.show(response.message, 'error');
        AuthService.isEditRequest = false;
    }

    private async convertImageToBase64(files: FileList | null): Promise<string | undefined> {
        if (!files || !files[0]) return undefined;

        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = (): void => {
                resolve(reader.result?.toString());
            };
            reader.readAsDataURL(files[0]);
        });
    }
}
