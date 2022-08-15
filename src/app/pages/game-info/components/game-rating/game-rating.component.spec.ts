import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRatingComponent } from './game-rating.component';

describe('GameRatingComponent', () => {
  let component: GameRatingComponent;
  let fixture: ComponentFixture<GameRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
