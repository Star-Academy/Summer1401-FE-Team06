import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBusinessComponent } from './game-business.component';

describe('GameBusinessComponent', () => {
  let component: GameBusinessComponent;
  let fixture: ComponentFixture<GameBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
