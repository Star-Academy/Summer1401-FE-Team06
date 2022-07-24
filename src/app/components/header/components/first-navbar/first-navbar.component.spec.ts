import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstNavbarComponent} from './first-navbar.component';
import {HeaderComponent} from '../../header.component';
import {SearchBoxComponent} from '../search-box/search-box.component';
import {SecondNavbarComponent} from '../second-navbar/second-navbar.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IconModule} from '../../../icon/icon.module';
import {SlidebarModule} from '../../../slidebar/slidebar.module';

describe('FirstNavbarComponent', () => {
    let component: FirstNavbarComponent;
    let fixture: ComponentFixture<FirstNavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent, SearchBoxComponent, FirstNavbarComponent, SecondNavbarComponent],
            imports: [CommonModule, RouterTestingModule, RouterModule, FormsModule, IconModule, SlidebarModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FirstNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
