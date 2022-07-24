import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecondNavbarComponent} from './second-navbar.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IconModule} from '../../../icon/icon.module';
import {SlidebarModule} from '../../../slidebar/slidebar.module';

describe('SecondNavbarComponent', () => {
    let component: SecondNavbarComponent;
    let fixture: ComponentFixture<SecondNavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SecondNavbarComponent],
            imports: [CommonModule, RouterTestingModule, RouterModule, FormsModule, IconModule, SlidebarModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SecondNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
