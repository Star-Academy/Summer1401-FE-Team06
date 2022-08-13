import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AuthComponent} from './pages/auth/auth.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AuthGuard} from './guards/auth.guard';
import {GameInfoComponent} from './pages/game-info/game-info.component';
import {SearchComponent} from './pages/search/search.component';
import {FavoritesComponent} from './pages/profile/favorites/favorites.component';
import {EditProfileComponent} from './pages/profile/edit-profile/edit-profile.component';
import {WishListComponent} from './pages/profile/wish-list/wish-list.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'auth', component: AuthComponent, canActivate: [AuthGuard]},
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', pathMatch: 'full', component: FavoritesComponent},
            {path: 'favorites', component: FavoritesComponent},
            {path: 'edit', component: EditProfileComponent},
            {path: 'wish-list', component: WishListComponent},
        ],
    },
    {path: 'search', component: SearchComponent},
    {path: 'game/:id', component: GameInfoComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
