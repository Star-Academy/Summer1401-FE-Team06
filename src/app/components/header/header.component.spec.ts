import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {FirstNavbarComponent} from './components/first-navbar/first-navbar.component';
import {SecondNavbarComponent} from './components/second-navbar/second-navbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {IconModule} from '../icon/icon.module';
import {SlidebarModule} from '../slidebar/slidebar.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent, SearchBoxComponent, FirstNavbarComponent, SecondNavbarComponent],
            imports: [CommonModule, RouterTestingModule, RouterModule, FormsModule, IconModule, SlidebarModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
