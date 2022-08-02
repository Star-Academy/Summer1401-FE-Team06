import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchBoxComponent} from './search-box.component';

describe('SearchBoxComponent', () => {
    let component: SearchBoxComponent;
    let fixture: ComponentFixture<SearchBoxComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchBoxComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have value input - default', () => {
        const inputEl = host.querySelector('input');

        expect(inputEl).toBeTruthy();
        expect(inputEl?.value).toBeFalsy();
    });
    it('should have value input - with value', () => {
        const inputEl = host.querySelector('input');
        component.searchPhrase = 'test text';
        fixture.detectChanges();
        expect(inputEl).toBeTruthy();
        expect(inputEl?.value).toBeTruthy();
    });
});
