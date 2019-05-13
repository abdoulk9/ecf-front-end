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
  { path: 'insert-ville', loadChildren: './insert-ville/insert-ville.module#InsertVillePageModule' },
  { path: 'delete-ville', loadChildren: './delete-ville/delete-ville.module#DeleteVillePageModule' },
  { path: 'update-ville', loadChildren: './update-ville/update-ville.module#UpdateVillePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
