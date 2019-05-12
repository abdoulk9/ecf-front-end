import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home',loadChildren: './home/home.module#HomePageModule' },
  { path: 'list',loadChildren: './list/list.module#ListPageModule' },
  { path: 'villes',loadChildren: './villes/villes.module#VillesPageModule' },
  { path: 'select-ville', loadChildren: './select-ville/select-ville.module#SelectVillePageModule' },
  { path: 'insert-ville', loadChildren: './insert-ville/insert-ville.module#InsertVillePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
