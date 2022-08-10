import {ProfileComponent} from './profile.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../services/auth.service';
import {VALID_USER_LOGIN_DATA} from '../../mocks/fetch.mock';

describe('ProfileComponent', () => {
    let fixture: ComponentFixture<ProfileComponent>;
    let component: ProfileComponent;
    let host: HTMLElement;

    let authServiceMock: AuthService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            imports: [RouterTestingModule],
            providers: [AuthService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;

        authServiceMock = TestBed.inject(AuthService);
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });
});
