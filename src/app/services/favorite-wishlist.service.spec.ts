import { TestBed } from '@angular/core/testing';

import { FavoriteWishlistService } from './favorite-wishlist.service';

describe('FavoriteWishlistService', () => {
  let service: FavoriteWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
