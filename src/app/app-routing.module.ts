import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tutorial',
    pathMatch: 'full',
  },
  {
    path: 'tutorial',
    loadChildren: () =>
      import('./pages/tutorial-list/tutorial-list.module').then(
        (m) => m.TutorialListPageModule
      ),
  },
  {
    path: 'tutorial/:id',
    loadChildren: () =>
      import('./pages/tutorial-detail/tutorial-detail.module').then(
        (m) => m.TutorialDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
